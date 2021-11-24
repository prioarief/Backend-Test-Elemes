const { User } = require("../../db/models");

const create = async (data) => {
  return await User.create(data);
};
const get = async (data) => {
  return await User.findOne({ raw: true, where: data });
};

module.exports = { create, get };
