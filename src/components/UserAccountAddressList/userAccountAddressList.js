import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import UpdateAddressContext from "../../context/UpdateAddressContext";
import { deleteAddress, getUserAddresses, getUserData } from "../../services/userAccountService";
import NavigateButton from '../NavigateButton/navigateButton';
import UserAccountAddress from "../UserAccountAddress/UserAccountAddress";
import style from './userAccountAddressList.module.css';
import { popUpAlertWithConfirmation } from '../../utils/popUpAlert'


export default function UserAccountAddressList() {
    //Billing address data to show
    const [mainAddressData, setMainAddressData] = useState({})
    //Delivery addresses data to show
    const [addressListShow, setAddressListShow] = useState([])
    //Context to set one of the delivery addresses to be modified
    const { setAddress, setIsBilling } = useContext(UpdateAddressContext)
    const [isDeleted, setIsDeleted] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getUserData(id)
            .then(response => {
                setMainAddressData(response)
            })
        getUserAddresses(id)
            .then(response =>
                setAddressListShow(response))
    }, [id, isDeleted])

    const updateHandleClick = (e) => {
        setIsBilling(0)
        setAddress(addressListShow[e.target.id])
        navigate('../addressForm')
    }

    const billingHandleClick = () => {
        setIsBilling(1)
        setAddress(mainAddressData)
        navigate('../addressForm')
    }
    const deleteHandleClick = async (e) => {
        await popUpAlertWithConfirmation('Are you sure?', 'Your address will be deleted', 'warning', 'delete')
        if (addressListShow[e.target.id].id && id) {
            await deleteAddress(addressListShow[e.target.id].id, id)
            setIsDeleted(!isDeleted)
        }
    }

    return (
        <div className={style.container}>
            <h3>My Billing Address</h3>
            <div className={style.address}>
                <>
                    <UserAccountAddress
                        data={mainAddressData}
                    />
                    <NavigateButton
                        id={mainAddressData.id}
                        name='billing'
                        label='SEE'
                        onClick={billingHandleClick}
                        isbilling={1}
                    />
                </>
            </div>

            <h3>Addresses</h3>
            {addressListShow.length === 0 ? <h4>No addresses yet</h4> :
                <div>
                    <div className={style.addresses}>
                        {addressListShow.map((a, index) => {
                            return <>
                                <UserAccountAddress
                                    data={a}
                                    key={`${a.id}id`}
                                />
                                <NavigateButton
                                    key={index}
                                    id={index}
                                    name="update"
                                    label='Update'
                                    className={style.navigate}
                                    onClick={updateHandleClick}
                                    isbilling={0}
                                />
                                <NavigateButton
                                    key={`${index}+delete`}
                                    id={index}
                                    name="delete"
                                    label='Delete'
                                    className={style.navigate}
                                    onClick={deleteHandleClick}
                                />
                            </>
                        })}
                    </div>
                </div>}
            <div className={style.add}>
                <NavigateButton
                    name="add"
                    route='../newAddress'
                    label='ADD'
                />
            </div>
        </div>
    )
}