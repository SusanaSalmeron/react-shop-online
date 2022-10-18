import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserReviews } from '../../services/userAccountService';
import MyPendingProductsForReview from '../MyPendingProductsForReview/myPendingProductsForReview';
import MyReviewCard from '../MyReviewCard/myReviewCard';
import Spinner from '../Spinner/spinner';
import './myReviewsList.css'


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
                                MY REVIEWS
                            </button>
                            <button
                                className={`tab ${checkActive(2, "active")}`}
                                onClick={() => handleClick(2)}
                            >
                                PENDING REVIEWS
                            </button>

                        </div>
                        <div className="panels">
                            <div className={`panel ${checkActive(1, "active")}`}>
                                {reviews.map(r => {
                                    return <div className='review' key={r.id}>
                                        <MyReviewCard review={r} />
                                    </div>

                                })}
                            </div>
                            <div className={`panel ${checkActive(2, "active")}`}>
                                {pending.map(p => {
                                    return <div key={p.id}>
                                        <MyPendingProductsForReview product={p} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </>}
            </div>
        </>
    )
}