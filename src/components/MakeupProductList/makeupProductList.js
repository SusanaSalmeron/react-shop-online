import style from './makeupProductList.module.css';
import { useContext } from 'react';
import SpinnerContext from '../../context/SpinnerContext';
import MakeupProductCard from '../MakeupProductsCard/makeupProductCard';
import { useEffect, useState } from 'react';
import { getAllProductsFromSearch, getProductsBy } from '../../services/productCatalogService';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/spinner';
import ReactPaginate from 'react-paginate';


export default function MakeupProductsList() {
    const [showProducts, setShowProducts] = useState([])
    const [showSearch, setShowSearch] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const { productType, keyword } = useParams()
    const [loading, setLoading] = useState(true)
    const { setSpinnerDisplay } = useContext(SpinnerContext)

    const PER_PAGE = 10
    const offset = currentPage * PER_PAGE;
    const currentPageData = showProducts
        .slice(offset, offset + PER_PAGE)
    const pageCount = Math.ceil(showProducts.length / PER_PAGE);


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
            setCurrentPage(0)
            getProductsBy(productType)
                .then(response => {
                    setShowProducts(response)
                    setLoading(false)
                })
        }
        setLoading(true)
        setSpinnerDisplay(false)
    }, [productType, keyword, setSpinnerDisplay])

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

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
                    {currentPageData.map((product, i) => {
                        return <MakeupProductCard
                            productData={product}
                            key={i}
                        />
                    })}
                </div>
                {loading ? null :
                    <ReactPaginate
                        previousLabel={<i className="fa-solid fa-caret-left"></i>}
                        nextLabel={<i class="fa-solid fa-caret-right"></i>}
                        pageCount={pageCount}
                        onPageChange={handlePageClick}
                        containerClassName={style.pagination}
                        previousLinkClassName={style.previous}
                        nextLinkClassName={style.next}
                        disabledClassName={style.disabled}
                        activeClassName={style.active}
                        pageClassName={style.page}
                        breakClassName={style.break}

                    />}
            </div>}
        </>
    )
}