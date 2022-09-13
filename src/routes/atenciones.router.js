// Ruta de atenciones

const router = require("express").Router()

const atencionesControllers = require('../controllers/atenciones.controllers')


router.get('/', atencionesControllers.listar)
router.post('/', atencionesControllers.agregar)
router.get('/:idpaciente', atencionesControllers.listar_info)


module.exports = router