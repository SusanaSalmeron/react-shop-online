import style from "./searchBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';


export default function SearchBar() {
    return (
        <div className={style.container}>
            <div className={style.logo}>
                LOGO</div>
            <form className={style.search}>
                <input type="text" className={style.input} />
                <button className={style.button} type="text">
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </form>
            <div className={style.buttons}>
                <button className={style.login}>Login</button>
                <button className={style.signin}>Sign in</button>
                <button className={style.cart}>
                    <FontAwesomeIcon icon={faCartShopping} />
                </button>
            </div>



        </div>
    )
}