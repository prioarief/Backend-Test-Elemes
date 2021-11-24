const Joi = require("joi");
const wrapper = require("../../utilities/wrapper");
const controller = require("./controller");

const get = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      price: Joi.number().required(),
      category_id: Joi.number().required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) return wrapper(res, false, null, error.message, 400);
    return wrapper(res, true, "", null, 200);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { get };
