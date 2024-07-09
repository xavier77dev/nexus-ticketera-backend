const {Router} = require("express");
const usersRouter = Router()
const {Usuario}=require('../../db');
const { where } = require("sequelize");


usersRouter.get("/",async (req,res)=>{
    res.json(await Usuario.findAll())
})

usersRouter.get("/:id",async (req,res)=>{
    let id = parseInt(req.params.id);
    console.log(id)
    if(isNaN(id))res.json({message:"error:no es numerico"})
    else{
        let user=await Usuario.findByPk(id)
        res.json(user)
}})

usersRouter.post('/login',async (req,res)=>{
    const { email,contraseña } = req.body;
    let user=await Usuario.findOne({where:{email:email,contraseña:contraseña}})
    if( user==undefined)res.json({message:"error"})
    else res.json(user)
})
async function existe(email){
    return await Usuario.findOne({where:{email:email}})
}

usersRouter.post("/",async (req,res)=>{
   let user=await existe(req.body.email)
    if(user!=null)res.json({message:"error mail repetido"}).status(400)
   else{
    await Usuario.create({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        contraseña : req.body.contraseña , // Remember to handle password securely
        email: req.body.email,
        activo: req.body.activo,
        rol: req.body.rol,
        compania_id: req.body.compania_id,
        ocupado:false
      })
      res.status(201)
}})

usersRouter.put('/editar',async (req,res)=>{
    let user=await Usuario.findByPk(req.body.id)
     if(user==null)res.json({message:"error"}).status(400)
    else{
        
       
     await Usuario.update({
        contraseña : req.body.contraseña , // Remember to handle password securely
        email: req.body.email,
        activo: req.body.activo,
        rol: req.body.rol,
        ocupado:(user.ocupado!=req.body.ocupado&&req.body.ocupado!=undefined)?req.body.ocupado:user.ocupado
      },{where:{id:user.id}})
       res.json(await Usuario.findByPk(req.body.id))
 }})


module.exports = usersRouter;