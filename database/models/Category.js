module.exports = (sequelize, dataTypes) => {
  const alias = "Categories";
  const columns = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull: false,
    } ,
    name: {
      type: dataTypes.STRING,
      allowNull: false
    },
  };
  const config = {
    tableName: "categories",
    timestamps: false
  };
  const Category = sequelize.define(alias, columns, config);
  return Category;
};
