import { Link } from "react-router-dom"

const ProductCard = ({ item }) => {
    return (
        <div className="cardProducto">
            <h3>{item.name}</h3>
            <img className="cardProducto_img" src={`../src/assets/images/store/${item.image}`} alt={item.name}></img>
            <div className="cardProducto_info">
                <div className="cardProducto_info_text">
                    <h4>From ${parseFloat(item.price).toFixed(2)}</h4>
                    <p>{item.stock} units left</p>
                </div>
                {
                    item.stock !== 0 ? <Link to={`/item/${item.id}`}>
                        <button className="cardProducto_info_button" id={item.id}>Buy</button>
                    </Link> : <button className="cardProducto_info_button_outOfStock" id={item.id}>Buy</button>
                }
            </div>
        </div>
    )
}

export default ProductCard