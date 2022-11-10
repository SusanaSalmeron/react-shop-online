import ReactModal from "react-modal";
import { useState } from "react";
import style from './modalPayment.module.css'

export default function ModalPayment() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <li>
                <button onClick={toggleModal}>
                    <i className="fa-solid fa-key" />
                    SECURE PAYMENT
                </button>
            </li>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="secure"
                className={style.modal}
            >
                <div className={style.close}>
                    <h3>
                        <i className="fa-solid fa-key" />
                        SECURE PAYMENT
                    </h3>
                    <p>Our website and payment systems use the highest security standards.</p>
                    <button onClick={toggleModal}>X</button>
                </div>
            </ReactModal>
        </>
    )
}