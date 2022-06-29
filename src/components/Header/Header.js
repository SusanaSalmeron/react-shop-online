import Navbar from "../Navbar/navbar";
import style from './header.module.css';
import useMedia from "../../hooks/useMedia";
import NavbarMobile from "../NavbarMobile/navbarMobile";
import LoginAndSignupButtons from "../LoginAndSignupButtons/loginAndSignupButtons";
import { useState } from "react";


export default function Header() {
    const [openMenu, setOpenMenu] = useState(false)
    const isMobile = useMedia(('(max-width: 993px)'))

    const closeMenu = () => {
        setOpenMenu(false)
    }

    return (
        <header className={style.header}>
            <LoginAndSignupButtons />
            {isMobile ?
                <NavbarMobile
                    isOpen={openMenu}
                    onClick={closeMenu} />
                : <Navbar />}
        </header>
    )
}