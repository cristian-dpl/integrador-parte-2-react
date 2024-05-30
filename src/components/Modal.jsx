import { useEffect, useRef } from "react"

export const Modal = ({children, show, onClose}) => {

  const modalRef = useRef()

  useEffect(() => {
      if (show) {
        modalRef.current.focus()
        
      }
  }, [show])
  

  const handleKeyPress = e =>{
    if (e.key === "Escape") {
      onClose()
    }
  }

  return (
    show ? (
    <div className="modal__overlay" onClick={onClose}>
        <div 
        ref={modalRef}
        className="modal__container"
        tabIndex="0" 
        onClick={e => e.stopPropagation()}
        onKeyDown={handleKeyPress}>
            {children}
        </div>
    </div>

    ) : undefined
  )
}
