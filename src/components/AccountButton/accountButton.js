import { useNavigate } from "react-router-dom"
import decode from 'jwt-decode'


export default function AccountButton() {
    const navigate = useNavigate()
    const navigateAccount = () => {
        const token = localStorage.getItem('token')
        const id = decode(token).id
        navigate(`/account/${id}/address`)
    }

    return (
        <button
            type='submit'
            onClick={navigateAccount}
        >My Account</button>
    )
}