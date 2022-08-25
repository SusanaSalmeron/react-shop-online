import { useContext, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getUserOrders } from '../../services/userAccountService';
import UserOrdersCard from '../UserOrderCard/userOrderCard';
import style from './userOrdersList.module.css';
import Spinner from '../Spinner/spinner';
import SpinnerContext from '../../context/SpinnerContext';


export default function UserOrdersList() {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const { spinnerDisplay } = useContext(SpinnerContext)


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
            {!spinnerDisplay ? <Outlet /> : <>
                <div className={!loading ? null : style.spinner}>       <Spinner
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