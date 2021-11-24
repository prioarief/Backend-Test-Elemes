"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Course.belongsTo(models.CourseCategory, { foreignKey: "category_id" });
    }
  }
  Course.init(
    {
      name: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      is_delete: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      thumbnail: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Course",
    }
  );
  return Course;
};
