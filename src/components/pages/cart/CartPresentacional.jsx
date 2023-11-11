import CartEmpty from "../../common/cartObjetcs/CartEmpty"
import CartTitle from "../../common/cartObjetcs/CartTitle"
import CartWarnPayment from "../../common/cartObjetcs/CartWarnPayment"
import CartProduct from "../../common/cartObjetcs/CartProduct"
import CartInfoContainer from "../../common/cartObjetcs/cartInfoContainer/CartInfoContainer"
import AppleHelpSupport from "../../common/appleHelpSupport/AppleHelpSupport"
import ApplePromos from "../../common/promos/ApplePromos"

const CartPresentacional = ({ scrollUp, cart, handleClearCart, deleteProductById, getTotalProductPrice, total }) => {
    return (
        <section className="section_cart">
            {
                cart.length > 0 ? <>
                    <div className="cart_container">
                        <CartTitle />
                        <CartWarnPayment />
                        <div className="cart_prodcut_container">
                            {
                                cart.map((product) => {
                                    return <CartProduct key={product.id} product={product} deleteProductById={deleteProductById} getTotalProductPrice={getTotalProductPrice} total={total} />
                                })
                            }
                            <CartInfoContainer handleClearCart={handleClearCart} total={total} scrollUp={scrollUp} />
                        </div>
                    </div>
                </> : <CartEmpty />
            }
            <AppleHelpSupport />
            <ApplePromos />
        </section>
    )
}

export default CartPresentacional