module.exports = {
    listar: async (req, res) => {
    
    try {
      console.log('Prueba usuarios listar!')

      res.json({
          mensaje: 'Se ejecutó el usuarios listar!!!'
      })
  } 
  catch (error) {
      console.log('Error: ' + error)    
  }

    },

    agregar: async (req, res) => {
      try{
        console.log("Ejecutando agregar usuario!!!")
          res.json({
            menssage: "Alta usuarios!!!."
         })

    
        }catch (err) {
        console.log(err)
                }  
    },

    listar_info: async (req, res) => {

      try {
        console.log('Prueba usuarios/Listar Info! idUsuario: ' + req.params.idUsuario)

        res.json({
            mensaje: 'Se ejecutó el GET usuarios/Listar Info!!! idUsuario: ' + req.params.idUsuario
        })
    } 
    catch (error) {
        console.log('Error: ' + error)    
    }  
    }
    
 }