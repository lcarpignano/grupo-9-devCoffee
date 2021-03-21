module.exports = (sequelize, dataTypes) => {
  const alias = "Weights";
  const columns = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING,
      allowNull: false
    },
    logo: {
      type: dataTypes.STRING,
      allowNull: false
    },
    grams: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },   
    discount: {
      type: dataTypes.DECIMAL,
      allowNull: false
    }
  };
  const config = {
    tableName: "Weights",
    timestamps: false
  };
  const Weight = sequelize.define(alias, columns, config);
  return Weight;
};
