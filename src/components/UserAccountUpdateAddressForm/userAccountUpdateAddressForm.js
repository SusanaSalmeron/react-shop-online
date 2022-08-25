import { Formik, Field, Form, ErrorMessage } from 'formik';
import ValidationFormForUserAccountAddress from "../../middleware/validationFormForUserAccountAddress";
import ValidationFormForUserAccountBillingAddress from '../../middleware/validationFormForUserAccountBillingAddress';
import SubmitButton from "../SubmitButton/submitButton";
import style from './userAccountUpdateAddressForm.module.css';
import UpdateAddressContext from '../../context/UpdateAddressContext';
import { useContext } from 'react';


export default function UserAccountUpdateAddressForm({ submit, address }) {
    const { isBilling } = useContext(UpdateAddressContext)

    const initialValues = {
        user_name: address ? address.user_name : "",
        surname: address ? address.surname : "",
        identification: address ? address?.identification : "",
        address: address ? address.address : "",
        postalZip: address ? address.postalZip : "",
        city: address ? address.city : "",
        country: address ? address.country : "",
    }


    return (
        <Formik
            enableReinitialize={true}
            initialValues={initialValues}
            onSubmit={submit}
            validationSchema={isBilling ? ValidationFormForUserAccountBillingAddress : ValidationFormForUserAccountAddress}
        >
            {
                ({ isSubmiting, dirty, isValid }) =>
                    <Form
                        className={style.form}
                        id="">
                        <label htmlFor="user_name">Name</label>
                        <Field
                            id="user_name"
                            name="user_name"
                        />
                        <ErrorMessage
                            className={style.error}
                            name='user_name'
                            component="small"
                        />
                        <label htmlFor="surname">Last Name</label>
                        <Field
                            id="surname"
                            name="surname"
                        />
                        <ErrorMessage
                            className={style.error}
                            name='surname'
                            component="small"
                        />
                        {isBilling ? <>
                            <label htmlFor="identification">ID</label>
                            <Field
                                id="identification"
                                name="identification"
                            />
                            <ErrorMessage
                                className={style.error}
                                name='identification'
                                component="small"
                            />
                        </> : null}
                        <label htmlFor="address">Address</label>
                        <Field
                            id="address"
                            name="address"
                        />
                        <ErrorMessage
                            className={style.error}
                            name='address'
                            component="small"
                        />
                        <label htmlFor="postalZip">PostalZip</label>
                        <Field
                            id="postalZip"
                            name="postalZip"
                        />
                        <ErrorMessage
                            className={style.error}
                            name='postalZip'
                            component="small"
                        />
                        <label htmlFor="city">City</label>
                        <Field
                            id="city"
                            name="city"
                        />
                        <ErrorMessage
                            className={style.error}
                            name='city'
                            component="small"
                        />
                        <label htmlFor="country">Country</label>
                        <Field
                            id="country"
                            name="country"
                        />
                        <ErrorMessage
                            className={style.error}
                            name='country'
                            component="small"
                        />
                        <div className={style.button}>
                            <SubmitButton
                                disabled={!isValid || !dirty || isSubmiting}
                                name='update'
                                label="UPDATE"
                            />
                        </div>
                    </Form>
            }
        </Formik>
    )
}