const express = require('express')
const router = express.Router()
const Contenedor = require('../public/javascripts/Contenedor')
let productos = new Contenedor('./public/txt/productos.txt')

/*Rutas Productos*/

router.get('/productos', async (req, res) => {
    res.json(await productos.getAll())
}) //devuelve todos los productos OK

router.get(`/productos/:id`, async (req, res) => {
    res.json(await productos.getById(req.params.id))
}) //devuelve un producto segun su id OK

router.post('/productos', async (req, res) => {
    res.json(await productos.save(req.body))
})//agrega un producto, y lo devuelve con su nuevo id OK

router.put('/productos/:id', async (req, res) => {
    res.json(await productos.updateById(req.params.id, req.body))
})//actualiza un producto segun su id

router.delete('/productos/:id', async (req, res) => {
    res.json(await productos.deleteById(req.params.id))
})//elimina un producto segun su id

module.exports = router