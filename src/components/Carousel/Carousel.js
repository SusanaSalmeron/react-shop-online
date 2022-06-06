import './carousel.css';
import { Carousel } from "react-responsive-carousel";

export default function CarouselShop() {
    return (
        <Carousel autoPlay={true} infiniteLoop={true} centerMode={true} centerSlidePercentage={70} showThumbs={false} >
            <div>
                <img src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?cs=srgb&dl=pexels-fauxels-3183132.jpg&fm=jpg" alt="Image1" />
            </div>
            <div>
                <img src="https://images.pexels.com/photos/4669986/pexels-photo-4669986.jpeg?cs=srgb&dl=pexels-cats-coming-4669986.jpg&fm=jpg" alt="Image2" />
            </div>
            <div>
                <img src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?cs=srgb&dl=pexels-tracy-le-blanc-607812.jpg&fm=jpg" alt="Image3" />
            </div>
        </Carousel>

    )
}