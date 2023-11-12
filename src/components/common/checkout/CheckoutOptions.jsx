import { Link } from "react-router-dom"

const CheckoutOptions = ({ scrollUp, buttonShowForm, showForm }) => {
    return (
        <div className="checkout_options">
            <h2>What step would you like to be next?</h2>
            <div className="checkout_options_buttons_container">
                <Link className="checkout_link_toCart" to='/cart' onClick={scrollUp}>
                    <div className="checkout_option_cart">
                        <svg height="44" viewBox="0 0 14 44" width="14" xmlns="http://www.w3.org/2000/svg">
                            <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z">
                            </path>
                        </svg>
                        <span>Modify my bag.</span>
                    </div>
                </Link>
                {
                    !showForm ? <div className="checkout_option_form" onClick={buttonShowForm}>
                        <img src="/assets/images/checkout/apple_card_icon.png" alt="card icon" />
                        <span>Continue to payment.</span>
                    </div> : <div className="checkout_option_form_v2">
                        <img src="/assets/images/checkout/apple_card_icon.png" alt="card icon" />
                        <span>Continue to payment.</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default CheckoutOptions