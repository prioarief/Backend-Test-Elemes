const { CourseCategory } = require("../../db/models");
const { Op } = require("sequelize");

const create = async (data) => {
  return await CourseCategory.create(data);
};
const update = async (data) => {
  const id = data.id;
  return await CourseCategory.update(data, { where: { id } });
};
const gets = async (data) => {
  return await CourseCategory.findAll({
    raw: true,
    where: {
      ...data,
      is_delete: 0,
    },
  });
};
const get = async (data) => {
  return await CourseCategory.findOne({
    raw: true,
    where: { ...data, is_delete: 0 },
  });
};

module.exports = { create, gets, get, update };
