import { useNavigate } from "react-router-dom"
import { popUpAlert } from '../../utils/popUpAlert'
import { useDispatch } from "react-redux";
import { logout } from '../../features/loginState'


export default function LogoutButton() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const submitLogout = async () => {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        dispatch(logout())
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