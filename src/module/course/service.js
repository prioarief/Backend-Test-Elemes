const { Course, CourseCategory } = require("../../db/models");
const { Op } = require("sequelize");

const create = async (data) => {
  return await Course.create(data);
};
const update = async (data) => {
  const id = data.id;
  return await Course.update(data, { where: { id } });
};
const gets = async (data) => {
  return await Course.findAll({
    raw: true,
    ...(["ASC", "DESC"].includes(data.price) && { order: [["price", data.price]] }),
    where: {
      ...(data.q && {
        name: { [Op.substring]: data.q },
      }),
      ...(!["ASC", "DESC"].includes(data.price) && data.price && { price: { [Op.eq]: 0 } }),
      ...(["ASC", "DESC"].includes(data.price) && { price: { [Op.ne]: 0 } }),
    },
    include: [{ model: CourseCategory, attributes: ["category"] }],
  });
};
const get = async (data) => {
  return await Course.findOne({
    raw: true,
    where: data,
    include: [{ model: CourseCategory, attributes: ["category"] }],
  });
};

module.exports = { create, gets, get, update };
