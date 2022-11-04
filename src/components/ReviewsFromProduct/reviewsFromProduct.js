import ReactModal from 'react-modal';
import { useEffect, useState } from "react";
import ReviewFromProductCard from "../ReviewFromProductCard/reviewFromProductCard";
import './reviewsFromProduct.css';
import { getAllReviews } from '../../services/productCatalogService';
import { useParams } from 'react-router-dom';


ReactModal.setAppElement('#root');


export default function ReviewsFromProductModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [reviews, setReviews] = useState([])
    const { id } = useParams()


    const toggleModal = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        getAllReviews(id)
            .then(response => {
                setReviews(response)
            })
    }, [id])

    return (
        <>
            <div>
                <button onClick={toggleModal}>See Reviews</button>
                <ReactModal
                    isOpen={isOpen}
                    onRequestClose={toggleModal}
                    contentLabel="Reviews"
                    className='reviews'
                >
                    <div className="closereviews">
                        <h2>See what people think about</h2>
                        <button onClick={toggleModal}>X</button>
                    </div>
                    {reviews.length > 0 ? reviews.map(r =>
                        <ReviewFromProductCard review={r} />
                    ) : <h2 className='noreview'>No reviews for this product yet</h2>}

                </ReactModal >
            </div >
        </>
    )
}