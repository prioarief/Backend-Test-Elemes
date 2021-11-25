"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class CourseCategory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CourseCategory.hasMany(models.Course, { foreignKey: "id" });
    }
  }
  CourseCategory.init(
    {
      category: DataTypes.STRING,
      is_delete: DataTypes.INTEGER,
      is_popular: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "CourseCategory",
    }
  );
  return CourseCategory;
};
