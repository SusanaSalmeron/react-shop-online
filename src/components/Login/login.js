import { useNavigate } from "react-router-dom";
import ReactModal from 'react-modal';
import { useState } from "react";
import './login.css';
import LoginForm from "../LoginForm/loginForm";
import { userLogin } from "../../services/userAccountService";
import { popUpAlert } from "../../utils/popUpAlert";
import Signup from "../Signup/signup";
import { useDispatch } from "react-redux";
import { login } from '../../features/loginState'


ReactModal.setAppElement('#root');


export default function Login() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()

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
            dispatch(login())
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
                        <p>Already have an account?</p>
                        <Signup />
                    </div>
                </ReactModal >
            </div >
        </>
    )
}