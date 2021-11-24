const { User, Role } = require("../../db/models");

const create = async (data) => {
  return await User.create(data);
};
const get = async (data) => {
  return await User.findOne({ raw: true, where: data, include: [{model: Role, attributes: ['role']}]});
};

module.exports = { create, get };