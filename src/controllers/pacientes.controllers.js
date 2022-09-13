module.exports = {
    listar: async (req, res) => {
    
    try {
      console.log('Prueba listar paciente!')

      res.json({
          mensaje: 'Se ejecutó el listar paciente!!!'
      })
  } 
  catch (error) {
      console.log('Error: ' + error)    
  }

    },

    agregar: async (req, res) => {
      try{
        console.log("Ejecutando agregar pacientes!!!")
          res.json({
            menssage: "El paciente se agrego con exito!!."
         })

    
        }catch (err) {
        console.log(err)
                }  
    },

    listar_info: async (req, res) => {

      try {
        console.log('Prueba Pacientes/Listar Info! idPaciente: ' + req.params.idPaciente)

        res.json({
            mensaje: 'Se ejecutó el Listar Info!!! idPaciente: ' + req.params.idPaciente
        })
    } 
    catch (error) {
        console.log('Error: ' + error)    
    }  
    }

 }