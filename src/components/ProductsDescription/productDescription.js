import { useEffect, useState } from "react";
import { getProductById } from "../../services/productCatalogService";
import { useParams } from "react-router-dom";
import style from './productDescription.module.css'



export default function ProductDescription() {
    const [showProduct, setShowProduct] = useState([])
    const [productColors, setProductColors] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProductById(id)
            .then(response => {
                setShowProduct(response)
                setProductColors(response.product_colors)
            })
    }, [id])

    return (
        <div className={style.container}>
            <div className={style.data}>
                <h3>{showProduct.name}</h3>
                <h4>Brand: {showProduct.brand}</h4>
                <h4>{showProduct.price} €</h4>
                <p>{showProduct.description}</p>
                <div className={style.colours_container}>
                    {productColors.map(p => {
                        return <div style={{ backgroundColor: p.hex_value }} key={`${showProduct.id}${p.colour_name}`} className={style.colours}>{p.colour_name}</div>
                    })}
                </div>
                <div>
                    <button>BUY</button>
                    <button>Add to my wishlist</button>
                </div>

            </div>
            <div className={style.image}>
                <figure>
                    <img src={showProduct.api_featured_image} alt={showProduct.name} />
                </figure>
            </div>
        </div>
    )

}