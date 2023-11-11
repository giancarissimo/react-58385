import { useState, useContext } from "react"
import CounterPresentacional from "./CounterPresentacional"
import { CartContext } from "../../../context/CartContext"

const CounterContainer = ({ product }) => {
    const [counter, setCounter] = useState(product.quantity)
    const { increaseQuantity, decreaseQuantity } = useContext(CartContext)

    const sumar = () => {
        if (counter < product.stock) {
            setCounter(counter + 1)
            increaseQuantity(product.id)
        } else {
            alert(`Maximun quantity`)
        }
    }
    const restar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
            decreaseQuantity(product.id)
        }
    }

    return (
        <CounterPresentacional restar={restar} counter={counter} sumar={sumar} />
    )
}

export default CounterContainer