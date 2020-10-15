import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    const[click,setClick] = useState(false);

    const handleClick = ()=> setClick(!click);

    const closeMobileMenu = ()=> setClick(false);

    return (
        <>
        <nav className="navbar">
            <div className="navbar-cotainer">
                <Link to="/" className="navbar-logo">
                    Matthias <i className="fab fa-typo3"></i>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fa fa-times': 'fas fa-bars'}/>
                </div>
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
                <li className='nav-item'>
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to="/Services" className="nav-links" onClick={closeMobileMenu}>
                            Services
                    </Link>
                </li>
                 <li className='nav-item'>
                    <Link to="/Products" className="nav-links" onClick={closeMobileMenu}>
                            Products
                    </Link>
                </li>
                <li className='nav-item'>
                        <Link to="/sign-up" className="nav-links-mobile" onClick={closeMobileMenu}>
                            Sign up
                    </Link>
                </li>
            </ul>
        </nav>
        </>
    )
}

export default NavBar
