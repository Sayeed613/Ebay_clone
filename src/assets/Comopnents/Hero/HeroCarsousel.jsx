import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function CarouselComponent() {
  return (
    <div className="mx-w-[1200px] max-auto mt-8">
      <Carousel showArrows={true} autoPlay={true} interval={3000} infiniteLoop={true} showThumbs={false}>
        <div>
          <img src="../images/banner/banner-1.jpeg" alt="" />
        </div>
        <div>
          <img src="../images/banner/banner-2.jpg" alt="" />
        </div>
        <div>
          <img src="../images/banner/banner-3.jpeg" alt="" />
        </div>
      </Carousel>
    </div>
  )
}