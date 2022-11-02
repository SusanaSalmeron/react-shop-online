import { useNavigate } from "react-router-dom";
import ReactModal from 'react-modal';
import { useState } from "react";
import './login.css';
import LoginForm from "../LoginForm/loginForm";
import { userLogin } from "../../services/userAccountService";
import { popUpAlert } from "../../utils/popUpAlert";


ReactModal.setAppElement('#root');


export default function Login({ setLoggedIn }) {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()


    const handleNavigate = () => {
        navigate('/signup')
        toggleModal()
    }

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const submitLogin = async (values) => {
        const { email, password } = values
        const id = await userLogin(email, password)
        if (id) {
            localStorage.setItem('id', id)
            await popUpAlert('center', 'success', 'You are log in', false, 2000)
            navigate(`/account/${id}/address`)
            setLoggedIn(true)
        } else {
            await popUpAlert('center', 'error', 'Email and/or password invalid', false, 2000)
        }
        toggleModal()
    }


    return (
        <>
            <div>
                <button onClick={toggleModal}>Log in</button>
                <ReactModal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    contentLabel="Login"
                    className='mymodal'
                >
                    <div className="close">
                        <h2>Log in</h2>
                        <button onClick={toggleModal}>X</button>
                    </div>
                    <LoginForm
                        submitLogin={submitLogin}
                    />
                    <div className="signup">
                        <p>Already have an account?<button onClick={handleNavigate} >Sign up</button></p>
                    </div>
                </ReactModal >
            </div >
        </>
    )
}