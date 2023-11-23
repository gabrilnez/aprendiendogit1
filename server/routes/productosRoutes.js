// Importa Express y crea una instancia del enrutador
const express = require('express');
const router = express.Router();

const productosController = require('../controllers/productosController');

// Define rutas y sus controladores
router.get('/products', productosController.obtenerProductos);
router.get('/products/remarcar/:porcentaje', productosController.remarcarPrecios);
router.get('/products/descontar/:porcentaje', productosController.descuentoPrecios);
router.get('/products/aumentar/:cantidad', productosController.aumentoPrecios);
router.get('/products/agregarTexto/:texto', productosController.agregarTextoNuevo);


// Exporta el enrutador para su uso en otros archivos
module.exports = router;
