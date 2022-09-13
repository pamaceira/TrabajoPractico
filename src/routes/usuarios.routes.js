// Ruta de los usuarios

const router = require("express").Router()

const usuarioControllers = require('../controllers/usuario.controllers')
//const usuarioController = require('../controllers/usuario.controllers')

router.get('/', usuarioControllers.listar)
router.post('/', usuarioControllers.agregar)
router.get('/:idusuario', usuarioControllers.listar_info)


module.exports = router