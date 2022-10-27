import * as yup from 'yup'

export default function ValidationFormForReviews() {
    let formSchema = yup.object().shape({
        rating: yup.number()
            .required('Required'),
        comment: yup.string()
            .required('This field is required')
            .min(50, 'You must write min 50 characters')
    })
    return formSchema
}