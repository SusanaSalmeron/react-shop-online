import { useEffect } from "react"
import { useState } from "react"
import { getAllNewProducts } from "../../services/productCatalogService";
import style from './newProductList.module.css';
import NewProductImage from "../NewProductImage/newProductImage";


export default function NewProductsList() {
    const [showNewProducts, setShowNewProducts] = useState([])

    useEffect(() => {
        getAllNewProducts()
            .then(response => {
                setShowNewProducts(response)
            })
    }, [])

    return (
        <div className={style.container}>
            <h2>Just Arrived </h2>
            <figure className={style.figure} >
                {showNewProducts.map((product, index) => {
                    return <div key={index}>
                        <NewProductImage
                            className={style.product}
                            src={product.api_featured_image}
                            alt={product.name}
                            value={product.id} />
                    </div>
                })}
            </figure>
        </div>
    )
}