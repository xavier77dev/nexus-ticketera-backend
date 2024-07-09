const { Sequelize } = require("sequelize")
require("dotenv").config()
const UserModel = require("./models/User");
const TicketModel = require("./models/Ticket");
let CompanyModel = require("./models/Company");
let RecordModel = require('./models/Record')

const sequelize = new Sequelize(process.env.DATABASE_URL);

// const sequelize = new Sequelize(
//   {
//     username: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     password: process.env.DB_PASSWORD,
//     host: process.env.DB_HOST,
//     dialect: "postgres",
//     dialectOptions: {
//       ssl: {
//         require: true,
//       }
//     },
//   }
// )


UserModel(sequelize);
TicketModel(sequelize);
CompanyModel(sequelize)
RecordModel(sequelize)


// console.log(sequelize.models)

const { Usuario, Ticket, Compania, Registro } = sequelize.models;

//Relaciones
Compania.hasMany(Usuario, { foreignKey: 'compania_id' })
Usuario.belongsTo(Compania, { foreignKey: 'compania_id' })






Usuario.hasMany(Ticket, { foreignKey: 'usuario_id' }); //Un usuario puede tener varios tickets
Ticket.belongsTo(Usuario, { foreignKey: 'usuario_id' })  //Un ticket pertenece a un usuario





Usuario.hasMany(Ticket, { foreignKey: 'operario_id' })
Ticket.belongsTo(Usuario, { foreignKey: 'operario_id' })


Ticket.hasMany(Registro, { foreignKey: 'ticket_id' })
Registro.belongsTo(Ticket, { foreignKey: 'ticket_id' })


module.exports = { sequelize, ...sequelize.models };
