const {Router} = require("express");
const ticketRouter = Router()
const {Ticket,Registro}=require('../../db')


ticketRouter.get("/",async (req,res)=>{
    res.json(await Ticket.findAll())
})

ticketRouter.get("/creadoP/:idUsuario",async (req,res)=>{
    let id = parseInt(req.params.idUsuario);
    console.log(id)
    if(isNaN(id))res.json({message:"error:no es numerico"})
    else res.json(await Ticket.findAll({where:{usuario_id:id}}))
})   

ticketRouter.get("/:id",async (req,res)=>{
    let id = parseInt(req.params.id);
    console.log(id)
    if(isNaN(id))res.json({message:"error:no es numerico"})
    else res.json(await Ticket.findByPk(id))
})

async function existe(id){
   return await Ticket.findByPk(id)
}

async function crearRegistro(body){
    await Registro.create({ticket_id:body.id,historial:JSON.stringify(body)})
}

ticketRouter.post("/",async (req,res)=>{

    let a= await Ticket.create({
        estado: req.body.estado,
        prioridad: req.body.prioridad,
        incidencia: req.body.incidencia,
        diagnostico: req.body.diagnostico,
        usuario_id: req.body.usuario_id,
        operario_id:null,
        activo:true,
        nota:""
      })
      console.log(a+ " aca lo creo")
await crearRegistro(a)

    res.json(a)
})

ticketRouter.put("/editar",async (req,res)=>{

    let a= await Ticket.update({
        estado: req.body.estado,
        prioridad: req.body.prioridad,
        incidencia: req.body.incidencia,
        diagnostico: req.body.diagnostico,
        usuario_id: req.body.usuario_id,
        operario_id:req.body.operario_id,
        activo:req.body.activo,
        nota:req.body.nota
      },{where:{id:req.body.id}})
      let existes=await existe(req.body.id)
await crearRegistro(existes)
res.json({Message:'listo'})
    })

module.exports = ticketRouter;