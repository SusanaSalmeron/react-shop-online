import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOrder, getUserData } from "../../services/userAccountService";
import style from './order.module.css';
import Spinner from '../Spinner/spinner';


export default function Order() {
    const { id, orderid } = useParams()
    const [order, setOrder] = useState({ products: [] })
    const [userData, setUserData] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getOrder(id, orderid)
            .then(response => {
                setOrder(response)
                setLoading(false)
            })
        getUserData(id)
            .then(response => {
                setUserData(response)
            })
        setLoading(true)
    }, [id, orderid])

    return (
        <div className={style.container}>
            {<>
                <div className={loading ? style.spinner : null}>
                    <Spinner loading={loading} />
                </div>

                <div className={loading ? style.hide : style.container}>
                    <h2>ORDER Nº {order.order_id}</h2>
                    <div className={style.data}>
                        <p>DATE: {order.order_date}</p>
                        <p className={style.status}> {order.status}</p>
                    </div>

                    <div className={style.userdata}>
                        <div className={style.billing}>
                            <h3>Billing Address</h3>
                            <p>{userData.user_name} {userData.surname}</p>
                            <p>{userData.address}</p>
                            <p>{userData.postalZip} {userData.city} </p>
                            <p>{userData.country}</p>
                        </div>
                        <div className={style.shipping}>
                            <h3>Shipping Address</h3>
                            <p>{order.name} {order.surname}</p>
                            <p>{order.address}</p>
                            <p>{order.postalZip} {order.city} </p>
                            <p>{order.country}</p>
                        </div>
                    </div>

                    <div className={style.order}>
                        <p className={style.tag}>BRAND</p>
                        <p className={style.tag}>PRODUCT</p>
                        <p className={style.center}>COLOR</p>
                        <p className={style.center}>UNITS</p>
                        <p className={style.center}>PRICE</p>
                        <p className={style.center}>SUBTOTAL</p>
                        {order.products.map(p => {
                            return <>
                                <p>{p.product_brand}</p>
                                <p>{p.product_name}</p>
                                <p className={style.style}>{p.product_colour}</p>
                                <p className={style.style}>{p.units}</p>
                                <p className={style.style}>{p.price}€</p>
                                <p className={style.style}>{p.product_total} €</p>
                            </>
                        })}
                        <p className={style.total}>TOTAL: {order.total_order} €</p>
                    </div>
                </div>
            </>}
        </div>
    )
}