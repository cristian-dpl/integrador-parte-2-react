import { Form } from "../components/Form"
import { InputGroup } from "../components/InputGroup"
import { Text } from "../components/Text"

import {useForm} from "../hooks/useForm"


export const FormLayout = ({
  title,
  inputProps,
  initialState,
  onSubmit,
  labelSubmit
}) => {
  const {values, headleInputChange} = useForm(initialState)


  return (
    <div className="form-layout__container">
        <Text renderAs="h2" content={title}/>
        <Form
          onSubmit={() => {
            onSubmit(values)
            .then(data => console.log(data))
            .catch(err => console.error(err))
          }}
          labelButton={labelSubmit}
        >
          {
            Object.entries(inputProps)
            .map(
              ([key, props]) =>
                <InputGroup
                  key={key}
                  id={key}
                  onChange={headleInputChange}
                  values={values}
                  {...props}
                />
            )
          }
        </Form>
    </div>
  )
}
