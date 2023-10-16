import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../../productsMock'
import ItemListPresentacional from './ItemListPresentacional'


const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const { categoryName } = useParams()

    useEffect(() => {
        const productsFiltered = products.filter(product => product.categoria === categoryName)
        const tarea = new Promise((resolve, reject) => {
            resolve(categoryName ? productsFiltered : products)
            reject('algo salió mal')
        })

        tarea
            .then((resolve) => setItems(resolve))
            .catch((reject) => console.log(reject))

        window.scrollTo(0, 0)
    }, [categoryName])

    return (<ItemListPresentacional items={items} greeting={"Welcome to iStore."} />)
}

export default ItemListContainer