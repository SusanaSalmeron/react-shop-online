import CarouselShop from "../Carousel/Carousel"
import Info from "../Info/info"
import NewProductsCarousel from '../NewProductsCarousel/newProductsCarousel'
import WhyBuyBanner from "../WhyBuyBanner/whyBuyBanner"
import style from './home.module.css'


export default function Home() {
    return (
        <>
            <div className={style.container}>
                <CarouselShop />
                <NewProductsCarousel />
                <WhyBuyBanner />
                <Info />
            </div>
        </>
    )
}