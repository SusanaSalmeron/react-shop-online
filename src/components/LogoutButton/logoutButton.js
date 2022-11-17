import { useNavigate } from "react-router-dom"
import { popUpAlert } from '../../utils/popUpAlert'


export default function LogoutButton({ setLoggedIn }) {
    const navigate = useNavigate()

    const submitLogout = async () => {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        setLoggedIn(false)
        navigate('/home')
        await popUpAlert('center', 'success', 'You are logout from your account', false, 2000)

    }

    return (
        <button
            type='button'
            onClick={submitLogout}
        >Log Out</button>
    )
}