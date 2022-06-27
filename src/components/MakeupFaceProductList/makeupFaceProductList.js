import style from './makeupFaceProductList.module.css';
import MakeupFaceProductCard from '../MakeupFaceProductsCard/makeupFaceProductCard';
import { useContext, useEffect, useState } from 'react';
import { getProductsBy } from '../../services/productCatalogService';
/* import ProductTypeContext from '../../context/productTyeContext'; */

export default function MakeupFaceProductsList() {
    const [showProducts, setShowProducts] = useState([])
    /* const { productType } = useContext(ProductTypeContext) */

    useEffect(() => {
        getProductsBy()
            .then(response => {
                setShowProducts(response)
            })
    }, [])

    return (
        <div className={style.container}>
            <h1 className={style.title}>Bronzer</h1>
            <div className={style.products}>
                {showProducts.map((product, i) => {
                    return <MakeupFaceProductCard
                        data={product}
                        key={i}
                    />
                })}
            </div>


        </div>

    )
}