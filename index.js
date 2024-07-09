const app = require("./src/app")
const { sequelize } = require("./src/db")

const port = process.env.PORT || 3001;

app.listen(port, () => {
  sequelize.sync({ alter: true })
  console.log("Servidor funcionando en el puerto 3001")
})


