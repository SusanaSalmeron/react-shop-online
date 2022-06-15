import MenuItems from "../MenuItems/menuItems";
import './dropdown.css'

export default function Dropdown({ submenus, dropdown, depthLevel }) {

    //TODO -  styles in module.css missing
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
            ))}
        </ul>
    );
};
