const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define("Registro", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,


        },
        ticket_id: {
            type: DataTypes.INTEGER,
            allowNull: false
            

        },
        historial: {
            type: DataTypes.JSON,
            allowNull: false,

        }
        ,
    })
}