import style from './userAccountMenu.module.css';
import { Link } from 'react-router-dom';


export default function UserAccountMenu() {
    return (
        <aside className={style.container}>
            <ul>
                <li className={style.title}>
                    <i className="fa-solid fa-user" />
                    My Account
                </li>
                <ul className={style.submenu}>
                    <li>
                        <Link to='data'>
                            My Data
                        </Link>
                    </li>
                    <li>
                        <Link to='address'>
                            My Address List
                        </Link>
                    </li>
                    <li>
                        <Link to='password'>
                            Password
                        </Link>
                    </li>
                </ul>

                <li className={style.title}>
                    <i className="fa-solid fa-file" />
                    My Orders
                </li>
                <ul className={style.submenu}>
                    <li>
                        <Link to='orders'>
                            My Orders
                        </Link>
                    </li>
                    <li>
                        <Link to='inprocess'>
                            Orders in Process
                        </Link>
                    </li>
                    <li>
                        <Link to='shipped'>
                            Orders Shipped
                        </Link>
                    </li>
                </ul>
                <li className={style.title}>
                    <Link to='wishlist'>
                        <i className="fa-solid fa-heart" />
                        My Wishlist
                    </Link>
                </li>
                <li className={style.title}>
                    <Link to='reviews'>
                        <i className="fa-solid fa-eye" />
                        My Reviews
                    </Link>
                </li>
            </ul>
        </aside>
    )
}