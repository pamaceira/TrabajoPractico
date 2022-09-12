const express = require('express')

const globalConstants = require('./conts/globalConstants')
const routerConfig = require('./routes/index.routes')

const configuracionApi = (app) => {
    app.use(express.json())
    app.use(express.urlencoded({extended: true}))

    return;
}

const configuracionRouter = (app) => {
    app.use('/api/', routerConfig.rutas_init())


}

const init = () => {
    const app = express() //crea una instancia de express
    configuracionApi(app) //Configura API

    configuracionRouter(app)

    app.listen(globalConstants.PORT)
    console.log('La aplicación se esta ejecutando en el puerto : ' + globalConstants.PORT)
}

init();