import style from './myReviewCard.module.css';


export default function MyReviewCard({ review }) {
    return (
        <div>
            <div className={style.review}>
                <h1>{review.productName}</h1>
                <h3>Rating: {review.rating} <i className="fa-solid fa-star" /></h3>
                <h4>Comments:</h4>
                <p>{review.comment}</p>
            </div>
        </div>


    )
}