import { useState } from "react";
import ReactModal from "react-modal";
import NewAddressForm from "../NewAddressForm/newAddressForm";
import style from './modalAddress.module.css'


export default function ModalAddress({ setUpdateAddress }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={style.addressModal}>
            <li>
                <button onClick={toggleModal}>
                    Add new Address
                </button>
            </li>
            <ReactModal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="address"
                className={style.modal}                    >
                <div className={style.close}>
                    <NewAddressForm setUpdateAddress={setUpdateAddress} />
                    <div className={style.button}>
                        <button onClick={toggleModal}>X</button>
                    </div>
                </div>
            </ReactModal>
        </div>
    )
}