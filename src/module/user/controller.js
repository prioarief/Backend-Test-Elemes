const service = require("./service")

const register = async (data) => {
    return await service.register(data)
}

module.exports = {register}