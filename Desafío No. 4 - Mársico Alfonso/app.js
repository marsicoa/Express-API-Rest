const express = require('express')
const path = require('path')

//App
const app = express()

//Router API
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

//Router
const routerProductos = require('./routes/productos')
app.use('/api', routerProductos)

//Home
app.get('/', (req, res) => {
    res.send('Desafio No. 4 - Marsico Alfonso')
})

//Server
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando el puerto ${server.address().port}`)
}) 
server.on("error", error => console.log(`${error}`))                  

module.exports = app