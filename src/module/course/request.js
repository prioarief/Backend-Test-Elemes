const Joi = require("joi");
const wrapper = require("../../utilities/wrapper");
const controller = require("./controller");

const post = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required(),
      category_id: Joi.number().required(),
    });

    const { error, value } = schema.validate(req.body);
    if (req.fileValidationError)
      return wrapper(res, false, null, req.fileValidationError, 400);
    if (!req.file)
      return wrapper(res, false, null, "thumbnail is required", 400);
    if (error) return wrapper(res, false, null, error.message, 400);
    value.thumbnail = req.file.buffer;
    const created = await controller.create(value);
    if (!created) return wrapper(res, false, null, "something wrong", 500);
    return wrapper(res, true, "Success", null, 200);
  } catch (error) {
    console.log(error, "error");
  }
};
const gets = async (req, res) => {
  try {
    const schema = Joi.object({
      price: Joi.string().valid("lowest", "highest", "free"),
      q: Joi.string(),
    });

    const { error, value } = schema.validate(req.query);
    if (error) return wrapper(res, false, null, error.message, 400);
    if (value.price === "lowest") {
      value.price = "ASC";
    } else if (value.price === "highest") {
      value.price = "DESC";
    }
    const courses = await controller.gets(value);
    return wrapper(res, true, courses, null, 200);
  } catch (error) {
    console.log(error);
  }
};
const get = async (req, res) => {
  try {
    const schema = Joi.object({
      id: Joi.string(),
    });

    const { error, value } = schema.validate(req.params);
    if (error) return wrapper(res, false, null, error.message, 400);
    const courses = await controller.get(value);
    return wrapper(res, true, courses && {}, null, 200);
  } catch (error) {
    console.log(error);
  }
};
const update = async (req, res) => {
  try {
    const schema = Joi.object({
      id: Joi.string(),
      name: Joi.string().required(),
      price: Joi.number().required(),
      category_id: Joi.number().required(),
    });

    const { error, value } = schema.validate({ ...req.params, ...req.body });
    if (error) return wrapper(res, false, null, error.message, 400);
    const courses = await controller.get({ id: value.id });
    if (!courses) return wrapper(res, false, null, "course not found", 404);
    await controller.update(value);
    return wrapper(res, true, "Successful Edited", null, 200);
  } catch (error) {
    console.log(error);
  }
};
const destroy = async (req, res) => {
  try {
    const schema = Joi.object({
      id: Joi.string(),
    });

    const { error, value } = schema.validate(req.params);
    if (error) return wrapper(res, false, null, error.message, 400);
    const courses = await controller.get(value);
    if (!courses) return wrapper(res, false, null, "course not found", 404);
    await controller.update({ ...value, is_delete: 1 });
    return wrapper(res, true, "Successful Deleted", null, 200);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { post, get, gets, destroy, update };
