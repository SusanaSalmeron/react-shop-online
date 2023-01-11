import { useState } from "react";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cartManagement";
import { popUpAlert } from "../../utils/popUpAlert";
import style from './modalSelectProductColor.module.css'


export default function ModalSelectProductColorColor({ item }) {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedColor, setSelectedColor] = useState()
    const dispatch = useDispatch()

    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    const handleClick = (e) => {
        setSelectedColor(e.target.textContent)
    }

    const handleAddToCart = async () => {
        const id = item.id.toString()
        const brand = item.brand
        const name = item.name
        const color = selectedColor
        const price = item.price
        const image = item.api_featured_image
        if (color === null) {
            await popUpAlert('center', 'error', 'You must choose one color', false, 2000)
        } else if (price === "0.0" || price === null) {
            await popUpAlert('center', 'error', 'The item is out of stock', false, 2000)
        } else {
            dispatch(addToCart({ id, brand, name, color, price, image }))
            await popUpAlert('center', 'success', 'Item has been added to your cart', false, 2000)
        }
    }

    return (
        <div className={style.container}>
            <li>
                <button onClick={toggleModal}>
                    <i className="fa-solid fa-cart-shopping" />
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
                        SELECT SHADE:
                    </h3>
                    <button
                        onClick={toggleModal}
                    >X</button>
                </div>
                <div className={style.colours_container}>
                    {item.product_colors.map(p => {
                        return <button
                            id={item.id}
                            style={{ backgroundColor: p.hex_value }}
                            key={`${item.id}${p.colour_name}`}
                            className={style.colours}
                            onClick={handleClick}
                        >
                            <span className={style.tooltip}>{p.colour_name}
                            </span>
                        </button>
                    })}
                </div>
                <div className={style.cart}>
                    <button
                        onClick={handleAddToCart}>ADD TO CART</button>
                </div>
            </ReactModal >
        </div >
    )
}