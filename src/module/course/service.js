const { Course, Role, CourseCategory } = require('../../db/models');
const { Op } = require('sequelize');

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
		...(data.sort && { order: [['price', data.sort]] }),
		where: { ...(data.q && { name: { [Op.substring]: data.q } }) },
		include: [{ model: CourseCategory, attributes: ['category'] }],
	});
};
const get = async (data) => {
	return await Course.findOne({
		raw: true,
		where: data,
		include: [{ model: CourseCategory, attributes: ['category'] }],
	});
};

module.exports = { create, gets, get, update };
