import { useNavigate } from "react-router-dom";
import Modal from 'react-modal';
import { useState } from "react";
import './signup.css';
import SignupForm from '../SignupForm/signupForm';


Modal.setAppElement('#root');


export default function Signup() {
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
            <button onClick={toggleModal}>Sign up</button>
            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="Login"
                className='mymodal'
            >
                <div className="close">
                    <h2>Sign up</h2>
                    <button onClick={toggleModal}>X</button>
                </div>

                <SignupForm
                    toggleModal={toggleModal} />

                <div className="login">
                    <p>Have an account?<button onClick={handleNavigate} >Log in</button></p>
                </div>
            </Modal >
        </div >
    )
}