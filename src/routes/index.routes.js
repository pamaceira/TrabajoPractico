// Se encarga de conectar todas las rutas!!!

const { Router } = require("express")
const usuariosRouter = require("./usuarios.router")
const pacientesRouter = require("./pacientes.router")
const profesionalesRouter = require("./profesionales.router")
const atencionesRouter = require("./atenciones.router")

const rutas_init = () => {
    
    const router = Router()

    router.use("/usuarios", usuariosRouter)
    router.use("/pacientes", pacientesRouter)
    router.use("/profesionales", profesionalesRouter)
    router.use("/atenciones", atencionesRouter)

    return router
}

module.exports = {rutas_init}