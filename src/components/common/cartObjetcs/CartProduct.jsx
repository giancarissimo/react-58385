import CounterContainer from "../CounterContainer/CounterContainer"

const CartProduct = ({ product, deleteProductById, getTotalProductPrice }) => {
    let totalProductPrice = getTotalProductPrice(product)

    return (
        <div className="producto_carrito">
            <img className="producto_carrito_img" src={`../../src/assets/images/store/${product.image}`} alt={product.name}></img>
            <div className="producto_carrito_containerh3">
                <h3>{product.name}</h3>
            </div>
            <div className="producto_carrito_container_InfoProd">
                {/* <p>{product.quantity}</p> */}
                <CounterContainer product={product} />
                <h4>${parseFloat(totalProductPrice).toFixed(2)}</h4>
            </div>
            <button onClick={() => deleteProductById(product.id, product)}>Remove</button>
        </div>
    )
}

export default CartProduct