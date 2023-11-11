import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDocs, collection, query, where, addDoc } from "firebase/firestore"
import { dataBase } from '../../../firebaseConfig'
import ItemListPresentacional from './ItemListPresentacional'
import Loader from '../../common/loader/Loader'

const ItemListContainer = () => {
    const [items, setItems] = useState([])
    const { categoryName } = useParams()

    // const rellenarDB = () => {
    //     const productsConllection = collection(dataBase, "products")
    //     products.forEach((e)=>{
    //         addDoc(productsConllection, e)
    //     })
    // }

    useEffect(() => {
        let productsConllection = collection(dataBase, "products")
        let request = undefined
        if (!categoryName) {
            request = productsConllection
        } else {
            request = query(productsConllection, where("category", "==", categoryName))
        }
        getDocs(request).then(res => {
            let newArray = res.docs.map(product => {
                return { ...product.data(), id: product.id }
            })
            setItems(newArray)
        })
        window.scrollTo(0, 0)
    }, [categoryName])

    return (
        <>
            {
                items.length === 0 ? <Loader /> : <ItemListPresentacional items={items} greeting={"Welcome to iStore."} />
            }
        </>
    )
}

export default ItemListContainer