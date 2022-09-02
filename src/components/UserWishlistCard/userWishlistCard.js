import { useNavigate } from 'react-router-dom';
import style from './userWishlistCard.module.css';


export default function UserWishlistCard({ data, deleteHandleClick }) {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/product/${data.id}`)
    }



    return (
        <div className={style.container}>
            <p>{data.brand}</p>
            <p>{data.name}</p>
            <p>{data.price} €</p>
            <figure className={style.picture}>
                <img src={data.api_featured_image} alt={data.name} />
            </figure>
            <div
                className={style.buttons}
            >
                <button
                    className={style.see}
                    onClick={handleClick}
                >
                    <i className="fa-solid fa-eye" />
                </button>
                <button className={style.cart}
                >
                    <i className="fa-solid fa-cart-shopping" />
                </button>
                <button
                    id={data.id}
                    name="delete"
                    className={style.trash}
                    onClick={deleteHandleClick}
                >
                    < i className="fa-solid fa-trash-can" />
                </button>
            </div>

        </div>
    )
}