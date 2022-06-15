import { Link } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import SearchBar from "../SearchBar/SearchBar";
import logo from '../../images/logo.png';
import style from './header.module.css'


export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.area}>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <Navbar />
                <SearchBar />
            </div>
        </header>
    )
}