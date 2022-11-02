import * as yup from 'yup';

export default function ValidationFormForUserAccountData() {
    let formSchema = yup.object().shape({
        userName: yup.string()
            .required("Required")
            .min(5, 'min 5 characters')
            .max(20, 'max 20 characters'),
        surname: yup.string()
            .required("Required")
            .min(5, 'min 5 characters')
            .max(30, 'max 30 characters'),
        identification: yup.string()
            .required("Required"),
        dateOfBirth: yup.string()
            .required("Required")
            .matches(/^(?: (?: 31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/, 'The date of birth must be DD/MM/YYYY'),
        email: yup.string()
            .required("Required")
            .email('Email not valid'),
        phone: yup.string()
            .required("Required")
            .matches(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/, 'Please, use numbers and a valid format, e.g: +31636363634 '),
    })
    return formSchema
}