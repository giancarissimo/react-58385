import { createContext, useState } from "react"

export const CartContext = createContext()

const CartContextComponent = ({ children }) => {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || [])

    const addToCart = (product) => {
        let exist = isInCart(product.id)
        if (exist) {
            let newArr = cart.map((e) => {
                if (e.id === product.id) {
                    return { ...e, quantity: e.quantity + product.quantity }
                } else {
                    return e
                }
            })
            setCart(newArr)
            localStorage.setItem("cart", JSON.stringify(newArr))
        } else {
            setCart([...cart, product])
            localStorage.setItem("cart", JSON.stringify([...cart, product]))
        }
    }

    const clearCart = () => {
        setCart([])
        localStorage.removeItem("cart")
    }

    const deleteProductById = (id, product) => {
        let newArr = cart.filter((product) => product.id !== id)
        setCart(newArr)
        localStorage.setItem("cart", JSON.stringify(newArr))
        alert(`${product.name} was removed from your bag.`)
    }

    const isInCart = (id) => {
        return cart.some(e => e.id === id)
    }

    const getQuantityById = (id) => {
        let product = cart.find(e => e.id === id)
        return product?.quantity
    }

    const getTotalProductPrice = (product) => {
        let totalProductPrice = (product.price * product.quantity)

        return totalProductPrice
    }

    const getTotalPrice = () => {
        let total = cart.reduce((acc, e) => {
            return acc + (e.price * e.quantity)
        }, 0)

        return total
    }

    const getTotalQuantity = () => {
        let total = cart.reduce((acc, e) => {
            return acc + e.quantity
        }, 0)

        return total
    }

    const increaseQuantity = (id) => {
        const updatedCart = cart.map((product) => {
            if (id === product.id) {
                const newQuantity = (product.quantity + 1)
                const newTotalPrice = (newQuantity * product.price)
                return { ...product, quantity: newQuantity, totalPrice: parseFloat(newTotalPrice).toFixed(2) }
            }
            return product
        })
        setCart(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
    }

    const decreaseQuantity = (id) => {
        const updatedCart = cart.map((product) => {
            if (id === product.id) {
                if (product.quantity > 1) {
                    const newQuantity = (product.quantity - 1)
                    const newTotalPrice = (newQuantity * product.price)
                    return { ...product, quantity: newQuantity, totalPrice: parseFloat(newTotalPrice).toFixed(2) }
                }
            }
            return product
        })
        setCart(updatedCart)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
    }

    const scrollUp = () => {
        window.scrollTo(0, 0)
    }

    let data = { scrollUp, cart, isInCart, addToCart, clearCart, deleteProductById, getQuantityById, getTotalProductPrice, getTotalPrice, getTotalQuantity, increaseQuantity, decreaseQuantity }

    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextComponent