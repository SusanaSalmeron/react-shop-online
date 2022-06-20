import style from "./loginAndSigninButtons.module.css";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import NavigateButton from "../NavigateButton/navigateButton";


export default function LoginAndSigninButtons() {
    return (
        <>
            <div className={style.container} >
                <figure>
                    <Link to="/"><img src={logo} alt="logo" />
                    </Link>
                </figure>
                <div className={style.buttons}>
                    <NavigateButton
                        classStyle={style.login}
                        route={'/login'}
                        name={'login'}
                        label={'login'} />
                    <NavigateButton
                        classStyle={style.signin}
                        route={'/login'}
                        name={'signin'}
                        label={'sign in'}
                    />
                    <NavigateButton
                        classStyle={style.cart}
                        route={'/login'}
                        name={'cart'}
                        label={<i class="fa-solid fa-cart-shopping" />}
                    />
                </div>
            </div >
        </>
    )
}