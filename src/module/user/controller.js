const { compare } = require("../../utilities/bcrypt");
const { encrypt } = require("../../utilities/crypto");
const { createToken } = require("../../utilities/jwt");
const service = require("./service");

const register = async (data) => {
  return await service.create(data);
};
const login = async (data) => {
  const { password } = data;
  delete data.password;
  const user = await service.get(data);
  // password compare
  if (!compare(password, user.password)) return null;
  delete user.password;

  // create token with encrypted data
  user.token = createToken({ id: encrypt(user.id.toString()) });
  delete user.id;
  return user;
};

module.exports = { register, login };
