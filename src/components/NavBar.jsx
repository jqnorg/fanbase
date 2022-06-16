import React from 'react';
import CartWidget from './CartWidget';
import '../styles/navbar.scss';

function NavBar() {
    return(
        <header className='header'>
            <div className='header__logo'>
                <a className="header__logo-text">únicos</a>
            </div>
            <nav className="nav">
                <ul className="nav__menu">
                    <ul className="nav__item"><a href="#" className="nav__link">authentic</a></ul>
                    <ul className="nav__item"><a href="#" className="nav__link">retro</a></ul>
                    <ul className="nav__item"><a href="#" className="nav__link">special</a></ul>
                </ul>
            </nav>
            <div className="header__cartwidget">
                <CartWidget />
            </div>
        </header>
    )
}

export default NavBar;