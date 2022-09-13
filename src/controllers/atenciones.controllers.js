module.exports = {
    listar: async (req, res) => {
    
    try {
      console.log('Prueba listar atenciones del paciente!')

      res.json({
          mensaje: 'Se ejecutó el listar atenciones!!!'
      })
  } 
  catch (error) {
      console.log('Error: ' + error)    
  }

    },

    agregar: async (req, res) => {
      try{
        console.log("Ejecutando agregar Atención!!!")
          res.json({
            menssage: "Atención agregada con exito!!."
         })

    
        }catch (err) {
        console.log(err)
                }  
    },

    listar_info: async (req, res) => {

      try {
        console.log('Atenciones/Listar Info! idatencion: ' + req.params.idatencion)

        res.json({
            mensaje: 'Se ejecutó el Listar Info!!! idatencion: ' + req.params.idatencion
        })
    } 
    catch (error) {
        console.log('Error: ' + error)    
    }  
    }

 }