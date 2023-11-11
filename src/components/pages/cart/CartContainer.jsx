import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import CartPresentacional from "./CartPresentacional"

const CartContainer = () => {
    const { scrollUp, cart, clearCart, deleteProductById, getTotalProductPrice, getTotalPrice } = useContext(CartContext)

    let total = getTotalPrice()

    const handleClearCart = () => {
        clearCart()
        alert(`Your Bag was cleared.`)
    }

    return (
        <>
            <CartPresentacional scrollUp={scrollUp} cart={cart} deleteProductById={deleteProductById} handleClearCart={handleClearCart} getTotalProductPrice={getTotalProductPrice} total={total} />
        </>
    )
}

export default CartContainer