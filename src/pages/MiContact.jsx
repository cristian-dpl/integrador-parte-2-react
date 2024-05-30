
import { postMessage } from "../util/api"

import { FormLayout } from "../layout/FormLayout";

const INITIAL_STATE = {
  name: "",
  email: "",
  subject: "",
  body: ""
}

export const MiContact = () => {

  const inputProps = {
    name: {
      inputLabel:"Nombre y apellido",
  
    },
    email: {
      inputLabel:"Correo electronico",
      inputType: "email"
  
    },
    subject: {
      inputLabel:"Asunto",
  
    },
    body: {
      inputLabel:"Mensaje",
      inputType: "textArea"
  
    }
    
  }



  return (

    <FormLayout
      title="Envianos un mensaje"
      inputProps={inputProps}
      onSubmit={postMessage}
      labelSubmit="Enviar mensaje"
      initialState={INITIAL_STATE}
    />
    
  )
}
