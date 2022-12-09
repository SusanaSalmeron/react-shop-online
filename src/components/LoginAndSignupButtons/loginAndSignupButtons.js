import style from "./loginAndSigninButtons.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from '../../images/logo.png';
import NavigateButton from "../NavigateButton/navigateButton";
import Login from "../Login/login";
import Signup from '../Signup/signup';
import { useEffect } from "react";
import LogoutButton from "../LogoutButton/logoutButton";
import AccountButton from "../AccountButton/accountButton";
import { checkTokenExpiration } from "../../services/tokenService";
import { login, logout } from '../../features/loginState'
import { useDispatch, useSelector } from "react-redux";



export default function LoginAndSigninButtons() {
    const loginState = useSelector((state) => state.loginState.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const isTokenExpired = checkTokenExpiration()
            if (!isTokenExpired) {
                dispatch(login())
            } else {
                localStorage.removeItem('token')
                localStorage.removeItem('id')
                dispatch(logout())
                navigate('/error')
            }
        } else {
            dispatch(logout())
        }
    }, [dispatch, navigate, loginState])

    return (
        <>
            <div className={style.container} >
                <figure>
                    <Link to="/"><img src={logo} alt="logo" />
                    </Link>
                </figure>
                <div className={style.buttons}>
                    {!loginState ? <><Login
                    /><Signup /></> : <><LogoutButton /><AccountButton /></>}
                    <NavigateButton
                        className={style.cart}
                        route={'/products/1065/reviews'}
                        name={'cart'}
                        label={<i className="fa-solid fa-cart-shopping" />}
                    />
                </div>
            </div >
        </>

    )
}