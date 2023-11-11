
const CheckoutEnded = ({ orderId }) => {
    return (
        <div className="checkout_ended">
            <h1>You're all set.</h1>
            <p>Your order id is: {orderId}</p>
        </div>
    )
}

export default CheckoutEnded