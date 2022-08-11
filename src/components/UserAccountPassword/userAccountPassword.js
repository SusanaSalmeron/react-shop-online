import { Formik, Form, Field, ErrorMessage } from "formik";
import style from './userAccountPassword.module.css';
import SubmitButton from '../SubmitButton/submitButton'
import { updateUserAccountPassword } from "../../services/userAccountService";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';



export default function UserAccountPassword() {
    const { id } = useParams()
    const initialValues = {
        password: '',
        newPassword: '',
        repeatNew: '',
    }
    const submitData = async (values) => {
        const { password, newPassword, repeatNew } = values
        const passwordUpdated = await updateUserAccountPassword(id, password, newPassword, repeatNew)
        if (passwordUpdated) {
            await Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your password has been changed',
                showConfirmButton: false,
                timer: 2000
            })
        } else {
            await Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'There is something wrong...',
                showConfirmButton: false,
                timer: 2000
            })
        }
    }

    return (
        <div className={style.container}>
            <h2>My password</h2>
            <Formik
                initialValues={initialValues}
                onSubmit={submitData}
            >
                {
                    ({ isSubmiting, dirty, isValid, errors }) =>
                        <Form className={style.form}>
                            <label htmlFor="password">Password</label>
                            <Field
                                id="password" name="password" placeholder="Write your actual password"
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
                                    label="Update"
                                    name="change"
                                />
                            </div>
                        </Form>
                }

            </Formik>
        </div>

    )
}