const Joi = require("joi");
const { hash } = require("../../utilities/bcrypt");
const wrapper = require("../../utilities/wrapper");
const controller = require("./controller");
const service = require("../../module/user/service");

const register = async (req, res) => {
  try {
    const schema = Joi.object({
      name: Joi.string().required(),
      password: Joi.string().required(),
      email: Joi.string().email().required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) return wrapper(res, false, null, error.message, 400);
    const emailIsExist = await service.get({
      email: value.email,
    });
    if (emailIsExist)
      return wrapper(res, false, "Email Already Exist", null, 400);
    value.password = hash(value.password);
    await controller.register(value);
    return wrapper(res, true, "Register Success", null, 200);
  } catch (error) {
    console.log(error);
  }
};
const login = async (req, res) => {
  try {
    const schema = Joi.object({
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    });

    const { error, value } = schema.validate(req.body);
    if (error) return wrapper(res, false, null, error.message, 400);
    const emailIsExist = await service.get({
      email: value.email,
    });
    if (!emailIsExist)
      return wrapper(res, false, "Email Is Not Registered", null, 400);
    const user = await controller.login(value);
    if(!user) return wrapper(res, false, "Password invalid", null, 400);
    return wrapper(res, true, user, null, 200);
  } catch (error) {
    console.log(error);
    return wrapper(res, false, null, "server error", 500);
  }
};

module.exports = { register, login };
