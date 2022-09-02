import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getUserData, updateUserAccountData } from "../../services/userAccountService";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import ValidationFormForUserAccountData from "../../middleware/validationFormForUserAccountData";
import style from './userAccountData.module.css'
import SubmitButton from "../SubmitButton/submitButton";
import { popUpAlert } from '../../utils/popUpAlert'

export default function UserAccountData() {
    const { id } = useParams()
    const [showData, setShowData] = useState({})
    const navigate = useNavigate()

    const initialValues = {
        user_name: showData.user_name,
        surname: showData.surname,
        identification: showData.identification,
        date_of_birth: showData.date_of_birth,
        email: showData.email,
        phone: showData.phone
    }

    const submitData = async (values) => {
        const { user_name, surname, identification, date_of_birth, email, phone } = values
        const dataUpdated = await updateUserAccountData(id, user_name, surname, identification, date_of_birth, email, phone)
        if (dataUpdated) {
            await popUpAlert('center', 'success', 'Your data has beeen updated', false, 2000)
            navigate(`/account/${id}`)
        } else {
            popUpAlert('center', 'error', 'There is something wrong...', false, 2000)
        }
    }

    useEffect(() => {
        getUserData(id)
            .then(response =>
                setShowData(response)
            )
    }, [id])

    return (
        <div className={style.container}>
            <h2>My Data</h2>
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                onSubmit={submitData}
                validationSchema={ValidationFormForUserAccountData}
            >
                {
                    ({ isSubmitting, dirty, isValid, errors, status, values }) =>
                        <Form className={style.form}>
                            <label htmlFor="user_name">Name</label>
                            <Field
                                id="user_name"
                                name="user_name"
                                placeholder="Write your name"
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
                                placeholder="Write your surname"
                            />
                            <ErrorMessage
                                className={style.error}
                                name='surname'
                                component="small"
                            />

                            <label htmlFor="identification">ID</label>
                            <Field
                                id="identification"
                                name="identification"
                                placeholder="Write your id" />
                            <ErrorMessage
                                className={style.error}
                                name='identification'
                                component="small"
                            />

                            <label htmlFor="date_of_birth">Date of Birth</label>
                            <Field
                                id="date_of_birth"
                                name="date_of_birth"
                                placeholder={showData.date_of_birth} />
                            <ErrorMessage
                                className={style.error}
                                name='date_of_birth'
                                component="small"
                            />

                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                name="email"
                                placeholder="Write your email"
                                type="email"
                            />
                            <ErrorMessage
                                className={style.error}
                                name='email'
                                component="small"
                            />

                            <label htmlFor="phone">Phone number</label>
                            <Field id="phone" name="phone" placeholder="Write your phone number" />
                            <ErrorMessage
                                className={style.error}
                                name='phone'
                                component="small"
                            />
                            <div className={style.button}>
                                <SubmitButton
                                    disabled={!isValid || !dirty || isSubmitting}
                                    name='update'
                                    label="UPDATE"
                                />
                            </div>
                        </Form>
                }
            </Formik>
        </div>
    )
}