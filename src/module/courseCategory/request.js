const Joi = require("joi");
const wrapper = require("../../utilities/wrapper");
const controller = require("./controller");

const post = async (req, res) => {
  try {
    const schema = Joi.object({
      category: Joi.string().required(),
    });

    const { error, value } = schema.validate(req.body);
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
      category: Joi.string(),
    });

    const { error, value } = schema.validate(req.query);
    const category = await controller.gets(value);
    return wrapper(res, true, category, null, 200);
  } catch (error) {
    console.log(error);
  }
};
const get = async (req, res) => {
  try {
    const schema = Joi.object({
      id: Joi.string().required(),
    });

    const { error, value } = schema.validate(req.params);
    if (error) return wrapper(res, false, null, error.message, 400);
    const category = await controller.get(value);
    return wrapper(res, true, category, null, 200);
  } catch (error) {
    console.log(error);
  }
};
const update = async (req, res) => {
  try {
    const schema = Joi.object({
      id: Joi.string(),
      category: Joi.string().required(),
    });

    const { error, value } = schema.validate({ ...req.params, ...req.body });
    if (error) return wrapper(res, false, null, error.message, 400);
    const category = await controller.get({ id: value.id });
    if (!category) return wrapper(res, false, null, "course not found", 404);
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
    const category = await controller.get(value);
    if (!category) return wrapper(res, false, null, "category not found", 404);
    await controller.update({ ...value, is_delete: 1 });
    return wrapper(res, true, "Successful Deleted", null, 200);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { post, get, gets, destroy, update };
