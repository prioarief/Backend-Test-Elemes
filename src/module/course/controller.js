const uploadStream = require("../../utilities/cloudinary");
const service = require("./service");

const create = async (payload) => {
  return uploadStream(payload.thumbnail, "course")
    .then(async (res) => {
      if (res) {
        payload.thumbnail = res.secure_url;
        await service.create(payload);
        return true
      }
    })
    .catch((err) => {
      return false;
    });
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
