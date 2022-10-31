import { Formik, Field, Form } from 'formik';
import style from './signupForm.module.css';


export default function SignupForm({ toggleModal }) {
    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                repeat: ''
            }}
            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
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
                <label htmlFor="repeat">Repeat password</label>
                <Field
                    id="repeat"
                    name="repeat"
                    placeholder="Repeat your password"
                    type="password"
                />
                <button className="submit" type="submit">Signup</button>
            </Form>
        </Formik>
    )
}