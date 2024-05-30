import { FormLayout } from "../layout/FormLayout"
import { postProducts } from "../util/api"
import { validateAgeFrom, validateAgeTo, validateLong, validatePrice, validateShort, validateStock } from "../util/upload-validations"


const INITIAL_STATE = {
  name: "",
  price: 0,
  stock: 0,
  brand: "",
  category: "",
  longDesc: "",
  shortDesc: "",
  delivery: "",
  egeFrom: 0,
  egeTo: 0,
  img: "https://i.ebayimg.com/thumbs/images/g/D~cAAOSwZd1l~wBI/s-l1200.jpg"



}

export const MiUpload = () => {
  const inputProps = {
    name: {
      inputLabel:"Nombre",
  
    },
    price: {
      inputLabel:"precio",
      inputType: "number",
      validation: validatePrice
    },
    stock: {
      inputLabel:"Stock inicial",
      inputType: "number",
      validation: validateStock
    },
    brand: {
      inputLabel:"Marca",
  
    },
    category: {
      inputLabel:"Categoria",
  
    },
    longDesc: {
      inputLabel:"Descripción corta",
      inputType: "textArea",
      validation: validateLong
      
      
    },
    shortDesc: {
      inputLabel:"Descripción larga",
      inputType: "textArea",
      validation: validateShort
  
    },
    delivery: {
      inputLabel: "Envio sin cargo",
      inputType: "checkbox"
    },

    egeFrom: {
      inputLabel: "Edad desde",
      inputType: "number",
      validation: validateAgeFrom
    },
    egeTo: {
      inputLabel: "Edad hasta",
      inputType: "number",
      validation: validateAgeTo
    },

    img: {
      inputLabel: "Foto del producto",
      inputType: "file"
    } 
  }

  return (
    <>
      <FormLayout
      title="Crea un nuevo producto"
      inputProps={inputProps}
      onSubmit={postProducts}
      labelSubmit="Guardar producto"
      initialState={INITIAL_STATE}
    />
    </>
  )
}
