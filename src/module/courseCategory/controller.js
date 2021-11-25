const uploadStream = require("../../utilities/cloudinary");
const service = require("./service");

const create = async (payload) => {
  return await service.create(payload);
};
const gets = async (payload) => {
  return await service.gets(payload);
};
const get = async (payload) => {
  return await service.get(payload);
};
const update = async (payload) => {
  return await service.update(payload);
};

module.exports = { create, gets, get, update };
