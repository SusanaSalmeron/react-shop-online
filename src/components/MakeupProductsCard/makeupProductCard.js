import style from './makeupProductCard.module.css';
import SpinnerContext from '../../context/SpinnerContext'
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProductToWishlist, deleteProductFromWishlist } from '../../services/userAccountService';
import { checkProductExistsOnWishlist } from '../../services/wishlistService';


export default function MakeupProductCard({ productData }) {
    const userId = localStorage.getItem('id')
    const { spinnerDisplay } = useContext(SpinnerContext)
    const regular = "fa-regular fa-heart"
    const solid = "fa-solid fa-heart"
    const [like, setLike] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        if (!like) {
            addProductToWishlist(userId, productData.id)
        } else {
            deleteProductFromWishlist(userId, productData.id)
        }
        setLike(!like)
    }

    const handleNavigate = () => {
        navigate(`/product/${productData.id}`)
    }

    useEffect(() => {
        checkProductExistsOnWishlist(userId, productData.id)
            .then(inWishlist => {
                setLike(inWishlist)
            })
    }, [productData.id, userId])

    return (
        <>
            <div
                className={spinnerDisplay ? style.hide : style.productCard}>
                <div className={style.fav}>
                    <button
                        id={productData.id}
                        onClick={handleClick}
                    >
                        <i className={like ? solid : regular} />
                    </button>
                </div>
                <div className={style.name}>
                    <h3>{`${productData.name} - ${productData.brand}`}</h3>
                </div>
                <figure onClick={handleNavigate}>
                    <img src={productData.api_featured_image} alt={productData.brand} />
                </figure>
                <div className={style.bottom}>
                    <p>{productData.price} $</p>
                    <button >
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </>
    )
}