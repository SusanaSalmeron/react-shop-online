import { useEffect, useState } from "react";
import { getProductById } from "../../services/productCatalogService";
import { useParams } from "react-router-dom";
import style from './productDescription.module.css'



export default function ProductDescription() {
    const [showProduct, setShowProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProductById(id)
            .then(response => {
                setShowProduct(response)
            })
    }, [id])

    return (
        <div className={style.container}>
            <h3>{showProduct.name}</h3>
            <h4>{showProduct.brand}</h4>



        </div>
    )

}