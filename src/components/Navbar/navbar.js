import { menuItems } from "../../menuItems";
import MenuItems from "../MenuItems/menuItems";
import style from './navbar.module.css';
import SearchBar from "../SearchBar/searchBar";


const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <ul className={style.menus}>
                {menuItems.map((menu, index) => {
                    const depthLevel = 0;
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                })}
            </ul>
            <SearchBar />
        </nav>
    );
};

export default Navbar;