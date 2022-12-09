import style from './newMakeupProductList.module.css';
import { useContext } from 'react';
import SpinnerContext from '../../context/SpinnerContext';
import MakeupProductCard from '../MakeupProductsCard/makeupProductCard';
import { useEffect, useState } from 'react';
import { getAllNewProducts } from '../../services/productCatalogService';
import Spinner from '../Spinner/spinner';
import ReactPaginate from 'react-paginate';


export default function NewMakeupProductsList() {
    const [showNewProducts, setShowNewProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const [loading, setLoading] = useState(true)
    const { setSpinnerDisplay } = useContext(SpinnerContext)


    const PER_PAGE = 10
    const offset = currentPage * PER_PAGE;
    const currentPageData = showNewProducts
        .slice(offset, offset + PER_PAGE)
    const pageCount = Math.ceil(showNewProducts.length / PER_PAGE);


    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        setCurrentPage(0)
        getAllNewProducts()
            .then(response => {
                setShowNewProducts(response)
                setLoading(false)
            })
        setLoading(true)
        setSpinnerDisplay(false)
    }, [setSpinnerDisplay])

    function handlePageClick({ selected: selectedPage }) {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })

        setCurrentPage(selectedPage)
    }

    return (
        <>
            <div className={style.container}>
                <h1 className={style.title}>New Products</h1>
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
                        nextLabel={<i className="fa-solid fa-caret-right"></i>}
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
            </div>
        </>
    )
}