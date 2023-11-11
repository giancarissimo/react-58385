import { Link } from "react-router-dom"

const CartInfoButtons = ({ scrollUp, handleClearCart }) => {
    return (
        <div className="cart-info_buttons_container_total">
            <h3>What would you like to do?</h3>
            <div className="cart-info_buttons_container">
                <div className="cart-info_buttons_clear-cart_container">
                    <div className="cart-info_buttons_clear-cart">
                        <h3>Clear all the products from your bag.</h3>
                        <button onClick={handleClearCart}>Clear Cart</button>
                    </div>
                </div>
                <div className="cart-info_buttons_checkout_container">
                    <div className="cart-info_buttons_checkout">
                        <h3>Proceed to checkout.</h3>
                        <Link to="/checkout">
                            <button onClick={scrollUp}>Check Out</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartInfoButtons