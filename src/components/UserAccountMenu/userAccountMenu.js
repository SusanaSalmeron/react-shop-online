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
                    <Link to='data'>
                        <li>My Data</li>
                    </Link>
                    <Link to='address'>
                        <li>My Address List</li>
                    </Link>
                    <Link to='password'>
                        <li>Password</li>
                    </Link>
                </ul>

                <li className={style.title}>
                    <i className="fa-solid fa-file" />
                    My Orders
                </li>
                <ul className={style.submenu}>
                    <Link to='orders'>
                        <li>My Orders</li>
                    </Link>
                    <Link to='inprocess'>
                        <li>Orders in Process</li>
                    </Link>
                    <Link to='shipped'>
                        <li>Orders Shipped</li>
                    </Link>
                </ul>
                <Link to='wishlist'>
                    <li className={style.title}>
                        <i className="fa-solid fa-heart" />
                        My Wishlist
                    </li>
                </Link>

            </ul>
            <div className={style.button}>
                <button>LOG OUT</button>
            </div>

        </aside>
    )
}