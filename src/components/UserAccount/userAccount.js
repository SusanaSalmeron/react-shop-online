import UserAccountMenu from "../UserAccountMenu/userAccountMenu";
import style from './userAccount.module.css'
import { Outlet, useLocation } from "react-router-dom";


//TODO -- resume page of all user data

export default function UserAccount() {
    const location = useLocation()

    return (

        < div className={style.container} >
            <div className={style.menu}>
                <UserAccountMenu route={location.pathname} />
            </div>
            <div>
                <p>hola</p>
            </div>
            <div className={style.content}>
                <Outlet />
            </div>
        </div>

    )
}