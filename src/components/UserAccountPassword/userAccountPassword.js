import { Formik, Form, Field, ErrorMessage } from "formik";
import style from './userAccountPassword.module.css';
import SubmitButton from '../SubmitButton/submitButton'
import { updateUserAccountPassword } from "../../services/userAccountService";
import { useNavigate, useParams } from "react-router-dom";
import { popUpAlert } from "../../utils/popUpAlert";
import ValidationFormForUserAccountPasswordUpdate from '../../middleware/validationFormForUserAccountPasswordUpdate';



export default function UserAccountPassword() {
    const { id } = useParams()
    const navigate = useNavigate()

    const initialValues = {
        password: '',
        newPassword: '',
        repeatNew: '',
    }
    const submitData = async (values) => {
        const { password, newPassword, repeatNew } = values
        const passwordUpdated = await updateUserAccountPassword(id, password, newPassword, repeatNew)
        if (passwordUpdated) {
            await popUpAlert('center', 'success', 'Your password has been changed', false, 2000)
            navigate(`/account/${id}`)
        } else {
            popUpAlert('center', 'error', 'There is something wrong...', false, 2000)
        }
    }

    return (
        <div className={style.container}>
            <h2>My password</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={submitData}
                validationSchema={ValidationFormForUserAccountPasswordUpdate}
            >
                {
                    ({ isSubmitting, dirty, isValid }) =>
                        <Form className={style.form}>
                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="Write your actual password"
                                type="password"
                            />
                            <ErrorMessage
                                className={style.error}
                                name='password'
                                component="small"
                            />
                            <label htmlFor="newPassword">New password</label>
                            <Field
                                id="newPassword"
                                name="newPassword"
                                placeholder="Write your new password"
                                type="password"
                            />
                            <ErrorMessage
                                className={style.error}
                                name='newPassword'
                                component="small"
                            />
                            <label htmlFor="repeatNew">Repeat password</label>
                            <Field
                                id="repeat" name="repeatNew"
                                placeholder="Repeat new password"
                                type="password"
                            />
                            <ErrorMessage
                                className={style.error}
                                name='repeatNew'
                                component="small"
                            />

                            <div className={style.button}>
                                <SubmitButton
                                    disabled={!isValid || !dirty || isSubmitting}
                                    label="Update"
                                    name="change"
                                    type="submit"
                                />
                            </div>
                        </Form>
                }
            </Formik>
        </div>

    )
}