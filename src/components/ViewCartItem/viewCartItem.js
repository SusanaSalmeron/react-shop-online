import style from './viewCartItem.module.css'



export default function ViewCartItem({ brand, name, color, price, quantity }) {

    return (
        <div className={style.shopping}>
            <div className={style.content}>
                {brand} - {name} <span>Shade: {color}</span>
            </div>

            <div className={style.quantity}>
                <p>{quantity} u</p>
            </div>
            <div className={style.price}>{price * quantity} €</div>
        </div>
    )
}