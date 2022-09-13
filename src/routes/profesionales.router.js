// Ruta de profesionales

const router = require("express").Router()

const profesionalesControllers = require('../controllers/profesionales.controllers')


router.get('/', profesionalesControllers.listar)
router.post('/', profesionalesControllers.agregar)
router.get('/:idprofesional', profesionalesControllers.listar_info)


module.exports = router