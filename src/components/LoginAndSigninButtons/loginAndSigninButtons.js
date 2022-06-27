import style from "./loginAndSigninButtons.module.css";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import NavigateButton from "../NavigateButton/navigateButton";
import Login from "../Login/login";
import Signup from '../Signup/signup';


export default function LoginAndSigninButtons() {
    return (
        <>
            <div className={style.container} >
                <figure>
                    <Link to="/"><img src={logo} alt="logo" />
                    </Link>
                </figure>
                <div className={style.buttons}>
                    <Login />
                    <Signup />
                    <NavigateButton
                        classStyle={style.cart}
                        route={'/login'}
                        name={'cart'}
                        label={<i className="fa-solid fa-cart-shopping" />}
                    />
                </div>
            </div >
        </>

    )
}