import { useContext, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getOrdersBy } from '../../services/userAccountService';
import UserOrdersCard from '../UserOrderCard/userOrderCard';
import style from './userOrdersByStatus.module.css';
import Spinner from '../Spinner/spinner';
import SpinnerContext from '../../context/SpinnerContext';



export default function UserOrdersInprocess() {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const { id, status } = useParams()
    const { spinnerDisplay } = useContext(SpinnerContext)


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
            {!spinnerDisplay ? <Outlet /> : <>
                <div className={!loading ? null : style.spinner}>
                    <Spinner
                        loading={loading} />
                    <div className={style.content}
                    >
                    </div>
                    {
                        orders.map(o => {
                            return <UserOrdersCard
                                data={o}
                            />
                        })
                    }
                </div> </>
            }
        </div>
    )
}