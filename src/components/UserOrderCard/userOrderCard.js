import style from './userOrderCard.module.css';
import NavigateButton from '../NavigateButton/navigateButton';
import { useParams } from 'react-router-dom';


export default function UserOrdersCard({ data }) {
    const { id, status } = useParams()
    return (
        <div className={style.container}>
            <div className={style.order}>
                <p className={style.number}>ORDER Nº: {data.orderId}</p>
                <p className={style.date}>DATE: {data.orderDate}</p>
                <p className={style.total}>TOTAL: {data.totalOrder} €</p>
                {data?.status === "Shipped" ? <p className={style.shipped}>{data.status}</p> : <p className={style.process}>{data.status}</p>}

                <NavigateButton
                    id={data.order_id}
                    name="See"
                    route={!status ? `${data.orderId}` : `/account/${id}/orders/${data.orderId}`}
                    label="SEE"
                />
            </div>
        </div>
    )
}