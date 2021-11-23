const Joi = require('joi');
const { hash } = require('../../utilities/bcrypt');
const wrapper = require('../../utilities/wrapper');
const controller = require("./controller")


const register = async (req, res) => {
	try {
        const schema = Joi.object({
            name: Joi.string().required(),
            password: Joi.string().required(),
            email: Joi.string().email().required(),
        });
    
        const { error, value } = schema.validate(req.body);
        if (error) return wrapper(res, false, null, error.message, 400);
        value.password = hash(value.password)
        await controller.register(value)
        return wrapper(res, true, value, null, 200)
    } catch (error) {
        console.log(error)
    }
};

module.exports = { register };
