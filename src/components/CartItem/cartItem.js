import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../features/cartManagement'
import style from './cartItem.module.css'



export default function CartItem({ id, brand, name, color, price, quantity, picture }) {
    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(removeFromCart(id))
    }

    return (
        <div className={style.shopping}>
            <picture>
                <img className={style.image} src={picture} alt='item' />
            </picture>

            <div className={style.content}>
                {brand} - {name} <span>Shade: {color}</span>
            </div>

            <div className={style.changequantity}>
                <button
                    onClick={() => dispatch(decrementQuantity(id))}
                >-
                </button>
                <p>{quantity}</p>
                <button
                    onClick={() => dispatch(incrementQuantity(id))}
                >+
                </button>
            </div>
            <div className={style.price}>{price * quantity} €</div>
            <div className={style.remove}>
                <button
                    onClick={handleRemove}>
                    Remove
                </button>
            </div>

        </div>
    )
}