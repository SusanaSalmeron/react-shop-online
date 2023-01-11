import { useDispatch, useSelector } from 'react-redux'
import style from './cart.module.css';
import CartItem from '../CartItem/cartItem';
import { clearCart } from '../../features/cartManagement';
import { useNavigate } from 'react-router-dom';
import { popUpAlert } from '../../utils/popUpAlert';
import { checkProductsStock } from '../../services/cartService';
import { calculateTotal } from '../../utils/calculateTotalCart';


export default function Cart() {
    const cart = useSelector((state) => state.cartManagement.value)
    const loginState = useSelector((state) => state.loginState.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleClear = () => {
        dispatch(clearCart())
    }

    const handleCheckout = async () => {
        const id = localStorage.getItem('id')
        if (loginState) {
            const productsId = cart.map(item => item.id)
            const stockIsValid = await checkProductsStock(productsId)
            if (stockIsValid) {
                navigate(`/${id}/cart/address`)
            } else {
                await popUpAlert('center', 'warning', 'Some of your products currently have no stock, please remove from your cart', false, 2000)
            }
        } else {
            await popUpAlert('center', 'warning', 'Please log in to continue with checkout', false, 2000)
        }
    }

    return (
        <div className={style.container}>
            <h3>WHAT'S IN MY CART</h3>
            {console.log(cart)}
            <div className={style.data}>
                {cart.length === 0 ? <div className={style.empty}>
                    <h4>NO ITEMS IN YOUR CART YET</h4>
                </div> : cart?.map((item) => (
                    <CartItem
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
            {cart.length < 1 ? null : <hr />}
            <div className={style.total}>
                <div className={style.totalcontent}>TOTAL: </div>
                <div className={style.notation}>(SHIPPING NOT INCLUDED)</div>
                <div className={style.price}>{calculateTotal(cart, 0)} €</div>

            </div>

            <div className={style.buttons}>
                <button onClick={handleClear}>CLEAR CART</button>
                <button onClick={handleCheckout}>CHECKOUT</button>
            </div>
        </div>
    )
}