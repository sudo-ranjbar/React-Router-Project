import { Swiper, SwiperSlide } from 'swiper/react';

// swiper modules
import { Navigation, Pagination } from 'swiper/modules';

// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';


import { countries_img } from './data/countries-img';

import ButtonNav from './ButtonNav';

function SwiperComponent() {


  return (
    <div className='relative my-2 mx-auto z-10'>

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 6,
            spaceBetween: 40
          },

        }}
        // navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper z-10"
      >
        {
          countries_img.map((country, index) => (
            <SwiperSlide>
              <img key={index} src={country.src} alt={country.title} className='select-none' />
              <h5 className='text-white'>{country.title}</h5>
            </SwiperSlide>
          ))
        }
        <ButtonNav />
      </Swiper>

    </div>
  );
}

export default SwiperComponent;

