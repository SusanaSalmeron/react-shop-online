import { Field, ErrorMessage } from 'formik';
import style from './userAccountUpdateAddressInput.module.css'


export default function UserAccountUpdateAddressInput({ id, name }) {
    return (
        <>
            <label htmlFor="user_name">Name</label>
            <Field
                id={id}
                name={name}
            />
            <ErrorMessage
                className={style.error}
                name='user_name'
                component="small"
            />
        </>
    )

}