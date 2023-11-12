import { Link } from "react-router-dom"

const ApplePromos = () => {
    return (
        <div className="cart-new-arrivals_container_total">
            <div className="cart-new-arrivals_container">
                <img src="/assets/images/cart/apple-new-arrivals-desktop.jpg" alt="Apple New Arrivals"></img>
                <div className="cart-new-arrivals_text">
                    <h2>New Arrivals</h2>
                    <p>Check out the latest products.</p>
                    <Link to='/'>
                        <p>Store</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ApplePromos