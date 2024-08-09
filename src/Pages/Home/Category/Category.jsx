import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <section>
           <Swiper
        slidesPerView={4}
        spaceBetween={55}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={slide1} alt="" /><h2 className='text-4xl text-center -mt-12 text-white'>SALAD</h2></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="" /><h2 className='text-4xl text-center -mt-12 text-white'>PIZZA</h2></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="" /><h2 className='text-4xl text-center -mt-12 text-white'>SOUP</h2></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="" /><h2 className='text-4xl text-center -mt-12 text-white'>DESSERTS</h2></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="" /><h2 className='text-4xl text-center -mt-12 text-white'>SALADS</h2></SwiperSlide>
      </Swiper> 
        </section>
    );
};

export default Category;