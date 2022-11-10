import { useState } from 'react';
import ReactModal from 'react-modal';
import style from './modalOrder.module.css'


export default function ModalOrder() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <li>
                <button onClick={toggleModal}> <i className="fa-solid fa-clock" /> YOUR PACKAGE IN 24 HOURS</button></li>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="24hours"
                className={style.modal}                    >
                <div className={style.close}>
                    <h3><i className="fa-solid fa-clock" />WE PREPARE YOUR ORDER IN 24H</h3>
                    <p>Your products will leave our warehouse within 24 working hours after your order.</p>
                    <button onClick={toggleModal}>X</button>
                </div>
            </ReactModal>
        </>
    )
}