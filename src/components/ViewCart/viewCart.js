import {
    useSelector
} from 'react-redux'
import style from './viewCart.module.css';
import ViewCartItem from '../ViewCartItem/viewCartItem';
import { calculateTotal } from '../../utils/calculateTotalCart';


export default function ViewCart() {
    const cart = useSelector((state) => state.cartManagement.value)

    return (
        <div className={style.container}>
            <h3>CHECK YOUR ORDER</h3>
            <div className={style.data}>
                {cart?.map((item) => (
                    <ViewCartItem
                        key={`${item.brand} + ${item.color}`}
                        id={item.id}
                        brand={item.brand}
                        name={item.name}
                        color={item.color}
                        price={item.price}
                        quantity={item.quantity}
                        picture={item.image}
                    />
                ))}
            </div>

            <div className={style.total}>
                <div className={style.totalcontent}>
                    <h4>Subtotal</h4></div>
                <div className={style.price}>{calculateTotal(cart, 0)} €</div>

            </div>

            <div className={style.cost}>
                <h4>Shipping Cost</h4>
                {calculateTotal(cart) > 50 ? <p>Free Shipping</p> : <p>5€ (Free shipping when your order is over 50€)</p>}
            </div>

            <div className={style.total}>
                <div className={style.totalcontent}>
                    <h4>TOTAL</h4></div>
                <div className={style.price}>{calculateTotal(cart)} €</div>
            </div>
        </div>
    )
}