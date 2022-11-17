import style from './makeupProductCard.module.css';
import SpinnerContext from '../../context/SpinnerContext'
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addProductToWishlist, deleteProductFromWishlist } from '../../services/userAccountService';
import { checkProductExistsOnWishlist } from '../../services/wishlistService';
import { popUpAlert } from '../../utils/popUpAlert';


export default function MakeupProductCard({ productData }) {

    const { spinnerDisplay } = useContext(SpinnerContext)
    const regular = "fa-regular fa-heart"
    const solid = "fa-solid fa-heart"
    const [like, setLike] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        const userId = localStorage.getItem('id')
        if (userId) {
            if (!like) {
                addProductToWishlist(userId, productData.id)
            } else {
                deleteProductFromWishlist(userId, productData.id)
            }
            setLike(!like)
        } else {
            popUpAlert('center', 'warning', 'You must be log in to add any product to your wishlist', true, 3000)
        }
    }

    const handleNavigate = () => {
        navigate(`/product/${productData.id}`)
    }

    useEffect(() => {
        const userId = localStorage.getItem('id')
        if (userId) {
            checkProductExistsOnWishlist(userId, productData.id)
                .then(inWishlist => {
                    setLike(inWishlist)
                })
        }
    }, [productData.id])

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
                    <p className={productData.price === "0.0" || productData.price === null ? style.soldout : null}>{productData.price !== "0.0" && productData.price !== null ? productData.price + "€" : "SOLD OUT"}</p>
                    <button >
                        <i className="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </>
    )
}