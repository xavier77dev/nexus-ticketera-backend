const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
  sequelize.define("Usuario", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,


    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    contraseña: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    activo: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    rol: {
      type: DataTypes.STRING,
    },
    compania_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ocupado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    }

  })
}
