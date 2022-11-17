import { Formik, Form, Field, ErrorMessage } from 'formik';
import SubmitButton from '../SubmitButton/submitButton';
import { getReviewBy, updateUserReview } from '../../services/userAccountService'
import { useNavigate, useParams } from 'react-router-dom';
import { popUpAlert } from '../../utils/popUpAlert';
import { useEffect, useState } from 'react';
import style from './updateMyReviewForm.module.css';
import ValidationFormForReviews from '../../middleware/validationFormForReviews';


export default function UpdateMyReviewForm() {
    const [review, setReview] = useState({})
    const initialValues = {
        rating: review ? review.rating : "",
        comment: review ? review.comment : ""
    }
    const userId = localStorage.getItem('id')

    const { reviewId } = useParams()
    const navigate = useNavigate()

    const submitForm = async (values) => {
        const { rating, comment } = values
        const reviewIsUpdated = await updateUserReview(userId, reviewId, review.productId, rating, comment)
        if (reviewIsUpdated) {
            await popUpAlert("center", "success", "Review created successfully", false, 2000)
            navigate(-1)
        } else {
            popUpAlert("center", "error", "Review not created", false, 2000)
        }
    }

    useEffect(() => {
        getReviewBy(userId, reviewId)
            .then(response => {
                setReview(response)
            })
    }, [reviewId, userId])

    return (
        <div className={style.form}>
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
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
                            >
                                <option value="0">0</option>
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
                                    name="update"
                                    label="UPDATE"
                                />
                            </div>
                        </Form>
                }
            </Formik>
        </div>
    )
}