const express = require('express')
const Contenedor = require('./contenedor.js')
const app = express()
const PORT = 8080

const server = app.listen(process.env.PORT || PORT, ()=>{
    console.log(`server listenind on PORT ${PORT}`)
})

server.on('error', err =>console.log(`el error es: ${err}`))

const products = new Contenedor('products.txt')

app.get('/productos', async(req,res)=>{
    const productos = await products.getAll()
    res.send(productos)
})

app.get('/productos/:id',async(req,res)=>{

   const productos = await products.getAll()
    
    let id = req.params.id

    let buscado = await productos.find(prod =>JSON.stringify(prod.id) === id)
 
    if(!buscado) return res.send({error:"producto no encontrado"})
    res.send({buscado})
})