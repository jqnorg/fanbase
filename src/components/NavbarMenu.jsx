import {React} from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar-menu.scss';


function NavbarMenu() {
    return (
        <div className="navigation">
            <div className="navigation__wrapper">
                <Link to='/category/authentic' className="navigation__item" style={{textDecoration: 'none'}} id='authentic'><p className='item__text'>Authentic</p></Link>
                <Link to='/category/retro' className="navigation__item" style={{textDecoration: 'none'}} id='retro'><p className='item__text'>Retro</p></Link>
                <Link to='/category/special' className="navigation__item" style={{textDecoration: 'none'}} id='special'><p className='item__text'>Special</p></Link>
            </div>
        </div>
    )
}

export default NavbarMenu;