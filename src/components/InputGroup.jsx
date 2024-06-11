import { useState } from "react"

export const InputGroup = ({
    id,
    inputLabel,
    inputType = "text",
    onChange = () => {},
    validation = () => "",
    values,
    ...props
}) => {

    const [error, setError] = useState("")

    const validateOnChenge = e =>{
        onChange(e)
        setError(validation(e.target.value))
    }

  return ( 
    <div className={`input-group__container ${inputType === "checkbox" ? "input-group__checkbox" : ""}`}>
        <label htmlFor={id}>{inputLabel}</label>
        {
            inputType === "textarea" ?
                <textarea name="" id=""
                    id={id} 
                    name={id} 
                    type={inputType} 
                    onChange={validateOnChenge}
                    value={values[id]}
                    className={`input-group__input${error ? "error" : ""}`}
                    {...props}

                ></textarea>
            :
                <input 
                    id={id} 
                    name={id} 
                    type={inputType} 
                    onChange={validateOnChenge}
                    value={inputType !== "file" ? values[id]: ""}
                    className={`input-group__input${error ? "error" : ""}`}
                    {...props}/>
        }
        <span className="input-group__text-error">{error}</span>
    </div> 
  )
}
