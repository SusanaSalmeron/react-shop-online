import CarouselShop from "../Carousel/Carousel"
import Info from "../Info/info"
import NewProductList from "../NewProductList/newProductList"
import WhyBuyBanner from "../WhyBuyBanner/whyBuyBanner"
import style from './home.module.css'

export default function Home() {
    return (
        <div className={style.container}>
            <CarouselShop />
            <NewProductList />
            <WhyBuyBanner />
            <Info />
        </div>
    )
}