import './carousel.css';
import { Carousel } from "react-responsive-carousel";
import useMedia from '../../hooks/useMedia'

export default function CarouselShop() {
    const isDesktop = useMedia('(min-width: 577px)')

    return (
        <div className={'container'}>
            {isDesktop ? <Carousel autoPlay={true} infiniteLoop={true} centerMode={true} centerSlidePercentage={65} showThumbs={false}>
                <div >
                    <img src="https://images.pexels.com/photos/7691166/pexels-photo-7691166.jpeg?cs=srgb&dl=pexels-roman-odintsov-7691166.jpg&fm=jpg" alt="Image1" />
                </div >
                <div>
                    <img src="https://images.pexels.com/photos/208052/pexels-photo-208052.jpeg?cs=srgb&dl=pexels-kinkate-208052.jpg&fm=jpg" alt="Image2" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1961792.jpg&fm=jpg" alt="Image3" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/2720447/pexels-photo-2720447.jpeg?cs=srgb&dl=pexels-ray-piedra-2720447.jpg&fm=jpg" alt="image4" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/3735627/pexels-photo-3735627.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-3735627.jpg&fm=jpg" alt="image5" />
                </div>
            </Carousel > : <Carousel autoPlay={true} infiniteLoop={true}
                showThumbs={false}>
                <div >
                    <img src="https://images.pexels.com/photos/7691166/pexels-photo-7691166.jpeg?cs=srgb&dl=pexels-roman-odintsov-7691166.jpg&fm=jpg" alt="Image1" />
                </div >
                <div>
                    <img src="https://images.pexels.com/photos/208052/pexels-photo-208052.jpeg?cs=srgb&dl=pexels-kinkate-208052.jpg&fm=jpg" alt="Image2" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?cs=srgb&dl=pexels-valeria-boltneva-1961792.jpg&fm=jpg" alt="Image3" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/2720447/pexels-photo-2720447.jpeg?cs=srgb&dl=pexels-ray-piedra-2720447.jpg&fm=jpg" alt="image4" />
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/3735627/pexels-photo-3735627.jpeg?cs=srgb&dl=pexels-polina-tankilevitch-3735627.jpg&fm=jpg" alt="image5" />
                </div>
            </Carousel >}
        </div>
    )
}