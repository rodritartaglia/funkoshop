import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card from './Card';
import newFunkos from "../../data/funkos.json"


function Carrousel({condition, condition2}) {

  const newFunkosData = newFunkos.filter(newFunko => newFunko[condition] == condition2)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(newFunkosData.length, 3),
    slidesToScroll: 3,
    autoplay: true,
    nextArrow: <img src="../../multimedia/NextArrow.svg" alt="" />,
    prevArrow: <img src="../../multimedia/PrevArrow.svg" alt="" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay: false
        }
      }
    ]
  };

  return (
    <div className='my-14 w-[95%] mx-auto'>
      <Slider {...settings}>
        {newFunkosData.map(newFunko => (
          <Card key={newFunko.id} funko={newFunko}/>
        ))}
      </Slider>
    </div>
  )
}

export default Carrousel