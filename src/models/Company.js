const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("Compania", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,


        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            

        },
        activo: {
            type: DataTypes.BOOLEAN,
            allowNull: false,

        }
    })
}