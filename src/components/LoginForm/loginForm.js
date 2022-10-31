import style from './loginForm.module.css';
import { Formik, Field, Form } from 'formik'


export default function LoginForm({ submitLogin }) {

    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={submitLogin}
        >
            <Form className={style.loginform}>
                <label htmlFor="email">Email</label>
                <Field id="email" name="email" placeholder="Write your email" />
                <label htmlFor="password">Password</label>
                <Field
                    id="password"
                    name="password"
                    placeholder="Write your password"
                    type="password"
                />
                <button className="submit" type="submit">Login</button>
            </Form>
        </Formik>
    )
}