
const CheckoutProduct = ({ product, getTotalProductPrice }) => {
    let totalProductPrice = getTotalProductPrice(product)

    return (
        <div className="producto_checkout">
            <img className="producto_checkout_img" src={`../src/assets/images/store/${product.image}`} alt={product.name}></img>
            <div className="producto_checkout_containerh3">
                <h3>{product.name}</h3>
            </div>
            <p>{product.quantity}</p>
            <h4>${parseFloat(totalProductPrice).toFixed(2)}</h4>
        </div>
    )
}

export default CheckoutProduct