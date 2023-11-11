
const CartInfo = ({ total }) => {
    return (
        <>
            <div className="cart-info_subtotal_container">
                <div className="cart-info_subtotal_title">
                    <span>Subtotal</span>
                </div>
                <div className="cart-info_subtotal_price">
                    <span>${parseFloat(total).toFixed(2)}</span>
                </div>
            </div>
            <div className="cart-info_shipping_container">
                <div className="cart-info_shipping_title">
                    <span>Shipping</span>
                </div>
                <div className="cart-info_shipping_price">
                    <span>FREE</span>
                </div>
            </div>
            <div className="cart-info_total_container">
                <div className="cart-info_total_title">
                    <h3>Total</h3>
                </div>
                <div className="cart-info_total_price">
                    <span>${parseFloat(total).toFixed(2)}</span>
                </div>
            </div>
        </>
    )
}

export default CartInfo