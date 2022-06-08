import React from 'react';

function NavBar() {
    return(
        <header className='header'>
            <div className='header__logo'>
                <a className="header__logo-text"><span className="bold-logo">fan</span>base</a>
            </div>
            <nav className="nav">
                <ul className="nav__menu">
                    <ul className="nav__item"><a href="#" className="nav__link">authentic</a></ul>
                    <ul className="nav__item"><a href="#" className="nav__link">retro</a></ul>
                    <ul className="nav__item"><a href="#" className="nav__link">special</a></ul>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;