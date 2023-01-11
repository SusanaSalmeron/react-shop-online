import { useEffect, useState } from 'react'
import { getUserAddresses, getUserData } from '../../services/userAccountService'
import style from './checkoutAddress.module.css';
import ModalAddress from '../ModalAddress/modalAddress';
import NavigateButton from '../NavigateButton/navigateButton'
import ViewCart from '../ViewCart/viewCart';



export default function CheckoutAddress() {
    const [shippingAddress, setShippingAddress] = useState({})
    const [billingAddress, setBillingAddress] = useState({})
    const [updateAddress, setUpdateAddress] = useState(false)
    const id = localStorage.getItem('id')

    useEffect(() => {
        getUserAddresses(id)
            .then(response => {
                const address = response.filter(address => address.defaultAddress)
                address.length === 1 ? setShippingAddress(address[0]) : setShippingAddress(null)
            })
        getUserData(id)
            .then(response => {
                setBillingAddress(response)
            })
    }, [id, updateAddress])


    return (
        <div className={style.container}>
            <div className={style.addresses}>
                <div className={style.billing}>
                    <h2>Billing Address</h2>
                    <p>{billingAddress.userName} {billingAddress.surname}</p>
                    <p>{billingAddress.address}</p>
                    <p>{billingAddress.postalZip} {billingAddress.city}</p>
                    <p>{billingAddress.country}</p>
                </div>
                <div className={style.shipping}>
                    <h2>Shipping Address</h2>
                    {shippingAddress ? <div>
                        <p>{shippingAddress.userName} {shippingAddress.surname}</p>
                        <p>{shippingAddress.address}</p>
                        <p>{shippingAddress.postalZip} {shippingAddress.city}</p>
                        <p>{shippingAddress.country}</p>
                        <ModalAddress setUpdateAddress={setUpdateAddress} />
                    </div> :
                        <div>
                            <h2>You don't have default address, select one from your address book</h2>
                            <ModalAddress setUpdateAddress={setUpdateAddress} />
                        </div>}
                </div>
                <div className={style.cart}>
                    <ViewCart />
                </div>
            </div>
            <div className={style.back}>
                <NavigateButton
                    name='back'
                    label='GO BACK'
                    route={`/${id}/cart`}
                />
            </div>
            <div className={style.payment}>
                <NavigateButton
                    name='payment'
                    label='GO TO PAYMENT'
                    route='home'
                />
            </div>
        </div>
    )
}