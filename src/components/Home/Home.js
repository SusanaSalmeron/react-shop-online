import CarouselShop from "../Carousel/Carousel"
import NewProductList from "../NewProductList/newProductList"
import style from './home.module.css'

export default function Home() {
    return (
        <div className={style.container}>
            <CarouselShop />
            <NewProductList />
        </div>
    )
}