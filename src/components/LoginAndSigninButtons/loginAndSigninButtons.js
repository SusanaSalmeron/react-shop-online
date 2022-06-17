import style from "./loginAndSigninButtons.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import useMedia from '../../hooks/useMedia';
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';





export default function LoginAndSigninButtons() {
    /* const isMobile = useMedia('(min-width: 768px)') */
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
                        <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                </div>
            </div >
        </>

    )
}