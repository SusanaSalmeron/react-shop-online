import style from "./searchBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../../images/logo.png';
import useMedia from '../../hooks/useMedia'
import { Link } from "react-router-dom";


export default function SearchBar() {
    const isDesktop = useMedia('(min-width: 577px)')

    return (
        <>
            {isDesktop ? <div className={style.container} >
                <div className={style.logo}>
                    <Link to={"/home"}>
                        <img src={logo} alt="Logo" />
                    </Link>

                </div>
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
            </div > :
                <div className={style.container}>
                    <div className={style.logoContainer}>
                        <div className={style.logo}>
                            <Link to={"/home"}>
                                <img src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <div className={style.buttons}>
                            <button className={style.login}>Login</button>
                            <button className={style.signin}>Sign in</button>
                            <button className={style.cart}>
                                <FontAwesomeIcon icon={faCartShopping} />
                            </button>
                        </div>
                    </div>
                    <div className={style.searchContainer}>
                        <form className={style.search}>
                            <input type="text" className={style.input} />
                            <button className={style.button} type="text">
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </form>
                    </div>

                </div>}
        </>

    )
}