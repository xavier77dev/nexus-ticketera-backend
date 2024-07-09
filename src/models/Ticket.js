const { DataTypes } = require("sequelize")

module.exports = (sequelize) => {
    sequelize.define('Ticket', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        prioridad: {
            type: DataTypes.STRING,
            allowNull: true,
           

        },
        incidencia: {
            type: DataTypes.STRING,
            allowNull: true,

        },
        diagnostico: {
            type: DataTypes.STRING,
            allowNull: true,


        }
        ,usuario_id: {
            type: DataTypes.INTEGER,
            allowNull: true,


        },
        
        operario_id:{
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        activo:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
        },
        nota:{
            type:DataTypes.STRING,
            allowNull: true,
        }


    })
}