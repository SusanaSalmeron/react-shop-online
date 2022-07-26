import { useEffect, useState, useContext } from "react";
import { getProductById } from "../../services/productCatalogService";
import { useParams } from "react-router-dom";
import style from './productDescription.module.css';
import Spinner from "../Spinner/spinner";
import SpinnerContext from "../../context/SpinnerContext";


export default function ProductDescription() {
    const [showProduct, setShowProduct] = useState([])
    const [productColors, setProductColors] = useState([])
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const { setSpinnerDisplay } = useContext(SpinnerContext)

    useEffect(() => {
        setShowProduct([])
        setProductColors([])

        getProductById(id)
            .then(response => {
                setShowProduct(response)
                setProductColors(response.product_colors)
                setLoading(false)
            })
        setLoading(true)
        setSpinnerDisplay(false)
    }, [id, setSpinnerDisplay])

    return (
        <div className={style.container}>
            <div className={!loading ? null : style.spinner}>
                <Spinner loading={loading} />
            </div>
            <div className={loading ? style.hide : style.product}>
                <div className={style.data}>
                    <h2>{showProduct.name}</h2>
                    <h4>Brand: {showProduct.brand}</h4>
                    <h4>{showProduct.price} €</h4>
                    <p>{showProduct.description}</p>
                    <h3>Choose your colour:</h3>
                    <div className={style.colours_container}>
                        {productColors.map(p => {
                            return <div
                                style={{ backgroundColor: p.hex_value }} key={`${showProduct.id}${p.colour_name}`} className={style.colours}>
                                <span className={style.tooltip}>{p.colour_name}</span>
                            </div>
                        })}
                    </div>
                    <div className={style.buttons}>
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
        </div>
    )

}