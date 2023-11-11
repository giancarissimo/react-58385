import Checkout from "../../common/checkout/Checkout"
import AppleHelpSupport from "../../common/appleHelpSupport/AppleHelpSupport"
import ApplePromos from "../../common/promos/ApplePromos"
import CheckoutEnded from "../../common/checkout/CheckoutEnded"

const CheckoutPresentacional = ({ scrollUp, handleSubmit, errors, handleChange, cart, getTotalProductPrice, total, buttonShowForm, showForm, orderId }) => {
    return (
        <section className="section_checkout">
            {
                orderId ? <CheckoutEnded orderId={orderId} /> : <Checkout scrollUp={scrollUp} handleSubmit={handleSubmit} errors={errors} handleChange={handleChange} cart={cart} getTotalProductPrice={getTotalProductPrice} total={total} buttonShowForm={buttonShowForm} showForm={showForm} />
            }
            <AppleHelpSupport />
            <ApplePromos />
        </section>
    )
}

export default CheckoutPresentacional