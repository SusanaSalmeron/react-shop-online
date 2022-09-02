import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserOrders } from '../../services/userAccountService';
import UserOrdersCard from '../UserOrderCard/userOrderCard';
import style from './userOrdersList.module.css';
import Spinner from '../Spinner/spinner';


export default function UserOrdersList() {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    useEffect(() => {
        getUserOrders(id)
            .then(response => {
                setOrders(response)
                setLoading(false)
            })
    }, [id])


    return (
        <div className={style.container}>
            <h2>My orders</h2>
            <div className={!loading ? null : style.spinner}>
                <Spinner
                    loading={loading} />
                {
                    orders.map(o => {
                        return <UserOrdersCard
                            data={o}
                        />
                    })
                }
            </div>
        </div>
    )

}