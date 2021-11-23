const {User} = require("../../db/models")

const register = async (data) => {
    await User.create(data)
}

module.exports = {register}