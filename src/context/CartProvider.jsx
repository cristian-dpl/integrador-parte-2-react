import { useState } from "react"
import { CartContext } from "./CartContext"

export const CartProvider = ({children}) => {
  const [playCarList, setPlayCarList] = useState([])

  const addPlay = data => {
    const playFinded = playCarList.find(play => play.id === data.id)
    if (playFinded) {
      setPlayCarList(
        playCarList.map(
          play => play.id === data.id ? data : play
        )
      )
    }else{
      setPlayCarList([...playCarList, data])
    }
  }

  const removePlay = id => {
    const playFinded = playCarList.find(play => play.id === id)
    if (playFinded?.quantity > 1) {
      setPlayCarList(
        playCarList.map(
          play => play.id === id ? {
            ...play,
            quantity: play.quantity -1
          } : play
        )

      )
      
    }else{
      setPlayCarList(playCarList.filter(play => play.id !== id ))
    }
  }

  return (
    <CartContext.Provider value={{
      playCarList,
      addPlay,
      removePlay
    }}>
      {children}
    </CartContext.Provider>
  )
}
