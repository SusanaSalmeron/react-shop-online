import { bubble as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom';
import './navbarMobile.css';



export default function NavbarMobile(props) {
    return (
        <Menu width={100}>
            <NavLink to="/" className='menu-item'>
                new
            </NavLink>
            <NavLink to="/" className='menu-item'>
                brands
            </NavLink>
            <NavLink to="/" className='menu-item'>
                skin care
            </NavLink>
            <NavLink to="/" className='menu-item'>
                make up
            </NavLink>
            <NavLink to="/" className='menu-item'>
                hair
            </NavLink>
            <NavLink to="/" className='menu-item'>
                body
            </NavLink>
            <NavLink to="/" className='menu-item'>
                fragance
            </NavLink>
        </Menu>
    )
}