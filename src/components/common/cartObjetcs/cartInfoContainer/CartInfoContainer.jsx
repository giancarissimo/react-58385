import CartInfo from "./CartInfo"
import CartInfoButtons from "./CartInfoButtons"

const CartInfoContainer = ({ scrollUp, handleClearCart, total }) => {
    return (
        <div className="cart-info_contaier">
            <div className="cart-info">
                <CartInfo total={total} />
                <CartInfoButtons handleClearCart={handleClearCart} scrollUp={scrollUp} />
            </div>
        </div>
    )
}

export default CartInfoContainer