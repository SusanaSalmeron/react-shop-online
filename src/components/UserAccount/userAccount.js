import UserAccountMenu from "../UserAccountMenu/userAccountMenu";
import style from './userAccount.module.css'
import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { checkValidToken } from '../../middleware/checkValidToken';
import Error403 from "../Error403/error403";


//TODO -- resume page of all user data

export default function UserAccount() {
    const [outlet, setOutlet] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        setOutlet(true)
    }, [])

    return (
        <>
            {checkValidToken(id) ? <>
                <div className={style.container} >
                    <div className={style.menu}>
                        <UserAccountMenu />
                    </div>
                    {outlet ?
                        <div className={style.content}>
                            <Outlet />
                        </div>
                        :
                        <div>
                        </div>}
                </div>
            </> : <Error403 />}
        </>

    )
}