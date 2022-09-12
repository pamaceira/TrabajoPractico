// Se encarga de conectar todas las rutas!!!

const { Router } = require("express")
const usuariosRouter = require("./usuarios.router")

const rutas_init = () => {
    
    const router = Router()

    router.use("/usuarios", usuariosRouter)

    return router
}

module.exports = {rutas_init}