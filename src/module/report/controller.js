const { Op } = require("sequelize");
const { User, Course } = require("../../db/models");

const statistic = async () => {
  const countUser = await User.count();
  const countCourse = await Course.count();
  const countFreeCourse = await Course.count({
    where: { price: { [Op.eq]: 0 } },
  });
  return { countCourse, countFreeCourse, countUser };
};

module.exports = {statistic};
