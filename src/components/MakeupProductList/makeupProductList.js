import style from './makeupProductList.module.css';
import MakeupProductCard from '../MakeupProductsCard/makeupProductCard';
import { /* useContext,*/ useEffect, useState } from 'react';
import { getProductsBy } from '../../services/productCatalogService';
/* import TypeContext from '../../context/typeContext'; */
import { useParams } from 'react-router-dom';


export default function MakeupFaceProductsList() {
    const [showProducts, setShowProducts] = useState([])
    /* const { type } = useContext(TypeContext) */
    const { productType } = useParams()

    useEffect(() => {
        getProductsBy(productType)
            .then(response => {
                setShowProducts(response)
            })
    }, [productType])

    return (
        <div className={style.container}>
            <h1 className={style.title}>{productType}</h1>
            <div className={style.products}>
                {showProducts.map((product, i) => {
                    return <MakeupProductCard
                        data={product}
                        key={i}
                    />
                })}
            </div>
        </div>
    )
}