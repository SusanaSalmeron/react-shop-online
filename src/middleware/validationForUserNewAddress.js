import * as yup from 'yup';

export default function ValidationFormForUserNewAddress() {
    let formSchema = yup.object().shape({
        userName: yup.string()
            .required("Required")
            .min(5, 'min 5 characters')
            .max(20, 'max 20 characters'),
        surname: yup.string()
            .required("Required")
            .min(5, 'min 5 characters')
            .max(30, 'max 30 characters'),
        address: yup.string()
            .required("Required")
            .min(5, 'min 10 characters')
            .max(30, 'max 80 characters'),
        postalZip: yup.string()
            .required("Required"),
        city: yup.string()
            .required("Required"),
        country: yup.string()
            .required("required"),
        defaultAddress: yup.boolean()
    })
    return formSchema
}