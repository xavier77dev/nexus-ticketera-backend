const {Router} = require("express");
const recordRouter = Router()
const {Registro}=require('../../db')

function validate(obj){
    let { ticket_id,historial}=obj
    if(!ticket_id&&!historial)return true
}


recordRouter.get("/",async (req,res)=>{
    res.json(await Registro.findAll())
})

recordRouter.get("/:id",async (req,res)=>{
    let id = parseInt(req.params.id);
    console.log(id)
    if(isNaN(id))res.json({message:"error:no es numerico"})
    else res.json(await Registro.findByPk(id))
})


recordRouter.post("/",async (req,res)=>{
    await Registro.create(req.body)
    res.status(201)
})


module.exports = recordRouter;