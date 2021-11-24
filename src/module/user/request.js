const Joi = require("joi");
const { hash } = require("../../utilities/bcrypt");
const wrapper = require("../../utilities/wrapper");
const controller = require("./controller");
const { User } = require("../../db/models");

const register = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      password: Joi.string().required(),
      email: Joi.string().email().required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) return wrapper(res, false, null, error.message, 400);
    const emailIsExist = await User.findOne({
      raw: true,
      where: { email: value.email },
    });
    if (emailIsExist) return wrapper(res, false, "Email Already Exist", null, 400);
    value.password = hash(value.password);
    await controller.register(value);
    return wrapper(res, true, "Register Success", null, 200);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { register };
