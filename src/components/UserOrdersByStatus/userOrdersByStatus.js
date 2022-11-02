import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrdersBy } from '../../services/userAccountService';
import UserOrdersCard from '../UserOrderCard/userOrderCard';
import style from './userOrdersByStatus.module.css';
import Spinner from '../Spinner/spinner';


export default function UserOrdersInprocess() {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const { id, status } = useParams()


    useEffect(() => {
        getOrdersBy(status, id)
            .then(response => {
                setOrders(response)
                setLoading(false)
            })
    }, [id, status])


    return (
        <div className={style.container}>
            <h2>My orders</h2>
            <div className={!loading ? null : style.spinner}>
                <Spinner
                    loading={loading} />
                {
                    orders.length > 0 ? orders.map((o, i) => {
                        return <UserOrdersCard
                            data={o}
                            key={i}

                        />
                    }) : <h3>You don't have any order yet</h3>
                }
            </div>
        </div>
    )
}