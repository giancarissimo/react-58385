
const CheckoutForm = ({ handleSubmit, errors, handleChange }) => {
    return (
        <div className="form_container">
            <h2>Who should we bill?</h2>
            <form onSubmit={handleSubmit}>
                <h2>Enter your name and last name:</h2>
                <div className="checkout_input_name_container">
                    <span className="checkout_input_error">{errors.name}</span>
                    <div className="checkout_input_name">
                        <input className="checkout_input" type="text" name="name" placeholder="" onChange={handleChange} autoComplete="off" />
                        <span className="checkout_input_placeholder">First Name</span>
                    </div>
                </div>
                <div className="checkout_input_surname_container">
                    <span className="checkout_input_error">{errors.surname}</span>
                    <div className="checkout_input_surname">
                        <input className="checkout_input" type="text" name="surname" placeholder="" onChange={handleChange} autoComplete="off" />
                        <span className="checkout_input_placeholder">Last Name</span>
                    </div>
                </div>
                <h2>What’s your contact information?</h2>
                <div className="checkout_input_email_container_total">
                    <div className="checkout_input_email_container">
                        <span className="checkout_input_error">{errors.email}</span>
                        <div className="checkout_input_email">
                            <input className="checkout_input" type="text" name="email" placeholder="" onChange={handleChange} autoComplete="off" />
                            <span className="checkout_input_placeholder">Email Address</span>
                        </div>
                    </div>
                    <div className="checkout_email_message_warn">
                        <p>We’ll email you a receipt and send order updates to your mobile phone via SMS or iMessage.</p>
                    </div>
                </div>
                <div className="checkout_input_phone_container_total">
                    <div className="checkout_input_phone_container">
                        <span className="checkout_input_error">{errors.phone}</span>
                        <div className="checkout_input_phone">
                            <input className="checkout_input" type="text" name="phone" placeholder="" onChange={handleChange} autoComplete="off" />
                            <span className="checkout_input_placeholder">Phone Number</span>
                        </div>
                    </div>
                    <div className="checkout_phone_message_warn">
                        <p>The phone number you enter can’t be changed after you place your order, so please make sure it’s correct.</p>
                    </div>
                </div>
                <button className="checkout_submit_button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CheckoutForm