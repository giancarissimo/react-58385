import { useState, useContext } from "react"
import ItemCountPresentacional from "./ItemCountPresentacional"
import { CartContext } from "../../../context/CartContext"

const ItemCountContainer = ({ product }) => {
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
        <ItemCountPresentacional restar={restar} counter={counter} sumar={sumar} />
    )
}

export default ItemCountContainer