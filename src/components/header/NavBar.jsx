import React from 'react'
import Logo from './logo.jsx'
import SearchLogo from './headerIcons/SearchLogo.jsx'
import CartWidget from './headerIcons/CartWidget.jsx'
import HamburgerMenu from './headerIcons/HamburgerMenu.jsx'

const NavBar = () => {
    return (
        <header className="header_global">
            <Logo />
            <nav>
                <ul className="header_navbar">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Mac</a></li>
                    <li><a href="#">iPhone</a></li>
                    <li><a href="#">iPad</a></li>
                    <li><a href="#">Watch</a></li>
                    <li><a href="#">Airpods</a></li>
                    <li><a href="#">Accesories</a></li>
                </ul>
            </nav>
            <div className="header_icons">
                <SearchLogo />
                <CartWidget />
                <HamburgerMenu />
            </div>
        </header>
    )
}

export default NavBar