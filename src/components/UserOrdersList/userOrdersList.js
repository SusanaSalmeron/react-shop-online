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
    const { spinnerDisplay, setSpinnerDisplay } = useContext(SpinnerContext)



    useEffect(() => {
        getUserOrders(id)
            .then(response => {
                setOrders(response)
                setLoading(false)
                setSpinnerDisplay(false)
            })
    }, [id, setSpinnerDisplay])


    return (
        <div className={style.container}>
            <h2>My orders</h2>
            {spinnerDisplay ? <Outlet /> : <>
                <Spinner
                    loading={loading} />
                <div className={style.content}
                >           {
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