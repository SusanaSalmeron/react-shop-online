import style from './orderCard.module.css'


export default function OrderCard({ product }) {
    return (
        <>
            {console.log(product)}
            <p>{product.product_brand}</p>
            <p>{product.productName}</p>
            <p className={style.style}>{product.product_colour}</p>
            <p className={style.style}>{product.units}</p>
            <p className={style.style}>{product.price}€</p>
            <p className={style.style}>{product.product_total}€</p>
        </>
    )
}