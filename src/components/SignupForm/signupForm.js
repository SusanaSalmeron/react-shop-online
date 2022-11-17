import { Formik, Field, Form } from 'formik';
import { userSignup } from '../../services/userAccountService';
import { popUpAlert } from '../../utils/popUpAlert';
import style from './signupForm.module.css';


export default function SignupForm({ toggleModal }) {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                repeatPassword: ''
            }}
            onSubmit={async (values) => {
                const { email, password, repeatPassword } = values
                const signupResponse = await userSignup(email, password, repeatPassword)
                if (signupResponse.status === 201) {
                    await popUpAlert('center', 'success', 'You are now registered', false, 2000)
                } else if (signupResponse.status === 400) {
                    await popUpAlert('center', 'error', signupResponse.message, false, 2000)
                } else {
                    await popUpAlert('center', 'error', 'Unexpected error, try later', false, 2000)
                }
                toggleModal()
            }}
        >
            <Form className={style.signupform}>
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="Write your email" />
                <label htmlFor="password">Password</label>
                <Field
                    id="password"
                    name="password"
                    placeholder="Write your password"
                    type="password"
                />
                <label htmlFor="repeatPassword">Repeat password</label>
                <Field
                    id="repeatPassword"
                    name="repeatPassword"
                    placeholder="Repeat your password"
                    type="password"
                />
                <button className="submit" type="submit">Signup</button>
            </Form>
        </Formik>
    )
}