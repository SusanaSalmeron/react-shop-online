import { useNavigate } from "react-router-dom";
import ReactModal from 'react-modal';
import { useState } from "react";
import './signup.css';
import SignupForm from '../SignupForm/signupForm';
import Login from "../Login/login";


ReactModal.setAppElement('#root');


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
            <ReactModal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="Signup"
                className='mymodal'
            >
                <div className="close">
                    <h2>Sign up</h2>
                    <button onClick={toggleModal}>X</button>
                </div>
                <SignupForm
                    toggleModal={toggleModal} />

                <div className="login">
                    <p>Have an account?</p>
                    <Login />
                </div>
            </ReactModal >
        </div >
    )
}