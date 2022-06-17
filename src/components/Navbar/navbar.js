import { menuItems } from "../../menuItems";
import MenuItems from "../MenuItems/menuItems";
import style from './navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <ul className={style.menus}>
                {menuItems.map((menu, index) => {
                    const depthLevel = 0;
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                })}
            </ul>
            <form className={style.search}>
                <input type="text" className={style.input} />
                <button className={style.button} type="text">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
        </nav>
    );
};

export default Navbar;