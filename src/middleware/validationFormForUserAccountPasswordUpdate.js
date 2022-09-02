import * as yup from 'yup';

export default function ValidationFormForUserAccountPasswordUpdate() {
    let formSchema = yup.object().shape({
        password: yup.string()
            .required("Required")
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/, 'Password must contain 8 to 15 characters and at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.'),
        newPassword: yup.string()
            .required("Required")
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/, 'Password must contain 8 to 15 characters and at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.'),
        repeatNew: yup.string()
            .required("Required")
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/, 'Password must contain 8 to 15 characters and at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.'),
    })
    return formSchema
}