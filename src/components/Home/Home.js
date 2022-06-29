import CarouselShop from "../Carousel/Carousel"
import style from './home.module.css'

export default function Home() {
    return (
        <div className={style.container}>
            <CarouselShop />
        </div>
    )
}