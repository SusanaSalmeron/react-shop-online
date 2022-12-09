import { useNavigate } from "react-router-dom"
import decode from 'jwt-decode'
import { useDispatch } from "react-redux"
import { logout } from "../../features/loginState"


export default function AccountButton() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const navigateAccount = () => {
        const token = localStorage.getItem('token')
        if (token) {
            const id = decode(token).id
            navigate(`/account/${id}/address`)
        } else {
            dispatch(logout())
            navigate('/error403')
        }
    }

    return (
        <button
            type='submit'
            onClick={navigateAccount}
        >My Account</button>
    )
}