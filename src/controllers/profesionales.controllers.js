module.exports = {
    listar: async (req, res) => {
    
    try {
      console.log('Prueba listar profesionales!')

      res.json({
          mensaje: 'Se ejecutó el listar profesionales!!!'
      })
  } 
  catch (error) {
      console.log('Error: ' + error)    
  }

    },

    agregar: async (req, res) => {
      try{
        console.log("Ejecutando agregar profesionales!!!")
          res.json({
            menssage: "El profesional se agrego con exito!!."
         })

    
        }catch (err) {
        console.log(err)
                }  
    },

    listar_info: async (req, res) => {

      try {
        console.log('Prueba Profesional/Listar Info! idProfesional: ' + req.params.idProfesional)

        res.json({
            mensaje: 'Se ejecutó el Listar Info!!! idProfesional: ' + req.params.idProfesional
        })
    } 
    catch (error) {
        console.log('Error: ' + error)    
    }  
    }

 }