import { useNavigate } from "react-router-dom"


export default function LogoutButton({ setLoggedIn }) {
    const navigate = useNavigate()

    const submitLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        setLoggedIn(false)
        navigate('/home')
    }

    return (
        <button
            type='button'
            onClick={submitLogout}
        >Log Out</button>
    )
}