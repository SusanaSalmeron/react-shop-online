import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/productCatalogService";
import CreateMyReviewForm from "../CreateMyReviewForm/createMyReviewForm";
import style from './createMyReview.module.css'


export default function CreateMyReview() {
    const [product, setProduct] = useState({})
    const { productId } = useParams()

    useEffect(() => {
        getProductById(productId)
            .then(response => {
                setProduct(response)
            })
    }, [productId])
    return (
        <div className={style.container}>
            <h2>Write your review about:</h2>
            <h3> <i className="fa-solid fa-splotch">
            </i> {product.brand} - {product.name}</h3>
            <CreateMyReviewForm />
        </div>
    )
}