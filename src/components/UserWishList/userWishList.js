import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserWishlist } from "../../services/userAccountService";
import Spinner from "../Spinner/spinner";
import UserWishlistCard from "../UserWishlistCard/userWishlistCard";
import style from './userWishlist.module.css'


export default function UserWishlist() {
    const { id } = useParams()
    const [wishlist, setWishlist] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getUserWishlist(id)
            .then(response => {
                setWishlist(response)
                setLoading(false)
            })
    })
    return (
        <div className={style.container}>
            <h2 >My Wishlist</h2>
            <div className={!loading ? null : style.spinner}>
                <Spinner loading={loading} />
                {wishlist.map(p => {
                    return <UserWishlistCard
                        data={p}
                    />
                })}
            </div>
        </div>
    )
}