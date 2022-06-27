import style from './makeupFaceProductCard.module.css'

export default function MakeupFaceProductCard({ data }) {


    return (
        <div className={style.productCard}>
            <h3>{data.name}</h3>
            <figure>
                <img src={data.image_link} alt={data.brand} />
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