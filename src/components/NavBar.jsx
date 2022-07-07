import React from 'react';
import {Link} from 'react-router-dom';
import CartWidget from './CartWidget';
import '../styles/navbar.scss';

function NavBar() {
    return(
        <header className='header'>
            <div className='header__logo'>
                <Link to='/' className="header__logo-text">únicos</Link>
            </div>
            <nav className="nav">
                <ul className="nav__menu">
                    <li className='nav__item'>
                        <Link className="nav__link" to='/category/authentic'>authentic</Link>
                    </li>
                    <li className='nav__item'>
                        <Link className="nav__link" to='/category/retro'>retro</Link>
                    </li>
                    <li className='nav__item'>
                        <Link className="nav__link" to='/category/special'>special</Link>
                    </li>
                </ul>
            </nav>
            <div className="header__cartwidget">
                <Link to='/cart' className='nav_cartwidget'><CartWidget /></Link>
            </div>
        </header>
    )
}

export default NavBar;