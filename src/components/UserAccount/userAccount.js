import UserAccountMenu from "../UserAccountMenu/userAccountMenu";
import style from './userAccount.module.css'
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";


//TODO -- resume page of all user data

export default function UserAccount() {
    const [outlet, setOutlet] = useState(false)

    useEffect(() => {
        setOutlet(true)
    }, [])

    return (
        < div className={style.container} >
            <div className={style.menu}>
                <UserAccountMenu />
            </div>
            {outlet ?
                <div className={style.content}>
                    <Outlet />
                </div>
                :
                <div>
                    <p>hola</p>
                    <p>hola</p>
                    <p>hola</p>
                </div>}


        </div>

    )
}