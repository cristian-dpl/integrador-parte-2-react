import { useState } from "react"

export const useForm = (INITIAL_STATE) =>{

        const [values, setValues] = useState(INITIAL_STATE)

        const headleInputChange = e => {
         
                setValues({
                    ...values,
                    [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value
                })

        }
        return{
            values,
            headleInputChange
        }
}
