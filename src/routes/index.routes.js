// Se encarga de conectar todas las rutas!!!

const { Router } = require("express")
const usuariosRouter = require("./usuarios.routes")
const pacientesRouter = require("./pacientes.routes")
const profesionalesRouter = require("./profesionales.routes")
const atencionesRouter = require("./atenciones.routes")

const rutas_init = () => {
    
    const router = Router()

    router.use("/usuarios", usuariosRouter)
    router.use("/pacientes", pacientesRouter)
    router.use("/profesionales", profesionalesRouter)
    router.use("/atenciones", atencionesRouter)

    return router
}

module.exports = {rutas_init}