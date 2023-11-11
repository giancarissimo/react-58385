import { useContext, useEffect, useState } from "react"
import { CartContext } from "../../../context/CartContext"
import { getDoc, collection, doc } from "firebase/firestore"
import { dataBase } from '../../../firebaseConfig'
import { useNavigate, useParams } from "react-router-dom"
import ItemDetailPresentacional from "./ItemDetailPresentacional"
import Loader from '../../common/loader/Loader'

const ItemDetailContainer = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [productSelected, setProductSelected] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { cart, addToCart, getQuantityById } = useContext(CartContext)

    let totalQuantity = getQuantityById(id)

    useEffect(() => {
        setIsLoading(true)
        let itemCollection = collection(dataBase, "products")
        let refDoc = doc(itemCollection, id)
        getDoc(refDoc)
            .then((res) => {
                setProductSelected({ id: res.id, ...res.data() })
            })
            .finally(() => {
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [id])

    const onAdd = () => {
        const existingProduct = cart.find((product) => product.id === productSelected.id)
        if (existingProduct) {
            alert("This product is already in your bag.")
        } else {
            let item = {
                ...productSelected,
                quantity: 1,
            }
            addToCart(item)
            setTimeout(() => {
                navigate("/cart")
            }, 500)
        }
    }

    return (
        <>
        {
            isLoading ? <Loader /> : <ItemDetailPresentacional productSelected={productSelected} onAdd={onAdd} initial={totalQuantity} />
        }
        </>
    )
}

export default ItemDetailContainer