import { useEffect, useState } from "react"
import { getAllNewProducts } from "../../services/productCatalogService";
import { useNavigate } from "react-router-dom";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import style from './newProductList.module.css'

export default function NewProductsList() {
    const [showNewProducts, setShowNewProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllNewProducts()
            .then(response => {
                setShowNewProducts(response)
            })
    }, [])

    const clickImage = (e) => {
        const id = e.target.parentNode.id
        navigate(`/product/${showNewProducts[id].id}`)
    }


    return (
        <div className={style.container}>
            <h2>New In</h2>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={109}
                totalSlides={showNewProducts.length}
                visibleSlides={4}
                step={3}
                infinite={true}

            >
                <Slider>
                    {showNewProducts.map((p, i) =>
                        <Slide
                            index={i}
                            onBlur={true}
                            className={style.img}
                            onClick={clickImage}
                            id={i}
                        >
                            <img
                                src={p.api_featured_image}
                                alt={p.name} />
                            <p>{p.brand}</p>
                            <p> {p.name}</p>
                            <p>{p.price}€</p>
                            <button>ADD TO CART</button>
                        </Slide>)}
                </Slider>
                <div className={style.dot}>
                    <DotGroup showAsSelectedForCurrentSlideOnly={true}
                    />
                </div>
                <div className={style.buttons}>
                    <ButtonBack><i className="fa-solid fa-circle-chevron-left"></i>
                    </ButtonBack>
                    <ButtonNext> <i className="fa-solid fa-circle-chevron-right" /> </ButtonNext>
                </div>
            </CarouselProvider>
        </div>
    )
}