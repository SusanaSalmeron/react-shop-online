import style from './userOrderCard.module.css';
import NavigateButton from '../NavigateButton/navigateButton';


export default function UserOrdersCard({ data }) {
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
                    route={`${data.order_id}`}
                    label="SEE"
                />
            </div>
        </div>
    )
}