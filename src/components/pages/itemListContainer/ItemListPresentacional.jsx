import ProductCard from "../../common/productCard/ProductCard"
import NavbarPromos from "../../common/messagePromo/NavbarPromos"

const ItemListPresentacional = ({ items, greeting }) => {
    return (
        <>
            <NavbarPromos />
            <section className="section_itemList">
                <div className="itemList_container">
                    <div className="shop_home">
                        <h1>{greeting} <span>The best way to buy the<br /> products you love.</span></h1>
                    </div>
                </div>
                <div className="container_productos">
                    {
                        items.map((item) => {
                            return <ProductCard key={item.id} item={item} />
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default ItemListPresentacional