import UserAccountUpdateAddressForm from '../UserAccountUpdateAddressForm/userAccountUpdateAddressForm'
import style from './userAddressForm.module.css';
import UpdateAddressContext from '../../context/UpdateAddressContext';
import { useContext } from 'react';

export default function UserAddressForm() {
    const { address, isBilling } = useContext(UpdateAddressContext)

    const submitBillingAddressChange = (e) => {
        console.log("Billing address change sent", e)
    }

    const submitDeliveryAddressChange = (e) => {
        console.log("Delivery change sent ", e)
    }

    return (
        <div className={style.container}>
            {isBilling ? <h3>My Billing Address</h3> : <h3>Address Book</h3>}
            <UserAccountUpdateAddressForm
                submit={isBilling ? submitBillingAddressChange : submitDeliveryAddressChange}
                address={address}
                id=''
            />
        </div>
    )
}     