// Ruta de los pacientes

const router = require("express").Router()

const pacientesControllers = require('../controllers/pacientes.controllers')


router.get('/', pacientesControllers.listar)
router.post('/', pacientesControllers.agregar)
router.get('/:idpaciente', pacientesControllers.listar_info)


module.exports = router