import {Button} from "./Button"
export const Form = ({children, onSubmit, labelButton}) => {


  return (
    <form action="" onSubmit={
        e => {
            e.preventDefault();
            onSubmit()
        }

    }
        className="form__container"    
    >
        {children}
        <Button type="submit" label={labelButton} className={"form__button-submit"}/>
    </form>
  )
}
