import { Icon } from "./Icon"

export const Button = ({label, action = () =>{}, className, type = "button", disable, icon = ""}) => {
  return (
    <button
        type={type}
        className={className}
        onClick={action}
        disabled={disable}
    >
        {icon ? <Icon icon={icon}/> : undefined}
        {label}
    </button>
  )
}
