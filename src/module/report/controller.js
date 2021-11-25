const { Op } = require("sequelize");
const { User, Course } = require("../../db/models");

const statistic = async () => {
  const countUser = await User.count({ where: { is_delete: 0 } });
  const countCourse = await Course.count({ where: { is_delete: 0 } });
  const countFreeCourse = await Course.count({
    where: { price: { [Op.eq]: 0 }, is_delete: 0 },
  });
  return { countCourse, countFreeCourse, countUser };
};

module.exports = { statistic };
