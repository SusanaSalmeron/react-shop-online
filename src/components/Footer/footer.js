import style from './footer.module.css';
import logo2 from "../../images/logo2.png";
import useMedia from '../../hooks/useMedia';
import { Link } from 'react-router-dom';


export default function Footer() {
    const isDesktop = useMedia('(min-width: 577px)')

    return (
        <div className={style.footer}>
            {isDesktop ? <div className={style.container}>
                <figure className={style.logo}>
                    <img src={logo2} alt="logo2" />
                    <figcaption>©2022 Beauty Store</figcaption>
                </figure>
                <div className={style.links}>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>General Conditions</li>
                        <li>Blog</li>
                        <li>
                            <Link to="/legal">
                                Legal Notice
                            </Link>
                        </li>
                        <li>
                            <Link to="/privacy">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={style.subscribe}>
                    <h3>Receive essential news and updates, before everyone else</h3>
                    <form>
                        <input placeholder='Subscribe'></input>
                        <button>subscribe</button>
                    </form>
                </div>
            </div> : <div className={style.container}>
                <figure className={style.logo}>
                    <img src={logo2} alt="logo2" />
                    <figcaption>©2022 Beauty Store</figcaption>
                </figure>
                <div className={style.links}>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>General Conditions</li>
                        <li>Blog</li>
                        <li>Legal Notice</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className={style.subscribe}>
                    <form>
                        <input placeholder='Subscribe to our bulletin'></input>
                        <button>subscribe</button>
                    </form>
                </div>
            </div>}
        </div >
    )

}