import { Formik, Form, Field } from 'formik';
import SubmitButton from '../SubmitButton/submitButton';
import { addUserReview } from '../../services/userAccountService'
import { useNavigate, useParams } from 'react-router-dom';
import { popUpAlert } from '../../utils/popUpAlert';
import { useEffect, useState } from 'react';
import { getProductById } from '../../services/productCatalogService';
import style from './updateMyReviewForm.module.css';


export default function UpdateMyReviewForm() {
    const [product, setProduct] = useState({})

    const { productId } = useParams()
    const navigate = useNavigate()

    const submitForm = async (values) => {
        const { rating, comment } = values
        const reviewIsUpdated = true
        if (reviewIsUpdated) {
            await popUpAlert("center", "success", "Review created successfully", false, 2000)
            navigate(-1)
        } else {
            popUpAlert("center", "error", "Review not created", false, 2000)
        }
    }

    useEffect(() => {
        getProductById(productId)
            .then(response => {
                setProduct(response)
            })
    }, [productId])

    return (
        <div className={style.form}>

            <Formik
                initialValues={{
                    rating: "",
                    comment: ""
                }}
                onSubmit={submitForm}
            >
                {
                    ({
                        isSubmiting, dirty, isValid
                    }) =>
                        <Form>
                            <label htmlFor="rating">Choose your rating:</label>
                            <Field
                                id="rating"
                                name="rating"
                                as="select"
                                placeholder="Choose"
                            >
                                <option value="0" >0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Field>
                            <label htmlFor="comment">Comment:</label>
                            <Field
                                id="comment"
                                name="comment"
                                as="textarea"
                                placeholder="Write your review"
                            />
                            <div className={style.button}>
                                <SubmitButton
                                    disabled={!dirty || !isValid || isSubmiting}
                                    name="Send"
                                    label="SEND REVIEW"
                                />
                            </div>
                        </Form>
                }
            </Formik>
        </div>
    )
}