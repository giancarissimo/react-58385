import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout.jsx'
import ItemListContainer from './components/pages/itemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './components/pages/itemDetailContainer/ItemDetailContainer.jsx'
import CartContainer from './components/pages/cart/CartContainer.jsx'
import NotFound from './components/pages/notFound/notFound.jsx'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path='/' element={<ItemListContainer />} />
					<Route path='/category/:categoryName' element={<ItemListContainer />} />
					<Route path='/item/:id' element={<ItemDetailContainer />} />
					<Route path='/cart' element={<CartContainer />} />
					<Route path='*' element={<NotFound/>} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default App
