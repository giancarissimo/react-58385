import React from 'react';
import NavBar from './components/header/navbar'
import NavbarPromos from './components/messagePromo/NavbarPromos'
import ItemListContainer from './components/itemListContainer/ItemListContainer.jsx'


function App() {
	return (
		<>
			<NavBar />
			<main>
				<NavbarPromos />
				<div className='main_container'>
					<ItemListContainer greeting="Welcome to iStore." />
				</div>
			</main>
		</>
	)
}

export default App
