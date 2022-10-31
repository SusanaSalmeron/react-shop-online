import style from "./loginAndSigninButtons.module.css";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import NavigateButton from "../NavigateButton/navigateButton";
import Login from "../Login/login";
import Signup from '../Signup/signup';
import { useEffect, useState } from "react";
import LogoutButton from "../LogoutButton/logoutButton";
import AccountButton from "../AccountButton/accountButton";


export default function LoginAndSigninButtons() {
    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            setLoggedIn(true)
        }
    }, [])

    return (
        <>
            <div className={style.container} >
                <figure>
                    <Link to="/"><img src={logo} alt="logo" />
                    </Link>
                </figure>
                <div className={style.buttons}>
                    {!loggedIn ? <><Login setLoggedIn={setLoggedIn} /><Signup /></> : <><LogoutButton setLoggedIn={setLoggedIn} /><AccountButton /></>}
                    <NavigateButton
                        className={style.cart}
                        route={'account/1000/address'}
                        name={'cart'}
                        label={<i className="fa-solid fa-cart-shopping" />}
                    />
                </div>
            </div >
        </>

    )
}