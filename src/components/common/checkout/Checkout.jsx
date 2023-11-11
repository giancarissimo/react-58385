import CheckoutProduct from "./CheckoutProduct"
import CartInfo from "../cartObjetcs/cartInfoContainer/CartInfo"
import CheckoutOptions from "./CheckoutOptions"
import CheckoutForm from "./CheckoutForm"

const Checkout = ({ scrollUp, handleSubmit, errors, handleChange, cart, getTotalProductPrice, total, buttonShowForm, showForm }) => {
    return (
        <div className="checkout_container">
            <h1>Ready to place your order? <br></br>Let's make sure everything's right.</h1>
            <div className="checkout_product_container">
                {
                    cart.map((product) => {
                        return <CheckoutProduct key={product.id} product={product} getTotalProductPrice={getTotalProductPrice} />
                    })
                }
                <div className="checkout-info_container">
                    <div className="checkout-info">
                        <CartInfo total={total} />
                    </div>
                </div>
            </div>
            <CheckoutOptions scrollUp={scrollUp} buttonShowForm={buttonShowForm} showForm={showForm} />
            {
                showForm && <CheckoutForm handleSubmit={handleSubmit} errors={errors} handleChange={handleChange} />
            }
        </div>
    )
}

export default Checkout