const express = require('express')
const Contenedor = require('./contenedor.js')
const app = express()
const PORT = 8080

const server = app.listen(process.env.PORT || PORT, ()=>{
    console.log(`server listenind on PORT ${PORT}`)
})

server.on('error', err =>console.log(`el error es: ${err}`))

const products = new Contenedor('products.txt')

app.get('/productos', async(rej,res)=>{
    const productos = await products.getAll()
    res.send(productos)
})

app.get('/productoRandom',async(rej,res)=>{
    const productos = await products.getAll()
    let numeroRandom = Math.floor(Math.random() * productos.length)
    res.send(productos[numeroRandom])
})