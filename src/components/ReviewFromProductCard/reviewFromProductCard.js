import style from './reviewFromProductCard.module.css'

export default function ReviewFromProductCard({ review }) {
    return (
        <>
            <div className={style.review}>
                {console.log(review)}
                <h3>By: {review.userName} {review.surname} </h3>
                <h3>{review.rating} <i className="fa-solid fa-star" /></h3>
                <p>{review.comment}</p>
            </div>
        </>
    )
}