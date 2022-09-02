import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserWishlist } from "../../services/userAccountService";
import Spinner from "../Spinner/spinner";
import UserWishlistCard from "../UserWishlistCard/userWishlistCard";
import style from './userWishlist.module.css';
import { deleteProductFromWishlist } from '../../services/userAccountService';
import { popUpAlert } from "../../utils/popUpAlert";



export default function UserWishlist() {
    const { id } = useParams()
    const [wishlist, setWishlist] = useState([])
    const [loading, setLoading] = useState(true)
    const [isDeleted, setIsDeleted] = useState(false)


    const deleteHandleClick = async (e) => {
        await deleteProductFromWishlist(id, e.currentTarget.id)
        await popUpAlert("center", "success", "Product has been remove from your wishlist", false, 2000)
        setIsDeleted(!isDeleted)
    }

    useEffect(() => {
        getUserWishlist(id)
            .then(response => {
                setWishlist(response)
                setLoading(false)
            })
    }, [id, isDeleted])


    return (
        <div className={style.container}>
            <h2 >My Wishlist</h2>
            <div>
                {loading ? <Spinner loading={loading} /> :
                    wishlist.length > 0 ?
                        wishlist.map((p, i) => {
                            return <UserWishlistCard
                                id={wishlist[i].id}
                                data={p}
                                deleteHandleClick={deleteHandleClick}
                            />
                        }) : <h3>You don't have products in your wishlist</h3>
                }




            </div>
        </div>
    )
}