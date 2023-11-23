const productoService = require('../services/productosService');

const obtenerProductos = (req, res) => {
    const productos = productoService.getProductos()
    res.json(productos);
};

const remarcarPrecios = (req, res) => {
    const porcentaje = req.params.porcentaje;
    const productos = productoService.remarcarPrecios(porcentaje)
    res.json(productos);
};

const descuentoPrecios = (req, res) => {
    const porcentaje = req.params.porcentaje;
    const productos = productoService.descuentoPrecios(porcentaje)
    res.json(productos);
};

const aumentoPrecios = (req, res) => {
    const cantidad = req.params.cantidad;
    const productos = productoService.aumentoPrecios(cantidad)
    res.json(productos);
};
const agregarTextoNuevo = (req, res) => {
    const texto = req.params.texto;
    const productos = productoService.agregarTextoNuevo(texto)
    res.json(productos);
};
module.exports = {
    obtenerProductos,
    remarcarPrecios,
    aumentoPrecios,
    descuentoPrecios,
    agregarTextoNuevo
}