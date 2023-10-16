import { Link } from "react-router-dom"

const ProductCard = ({ item }) => {
    return (
        <div className="cardProducto">
            <h3>{item.nombre}</h3>
            <img className="cardProducto_img" src={`../../src/assets/images/store/${item.nombreImagen}`} alt={item.nombre}></img>
            <div className="cardProducto_info">
                <div className="cardProducto_info_text">
                    <h4>From ${parseFloat(item.precio).toFixed(2)}</h4>
                    <p>{item.stock} units left</p>
                </div>
                <Link to={`/item/${item.id}`}>
                    <button id={item.id}>Buy</button>
                </Link>
            </div>
        </div>
    )
}

export default ProductCard