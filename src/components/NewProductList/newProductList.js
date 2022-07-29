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
            <figure className={style.figure}>
                {showNewProducts.map(p => {
                    return <>
                        <NewProductImage
                            className={style.product}
                            src={p.api_featured_image}
                            alt={p.name}
                            key={p.id}
                            value={p.id} />
                    </>

                })}
            </figure>
        </div>
    )
}