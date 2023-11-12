
const ItemCountPresentacional = ({ restar, counter, sumar }) => {
    return (
        <div className="counter_container">
            <button onClick={restar}>-</button>
            <span>{counter}</span>
            <button onClick={sumar}>+</button>
        </div>
    )
}

export default ItemCountPresentacional