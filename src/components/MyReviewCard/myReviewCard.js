import NavigateButton from "../NavigateButton/navigateButton";
import style from './myReviewCard.module.css'


export default function MyReviewCard({ review }) {
    return (
        <div className={style.container}>
            <div className={style.review}>
                <h3>{review.productName}</h3>
                <h4>Rating: {review.rating} <i className="fa-solid fa-star" /></h4>
                <h4>Comments:</h4>
                <p>{review.comment}</p>
            </div>
            <NavigateButton
                id={review.id}
                name="Update"
                route={'/home'}
                label='UPDATE'
                className={style.button}
            />
        </div>


    )
}