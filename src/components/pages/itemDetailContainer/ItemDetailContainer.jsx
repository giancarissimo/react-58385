import { useEffect, useState } from "react"
import { products } from "../../../productsMock"
import { useParams } from "react-router-dom"
import ItemDetailPresentacional from "./ItemDetailPresentacional"

const ItemDetailContainer = () => {

    const [productSelected, setProductSelected] = useState({})

    const { id } = useParams()

    useEffect(() => {
        let producto = products.find((product) => product.id === +id)

        const getProduct = new Promise((resolve, reject) => {
            resolve(producto)
            reject("algo salió mal.")
        })

        getProduct.then((res) => setProductSelected(res)).catch((err) => console.log(err))
        window.scrollTo(0, 0)
    }, [id])

    console.log(productSelected)

    return (
        <ItemDetailPresentacional productSelected={productSelected} />
    )
}

export default ItemDetailContainer