import style from './loginForm.module.css';
import { Formik, Field, Form } from 'formik'


export default function LoginForm({ toggleModal }) {
    return (
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
                toggleModal()
            }}
        >
            <Form className={style.loginform}>
                <label htmlFor="Email">Email</label>
                <Field id="Email" name="Email" placeholder="Write your email" />
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