import React from 'react'

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="shop_home">
            <h1>{greeting} <span>The best way to buy the<br /> products you love.</span>
            </h1>
        </div>
    )
}

export default ItemListContainer