import style from './mainMenu.module.css';
import { Link } from 'react-router-dom';

export default function MainMenu() {
    return (
        <div className={style.menu}>
            <ul>
                <Link to={"/"}>
                    <li>NEW</li>
                </Link>
                <Link to={"/"}>
                    <li>BRANDS</li>
                </Link>

                <Link to={"/"}>
                    <li>SKIN CARE</li>
                </Link>
                <Link to={"/"}>
                    <li>MAKE UP</li>
                </Link>
                <Link to={"/"}>
                    <li>HAIR</li>
                </Link>
                <Link to={"/"}>
                    <li>BODY</li>
                </Link>
                <Link to={"/"}>
                    <li>FRAGANCE</li>
                </Link>
                <Link to={"/"}>
                    <li>OFFERS</li>
                </Link>
            </ul>

        </div>
    )
}