import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import { useState } from "react";
import './login.css';
import LoginForm from "../LoginForm/loginForm";


Modal.setAppElement('#root');


export default function Login() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/about')
        toggleModal()
    }

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <button onClick={toggleModal}>Log in</button>
            <Modal
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
                    toggleModal={toggleModal} />

                <div className="signup">
                    <p>Already have an account?<button onClick={handleNavigate} >Sign up</button></p>
                </div>
            </Modal >
        </div >
    )
}