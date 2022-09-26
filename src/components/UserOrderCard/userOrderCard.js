import style from './userOrderCard.module.css';
import NavigateButton from '../NavigateButton/navigateButton';
import { useParams } from 'react-router-dom';


export default function UserOrdersCard({ data }) {
    const { id, status } = useParams()
    return (
        <div className={style.container}>
            <div className={style.order}>
                <p className={style.number}>ORDER Nº: {data.order_id}</p>
                <p className={style.date}>DATE: {data.order_date}</p>
                <p className={style.total}>TOTAL: {data.total_order} €</p>
                {data?.status === "Shipped" ? <p className={style.shipped}>{data.status}</p> : <p className={style.process}>{data.status}</p>}

                <NavigateButton
                    id={data.order_id}
                    name="See"
                    route={!status ? `${data.order_id}` : `/account/${id}/orders/${data.order_id}`}
                    label="SEE"
                />
            </div>
        </div>
    )
}