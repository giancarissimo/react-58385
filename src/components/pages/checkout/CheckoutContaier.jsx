import { useContext, useState, } from "react"
import CheckoutPresentacional from "./CheckoutPresentacional"
import { CartContext } from "../../../context/CartContext"
import { serverTimestamp } from "firebase/firestore"
import { dataBase } from "../../../firebaseConfig"
import { collection, addDoc, doc, updateDoc } from "firebase/firestore"

const CheckoutContaier = () => {
    const { scrollUp, cart, getTotalPrice, getTotalProductPrice, clearCart } = useContext(CartContext)
    let total = getTotalPrice()

    const [userInfo, setUserInfo] = useState({
        name: "",
        surname: "",
        phone: "",
        email: ""
    })

    const [errors, setErrors] = useState({
        name: null,
        surname: null,
        phone: null,
        email: null
    })

    const [orderId, setOrderId] = useState(null)

    const [showForm, setShowForm] = useState(false)

    const buttonShowForm = () => {
        setShowForm(true)
    }

    const handleChange = (e) => {
        setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
    }

    function validationName() {
        if (userInfo.name.length === 0) {
            setErrors({
                ...setErrors, name: "Este campo debe ser obligatorio"
            })
            return
        } else if (/^[0-9]+$/.test(userInfo.name)) {
            setErrors({
                ...setErrors, name: "No corresponde a un nombre válido"
            })
            return
        } else if (userInfo.name.length < 2) {
            setErrors({
                ...setErrors, name: "El nombre debe tener al menos 2 caracteres."
            })
            return
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const requiredFields = ['name', 'surname', 'phone', 'email']
        const emptyFields = requiredFields.filter(field => !userInfo[field])
        const errorMessages = {}

        requiredFields.forEach(field => {
            if (!userInfo[field]) {
                errorMessages[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} is required.`
            } else if (field === 'name' && /^[0-9]+$/.test(userInfo.name)) {
                errorMessages[field] = "Not a valid first name."
            } else if (field === 'name' && userInfo.name.length < 2) {
                errorMessages[field] = "First name must have at least 2 characters."
            } else if (field === 'surname' && /^[0-9]+$/.test(userInfo.surname)) {
                errorMessages[field] = "Not a valid last name."
            } else if (field === 'surname' && userInfo.surname.length < 2) {
                errorMessages[field] = "Last name must have at least 2 characters."
            } else if (field === 'email' && !userInfo.email.includes('@')) {
                errorMessages[field] = "Not a valid email address."
            } else if (field === 'phone' && !/^[0-9]+$/.test(userInfo.phone)) {
                errorMessages[field] = "Not a valid phone number."
            } else if (field === 'phone' && userInfo.phone.length < 8) {
                errorMessages[field] = "Phone number must have at least 8 digits."
            } else {
                errorMessages[field] = null
            }
        })

        setErrors(errorMessages)

        const hasEmptyFields = requiredFields.some((field) => !userInfo[field])

        if (hasEmptyFields || Object.values(errorMessages).some((error) => error !== null)) {
            return
        }

        let order = {
            buyer: userInfo,
            items: cart,
            total,
            date: serverTimestamp()
        }
        console.log(order)

        const ordersCollection = collection(dataBase, "orders")
        addDoc(ordersCollection, order).then((res) => { setOrderId(res.id) })

        cart.forEach((e) => {
            updateDoc(doc(dataBase, "products", e.id), { stock: (e.stock - e.quantity) })
        })
        clearCart()
    }

    return (
        <>
            <CheckoutPresentacional scrollUp={scrollUp} handleChange={handleChange} errors={errors} handleSubmit={handleSubmit} cart={cart} getTotalProductPrice={getTotalProductPrice} total={total} buttonShowForm={buttonShowForm} showForm={showForm} orderId={orderId} />
        </>
    )
}

export default CheckoutContaier