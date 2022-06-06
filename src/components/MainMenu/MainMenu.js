import style from './mainMenu.module.css';
import { Link } from 'react-router-dom';

export default function MainMenu() {
    return (
        <div className={style.menu}>
            <ul>
                <Link to={"/"}>
                    <li>BRANDS</li>
                </Link>
                <Link to={"/"}>
                    <li>WOMAN</li>
                </Link>

                <Link to={"/"}>
                    <li>MEN</li>
                </Link>
                <Link to={"/"}>
                    <li>HOME</li>
                </Link>
                <Link to={"/"}>
                    <li>BEAUTY</li>
                </Link>
                <Link to={"/"}>
                    <li>ELECTRONICS</li>
                </Link>
                <Link to={"/"}>
                    <li>BOOKS</li>
                </Link>
                <Link to={"/"}>
                    <li>MOVIES, TV & MUSIC</li>
                </Link>
            </ul>

        </div>
    )
}