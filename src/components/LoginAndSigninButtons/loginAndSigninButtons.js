import style from "./loginAndSigninButtons.module.css";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';


export default function LoginAndSigninButtons() {
    return (
        <>
            <div className={style.container} >
                <figure>
                    <Link to="/"><img src={logo} alt="logo" />
                    </Link>
                </figure>
                <div className={style.buttons}>
                    <button className={style.login}>Login</button>
                    <button className={style.signin}>Sign in</button>
                    <button className={style.cart}>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div >
        </>

    )
}