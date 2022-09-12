// Ruta de los usuarios

const router = require("express").Router()

const usuarioControllers = require('../controllers/usuario.controllers')
//const usuarioController = require('../controllers/usuario.controllers')

router.get('/', usuarioControllers.pacientes)
router.get('/', usuarioControllers.atenciones)
router.post('/', usuarioControllers.profesionales)


module.exports = router