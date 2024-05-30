import { useContext, useEffect, useState } from "react"
import { Button } from "./Button"
import { Text } from "./Text"
import { CartContext } from "../context/CartContext"
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"


export const Counter = ({id, movieData, initialValue = 0}) => {
    const [count, setCount] = useState(initialValue)
    const {addPlay, removePlay, playCarList } = useContext(CartContext)

    useEffect(() => {
        const play = playCarList.find(play => play.id === id)
            setCount(play?.quantity || 0)
    }, [playCarList])
    

    const decrement = () =>{
        if(count > 0) setCount(count - 1)
            removePlay(id)
    }

    const increment = () => {
        setCount(count + 1)
        addPlay({
            id,
            movieData,
            quantity: count + 1
        })
    }


  return (
    <>
        <div className="counter__container">
            <Button
                icon={faMinus}
                className="counter__btn"
                action={decrement}
                disable={count === 0}
            />
            <Text
                renderAs="p"
                content={count}
                componentsProps={{className: "counter__count-text"}}
            />
            <Button
                icon={faPlus}
                className="counter__btn"
                action={increment}
                />
        </div>
    </>
  )
}
