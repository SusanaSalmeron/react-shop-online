import style from './myPendingProductsForReview.module.css';
import NavigateButton from '../NavigateButton/navigateButton';

export default function MyPendingProductsForReview({ product }) {
    return (
        <div className={style.container}>
            <div className={style.pending}>
                <h3>{product.productName}</h3>
                <NavigateButton
                    id={product.productId}
                    name="Review"
                    route={'/home'}
                    label='Review'
                    className={style.button}
                />
            </div>

        </div>

    )
}