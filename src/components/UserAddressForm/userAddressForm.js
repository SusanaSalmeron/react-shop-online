import UserAccountUpdateAddressForm from '../UserAccountUpdateAddressForm/userAccountUpdateAddressForm'
import style from './userAddressForm.module.css';
import UpdateAddressContext from '../../context/UpdateAddressContext';
import { useContext } from 'react';
import { updateUserAccountBillingAddress } from '../../services/userAccountService';
import { useNavigate, useParams } from 'react-router-dom';
import { popUpAlert } from '../../utils/popUpAlert'

export default function UserAddressForm() {
    const { address, isBilling } = useContext(UpdateAddressContext)
    const { id } = useParams()
    const navigate = useNavigate()

    const submitBillingAddressChange = async (values) => {
        const { user_name, surname, identification, address, postalZip, city, country } = values
        const userDataUpdated = await updateUserAccountBillingAddress(id, user_name, surname, identification, address, postalZip, city, country)
        if (userDataUpdated) {
            await popUpAlert("center", "success", "Billing address updated successfully", false, 2000)
            navigate(`/account/${id}`)
        } else {
            popUpAlert("center", "error", "Billing address not updated", false, 2000)
        }
    }
    //TODO - UPDATE BILLING ADDRESS
    const submitDeliveryAddressChange = async (values) => {
        /*         const { user_name, surname, address, postalZip, city, country } = values
         */
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