import { useState } from "react";
import ReactModal from "react-modal";
import style from './modalOriginal.module.css'


export default function ModalOriginal() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <li>
                <button onClick={toggleModal}>
                    <i className="fa-solid fa-certificate" />
                    100% ORIGINAL
                </button>
            </li>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="original"
                className={style.modal}
            >
                <div className={style.close}>
                    <h3>
                        <i className="fa-solid fa-certificate" />
                        OUR PRODUCTS ARE 100% ORIGINAL
                    </h3>
                    <p>All our products are guaranteed and come from authorized manufacturers or distributors.</p>
                    <button onClick={toggleModal}>X</button>
                </div>
            </ReactModal>
        </>
    )
}