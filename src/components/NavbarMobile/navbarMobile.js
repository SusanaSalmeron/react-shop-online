import Menu from 'react-burger-menu/lib/menus/slide';
import { NavLink } from 'react-router-dom';
import './navbarMobile.css';
import SearcBar from '../SearchBar/searchBar';

export default function NavbarMobile({ isOpen, closeMenu }) {
    return (
        <div className='navbarMobile'>
            <Menu
                width={300}
                isOpen={isOpen}>
                <NavLink to="/" className='menu-item' onClick={() => closeMenu()}>
                    new
                </NavLink>
                <NavLink to="/" className='menu-item' onClick={() => closeMenu()}>
                    brands
                </NavLink>
                <NavLink to="/bronzer" className='menu-item' onClick={() => closeMenu()}>
                    face - bronzer
                </NavLink>
                <NavLink to="/blush" className='menu-item' onClick={() => closeMenu()}>
                    face - blush
                </NavLink>
                <NavLink to="/foundation" className='menu-item' onClick={() => closeMenu()}>
                    face - foundation
                </NavLink>
                <NavLink to="/eyeshadow" className='menu-item' onClick={() => closeMenu()}>
                    eyes - eyeshadow
                </NavLink>
                <NavLink to="/mascara" className='menu-item' onClick={() => closeMenu()}>
                    eyes - mascara
                </NavLink>
                <NavLink to="/eyeliner" className='menu-item' onClick={() => closeMenu()}>
                    eyes - eyeliner
                </NavLink>
                <NavLink to="/eyebrow" className='menu-item' onClick={() => closeMenu()}>
                    eyes - eyebrow
                </NavLink>
                <NavLink to="/lipstick" className='menu-item' onClick={() => closeMenu()}>
                    lips - lipstick
                </NavLink>
                <NavLink to="/lip liner" className='menu-item' onClick={() => closeMenu()}>
                    lips - lip liner
                </NavLink>
            </Menu>
            <div className='search'>
                <SearcBar />
            </div>


        </div >

    )
}