import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserReviews } from '../../services/userAccountService';
import MyPendingProductsForReview from '../MyPendingProductsForReview/myPendingProductsForReview';
import MyReviewCard from '../MyReviewCard/myReviewCard';
import NavigateButton from '../NavigateButton/navigateButton';
import Spinner from '../Spinner/spinner';
import './myReviewsList.css';


export default function MyReviewsList() {
    const [reviews, setReviews] = useState([])
    const [pending, setPending] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const [activeIndex, setActiveIndex] = useState(1);
    const handleClick = (index) => setActiveIndex(index);
    const checkActive = (index, className) => activeIndex === index ? className : "";


    useEffect(() => {
        getUserReviews(id)
            .then(response => {
                setReviews(response.created)
                setPending(response.pending)
                setLoading(false)
            })
    }, [id])

    return (
        <>
            <div className={loading ? null : 'spinner'}>
                <Spinner loading={loading} />
                {loading ? null :
                    <>
                        <div className="tabs">
                            <button
                                className={`tab ${checkActive(1, "active")}`}
                                onClick={() => handleClick(1)}
                            >
                                <i className="fa-solid fa-magnifying-glass"
                                    name="review"></i>
                            </button>
                            <button
                                className={`tab ${checkActive(2, "active")}`}
                                onClick={() => handleClick(2)}
                            >
                                <i className="fa-solid fa-pen-to-square"></i>
                            </button>

                        </div>
                        <div className="panels">
                            <div className={`panel ${checkActive(1, "active")}`}>
                                {reviews.length > 0 ?
                                    reviews.map((r, i) => {
                                        return <div className='review' key={r.id} >
                                            <MyReviewCard review={r} />
                                            <NavigateButton
                                                id={i}
                                                name="Update"
                                                route={`/products/${r.productId}/reviews/${r.id}`}
                                                label='UPDATE'
                                                className='button'
                                            />
                                        </div>

                                    })
                                    : <h3 className='message'>You don't have any review yet</h3>}

                            </div>
                            <div className={`panel ${checkActive(2, "active")}`}>
                                <h2>Please, write a review: </h2>
                                {pending.length >= 1 ? pending.map(p => {
                                    return <div key={p.productId}>
                                        <MyPendingProductsForReview product={p} />
                                    </div>
                                }) : <h3 className='message'>You don't have any product to review</h3>}

                            </div>
                        </div>
                    </>}
            </div>
        </>
    )
}