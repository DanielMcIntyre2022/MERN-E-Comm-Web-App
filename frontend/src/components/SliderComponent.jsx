import { sliderItems } from '../data';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function SliderComponent() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"
      };

    return (
    <div className='slider-wrapper w-100% max-sm:hidden'>
        <div className='slider-container mt-10'>
                <Slider {...settings}>
                {sliderItems.map(item=> (
                <div className={`slider-one ${item.bg}`}>
                    <div className='slider-content-container flex'>
                      <div className='img-container h-full ml-20'>
                          <img className="h-[80vh]" src={item.img} alt="falljacket"></img>
                      </div>
                  <div className='info-container'>
                      <h1 className='text-7xl'>{item.title}</h1>
                      <p className='text-lg mt-10 mb-10 font-medium tracking-wide'>{item.description}</p>
                      <button className='p-5 text-xl bg-transparent border-4'>Shop now</button>
                </div>
            </div>
        </div>
                ))}
            </Slider>
        </div>
    </div>
    )
}

export default SliderComponent;