import style from './makeupProductList.module.css';
import { useContext } from 'react';
import SpinnerContext from '../../context/SpinnerContext';
import MakeupProductCard from '../MakeupProductsCard/makeupProductCard';
import { useEffect, useState } from 'react';
import { getAllProductsFromSearch, getProductsBy } from '../../services/productCatalogService';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/spinner';


export default function MakeupProductsList() {
    const [showProducts, setShowProducts] = useState([])
    const [showSearch, setShowSearch] = useState([])
    const { productType, keyword } = useParams()
    const [loading, setLoading] = useState(true)
    const { setSpinnerDisplay } = useContext(SpinnerContext)


    useEffect(() => {
        if (keyword) {
            setShowSearch([])
            getAllProductsFromSearch(keyword)
                .then(response => {
                    setShowSearch(response)
                    setLoading(false)
                })
        } else {
            setShowProducts([])
            getProductsBy(productType)
                .then(response => {
                    setShowProducts(response)
                    setLoading(false)
                })
        }
        localStorage.setItem('id', '1000')
        setLoading(true)
        setSpinnerDisplay(false)
    }, [productType, keyword, setSpinnerDisplay])

    return (
        <>
            {keyword ? <div className={style.container}>
                <h2 className={style.title}>Search Results for: {keyword}</h2>
                <Spinner loading={loading} />
                <div className={style.products}>
                    {showSearch.map((product, i) => {
                        return <MakeupProductCard
                            productData={product}
                            key={i}
                        />
                    })}
                </div>
            </div> : <div className={style.container}>
                <h1 className={style.title}>{productType}</h1>
                <Spinner loading={loading} />
                <div className={style.products}>
                    {showProducts.map((product, i) => {
                        return <MakeupProductCard
                            productData={product}
                            key={i}
                        />
                    })}
                </div>
            </div>}
        </>
    )
}