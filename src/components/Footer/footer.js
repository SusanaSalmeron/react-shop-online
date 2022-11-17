import style from './footer.module.css';
import logo2 from "../../images/logo2.png";
import useMedia from '../../hooks/useMedia';
import { Link } from 'react-router-dom';
import cards from '../../images/cards.png'



export default function Footer() {
    const isMobile = useMedia('(min-width: 577px)')

    return (
        <div className={style.footer}>
            {isMobile ? <div className={style.container}>
                <figure className={style.logo}>
                    <img src={logo2} alt="logo2" />
                    <figcaption>©2022 Beauty Store</figcaption>
                </figure>
                <div className={style.links}>
                    <ul>
                        <li>
                            <Link to="/about">
                                About us
                            </Link>
                        </li>
                        <li>Contact us</li>
                        <li>
                            <Link to="/terms" >
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link to="/comingSoon">
                                Blog
                            </Link>
                        </li>
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
                        <button>subscribe!</button>
                    </form>
                    <figure>
                        <img src={cards} alt='visa and mastercard logo'></img>

                    </figure>
                </div>
            </div> : <div className={style.container}>
                <figure className={style.logo}>
                    <img src={logo2} alt="logo2" />
                    <figcaption>©2022 Beauty Store</figcaption>
                </figure>
                <div className={style.links}>
                    <ul>
                        <li>
                            <Link to="/about">
                                About us
                            </Link>
                        </li>
                        <li>Contact us</li>
                        <li>
                            <Link to="/terms" >
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link to="/comingSoon">
                                Blog
                            </Link>
                        </li>
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
                    <form>
                        <input placeholder='Subscribe to our bulletin'></input>
                        <button>subscribe</button>
                    </form>
                    <figure>
                        <img src={cards} alt='visa and mastercard logo'></img>
                    </figure>
                </div>
            </div>}
        </div >
    )

}