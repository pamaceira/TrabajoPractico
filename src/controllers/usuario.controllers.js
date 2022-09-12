module.exports = {
    pacientes: async (req, res) => {try{
      console.log("Ejecutando pacientes!!!")
        res.json({
          menssage: "El paciente tal...."
       })

  
      }catch (err) {
      console.log(err)
              }
    

    },

    atenciones: async (req, res) => {
      try{
        console.log("Ejecutando Atenciones!!!")
          res.json({
            menssage: "Atenciones del paciente."
         })

    
        }catch (err) {
        console.log(err)
                }  
    },

    profesionales: async (req, res) => {

      try{
          console.log("Ejecutando profesionales!!!")
            res.json({
              menssage: "Listado de Profesionales"
           })

      
          }catch (err) {
          console.log(err)
                  }
        
    },

    prueba: async (req, res) => {

        try{
            console.log("Ejecutando prueba!!!")
              res.json({
                menssage: "Hola Mundo"
             })

        
            }catch (err) {
            console.log(err)
                    }        
    }


 }