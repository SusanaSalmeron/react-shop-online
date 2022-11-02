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
    const [showData, setShowData] = useState({
        userName: "",
        surname: "",
        identification: "",
        dateOfBirth: "",
        email: "",
        phone: ""
    })
    const navigate = useNavigate()

    const submitData = async (values) => {
        const { userName, surname, identification, dateOfBirth, email, phone } = values
        const dataUpdated = await updateUserAccountData(id, userName, surname, identification, dateOfBirth, email, phone)
        if (dataUpdated) {
            await popUpAlert('center', 'success', 'Your data has beeen updated', false, 2000)
            console.log("LKKKKK")
            console.log(navigate)
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
                initialValues={showData}
                onSubmit={submitData}
                validationSchema={ValidationFormForUserAccountData}
            >
                {
                    ({ isSubmitting, dirty, isValid, errors, status, values }) =>
                        <Form className={style.form}>
                            <label htmlFor="userName">Name</label>
                            <Field
                                id="userName"
                                name="userName"
                                placeholder="Write your name"
                            />
                            <ErrorMessage
                                className={style.error}
                                name='userName'
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

                            <label htmlFor="dateOfBirth">Date of Birth</label>
                            <Field
                                id="dateOfBirth"
                                name="dateOfBirth"
                                placeholder="Ex: 01/01/2000" />
                            <ErrorMessage
                                className={style.error}
                                name='dateOfBirth'
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
                                    type="submit"
                                />
                            </div>
                        </Form>
                }
            </Formik>
        </div>
    )
}