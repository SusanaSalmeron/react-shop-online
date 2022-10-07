import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import SubmitButton from "../SubmitButton/submitButton";
import style from './newAddressForm.module.css';
import { newShippingAddress } from "../../services/userAccountService";
import { popUpAlert } from "../../utils/popUpAlert";
import ValidationFormForUserNewAddress from "../../middleware/validationForUserNewAddress";


export default function NewAddressForm() {
    const { id } = useParams()
    const navigate = useNavigate()
    const initialValues = {
        user_name: "",
        surname: "",
        address: "",
        postalZip: "",
        city: "",
        country: "",
        defaultAddress: false
    }


    const handleSubmit = async (values) => {
        const { user_name, surname, address, postalZip, city, country, defaultAddress } = values
        const newAddress = await newShippingAddress(id, user_name, surname, address, postalZip, city, country, defaultAddress)
        if (newAddress) {
            await popUpAlert("center", "success", "Address created successfully", false, 2000)
            navigate(`/account/${id}/address`)
        } else {
            popUpAlert("center", "error", "Address not created", false, 2000)
        }
    }

    return (
        <div className={style.container}>
            <h2>New Shipping Address</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={ValidationFormForUserNewAddress}
            >
                {
                    ({ isSubmiting, dirty, isValid }) =>
                        <Form className={style.form}>
                            <label htmlFor="name">Name</label>
                            <Field
                                className={style.field}
                                id="user_name"
                                name="user_name"
                                placeholder="Write your name"
                            />
                            <ErrorMessage
                                className={style.error}
                                name='user_name'
                                component="small"
                            />

                            <label htmlFor="lastName">Last Name</label>
                            <Field
                                className={style.field}
                                id="surname"
                                name="surname"
                                placeholder="Write your last name"
                            />
                            <ErrorMessage
                                className={style.error}
                                name='surname'
                                component="small"
                            />

                            <label htmlFor="address">Address</label>
                            <Field
                                className={style.field}
                                id="address"
                                name="address"
                                placeholder="Write your Address"
                            />
                            <ErrorMessage
                                className={style.error}
                                name='address'
                                component="small"
                            />
                            <label htmlFor="postalZip">PostalZip</label>
                            <Field
                                className={style.field}
                                id="postalZip"
                                name="postalZip"
                                placeholder="Write your PostalZip"
                            />
                            <ErrorMessage
                                className={style.error}
                                name='postalZip'
                                component="small"
                            />
                            <label htmlFor="city">City</label>
                            <Field
                                className={style.field}
                                id="city"
                                name="city"
                                placeholder="Write your City"
                            />
                            <ErrorMessage
                                className={style.error}
                                name='city'
                                component="small"
                            />
                            <label htmlFor="country">Country</label>
                            <Field
                                className={style.field}
                                id="country"
                                name="country"
                                placeholder="Write your Country"
                            />
                            <ErrorMessage
                                className={style.error}
                                name='country'
                                component="small"
                            />
                            <label htmlFor="default">Do you want it to be the default address?</label>
                            <Field
                                className={style.checkbox}
                                id="default"
                                name="defaultAddress"
                                type="checkbox"
                            />

                            <div className={style.button}>
                                <SubmitButton
                                    disabled={!dirty || !isValid || isSubmiting}
                                    name="new"
                                    label="ADD ADDRESS"
                                />
                            </div>
                        </Form>
                }
            </Formik>
        </div>
    )

}