import React from 'react'
import Logo from '../../common/headerIcons/Logo.jsx'
import SearchLogo from '../../common/headerIcons/SearchLogo.jsx'
import CartWidget from '../../common/headerIcons/CartWidget.jsx'
import HamburgerMenu from '../../common/headerIcons/HamburgerMenu.jsx'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <header className="header_global">
                <Logo />
                <nav>
                    <ul className="header_navbar">
                        <Link to='/'>
                            <li><span>Store</span></li>
                        </Link>
                        <Link to='/category/mac'>
                            <li><span>Mac</span></li>
                        </Link>
                        <Link to='/category/iphone'>
                            <li><span>iPhone</span></li>
                        </Link>
                        <Link to='/category/ipad'>
                            <li><span>iPad</span></li>
                        </Link>
                        <Link to='/category/watch'>
                            <li><span>Watch</span></li>
                        </Link>
                        <Link to='/category/airpods'>
                            <li><span>Airpods</span></li>
                        </Link>
                        <Link to='/category/accesories'>
                            <li><span>Accesories</span></li>
                        </Link>
                    </ul>
                </nav>
                <div className="header_icons">
                    <SearchLogo />
                    <CartWidget />
                    <HamburgerMenu />
                </div>
            </header>
        </>
    )
}

export default NavBar