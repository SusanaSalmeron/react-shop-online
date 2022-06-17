import Navbar from "../Navbar/navbar";
import style from './header.module.css';
import useMedia from "../../hooks/useMedia";
import NavbarMobile from "../NavbarMobile/navbarMobile";
import LoginAndSigninButtons from "../LoginAndSigninButtons/loginAndSigninButtons";


export default function Header() {
    const isMobile = useMedia(('(max-width: 768px)'))
    return (
        <header className={style.header}>
            <LoginAndSigninButtons />
            {isMobile ? <NavbarMobile /> : <Navbar />}
        </header>
    )
}