import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getUserWishlist } from "../../services/userAccountService";
import UserWishlistCard from "../UserWishlistCard/userWishlistCard";
import style from './userWishlist.module.css'


export default function UserWishlist() {
    const { id } = useParams()
    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        getUserWishlist(id)
            .then(response => {
                setWishlist(response)
            })
    })
    return (
        <div className={style.container}>
            <h2 >My Wishlist</h2>
            <div className={style.card}>
                {wishlist.map(p => {
                    return <UserWishlistCard
                        data={p}
                    />
                })}
            </div>
        </div>
    )
}