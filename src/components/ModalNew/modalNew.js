import { useState } from 'react';
import ReactModal from 'react-modal';
import style from './modalNew.module.css'


export default function ModalNew() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <li>
                <button onClick={toggleModal}>
                    <i className="fa-solid fa-face-grin-stars" />
                    NEW IN
                </button>
            </li>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="new"
                className={style.modal}                    >
                <div className={style.close}>
                    <h3><i className="fa-solid fa-face-grin-stars" />NEW PRODUCTS</h3>
                    <p>The last releases and new products always first on Makeup Store</p>
                    <button onClick={toggleModal}>X</button>
                </div>
            </ReactModal>
        </>
    )
}