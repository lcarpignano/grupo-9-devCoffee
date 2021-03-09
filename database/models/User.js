module.exports = (sequelize, dataTypes) => {
  const alias = "Users";
  const columns = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: dataTypes.INTEGER,
      allowNull: false,
    } ,
    first_name: {
      type: dataTypes.STRING,
      allowNull: false
    },
    last_name: {
      type: dataTypes.STRING,
      allowNull: false
    },
    username: {
      type: dataTypes.STRING,
      allowNull: false
    },
    mail: {
      type: dataTypes.STRING,
      allowNull: false
    },
    password: {
      type: dataTypes.STRING,
      allowNull: false
    },
    first_name: {
      type: dataTypes.STRING,
      allowNull: false
    },
    birth: {
      type: dataTypes.DATE,
      allowNull: false
    },
    address: {
      type: dataTypes.STRING,
      allowNull: false
    },
    country: {
      type: dataTypes.STRING,
      allowNull: false
    },
    city: {
      type: dataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: dataTypes.STRING,
      allowNull: false
    }
  };
  const config = {
    tableName: "users",
    timestamps: false
  };
  const User = sequelize.define(alias, columns, config);
  return User;
};
