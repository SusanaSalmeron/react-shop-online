import style from './makeupProductCard.module.css'
import { useState } from 'react'

export default function MakeupFaceProductCard({ data }) {
    const regular = "fa-regular fa-heart"
    const solid = "fa-solid fa-heart"
    const [changeIcon, setChangeIcon] = useState(regular)
    const handleClick = () => {
        changeIcon === regular ?
            setChangeIcon(solid) :
            setChangeIcon(regular)
    }

    return (
        <div className={style.productCard}>
            <div className={style.fav}>
                <button onClick={handleClick}>
                    <i className={changeIcon} />
                </button>
            </div>
            <div className={style.name}>
                <h3>{`${data.name} - ${data.brand}`}</h3>
            </div>
            <figure>
                <img src={data.api_featured_image} alt={data.brand} />
            </figure>
            <div className={style.bottom}>
                <p>{data.price} $</p>
                <button >
                    <i className="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </div>
    )
}