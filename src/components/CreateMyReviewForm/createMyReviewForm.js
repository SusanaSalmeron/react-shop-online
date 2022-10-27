import style from './createMyReviewForm.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import SubmitButton from '../SubmitButton/submitButton';
import { addUserReview } from '../../services/userAccountService'
import { useNavigate, useParams } from 'react-router-dom';
import { popUpAlert } from '../../utils/popUpAlert';
import { useEffect, useState } from 'react';
import { getProductById } from '../../services/productCatalogService';
import ValidationFormForReviews from '../../middleware/validationFormForReviews';


export default function CreateMyReviewForm() {
    const userId = 1000
    const [product, setProduct] = useState({})
    const { productId } = useParams()
    const navigate = useNavigate()

    const submitForm = async (values) => {
        const { rating, comment } = values
        const reviewIsCreated = await addUserReview(productId, product.name, userId, rating, comment)
        if (reviewIsCreated) {
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
                    rating: 0,
                    comment: '',
                }}
                onSubmit={submitForm}
                validationSchema={ValidationFormForReviews}
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
                            <ErrorMessage
                                className={style.error}
                                name='rating'
                                component="small"
                            />
                            <label htmlFor="comment">Comment:</label>
                            <Field
                                id="comment"
                                name="comment"
                                as="textarea"
                                placeholder="Write your review"
                            />
                            <ErrorMessage
                                className={style.error}
                                name='comment'
                                component="small"
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