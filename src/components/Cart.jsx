import { faCartShopping, faClose } from "@fortawesome/free-solid-svg-icons"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Modal } from "./Modal"

import { Button } from "./Button"
import { CartItem } from "./CartItem"

export const Cart = () => {
      const {playCarList} = useContext(CartContext)
      const [open, setOpen] = useState(false)
  return (
    <>
      <div className="cart__container">
        <Button
            icon={faCartShopping}
              className="cart__navbar-button"
              action={() =>  setOpen(!open)}
              disable={!playCarList.length}

    />
        {
          playCarList.length ?
            <div className="cart__badge">
              <span>
                {playCarList.reduce(
                  (acc, play) => acc + play.quantity, 0
                )}
              </span>
            </div>
            : undefined
        }
      </div>
      <Modal show={open} onClose={() => setOpen(false)}>
      <div>
        <div className="modal__header">
          <Button
           icon={faClose}
           className="modal__close"
           action={() => setOpen(!open)}
          />
  
          </div>
          {
            playCarList.map(
              data =>
                <CartItem
                    key={data.id}
                    {...data}
                    />
            )
          }
          
      </div>
      </Modal>
    </>
  )
}
