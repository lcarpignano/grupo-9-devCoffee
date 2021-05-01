module.exports = (sequelize, dataTypes) => {
  const alias = "Products";
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
    logo: {
      type: dataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: dataTypes.STRING,
      allowNull: false
    },
    description: {
      type: dataTypes.STRING,
      allowNull: false
    },
    price: {
      type: dataTypes.DECIMAL,
      allowNull: false
    },
    origin: {
      type: dataTypes.STRING,
      allowNull: false
    },
    sale: {
      type: dataTypes.BOOLEAN,
      allowNull: false
    },
    featured: {
      type: dataTypes.BOOLEAN,
      allowNull: false
    },
    category_id: {
      type: dataTypes.DECIMAL,
      allowNull: false
    }
  };
  const config = {
    tableName: "Products",
    timestamps: false
  };
  const Product = sequelize.define(alias, columns, config);
  return Product;
};
