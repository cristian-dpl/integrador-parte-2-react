import { createElement } from "react"

export const Text = ({renderAs, content, componentsProps}) => {
  return (
    createElement(renderAs, componentsProps, content)
  )
}
