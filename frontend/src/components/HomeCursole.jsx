import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide1 from '../assets/slide/slide1.jpg';
import slide2 from '../assets/slide/slide2.jpg';
import slide3 from '../assets/slide/slide3.jpg';
import slide4 from '../assets/slide/slide4.jpg';
import slide5 from '../assets/slide/slide5.jpg';
import slide6 from '../assets/slide/slide6.jpg';


const slides = [
  {
    src: slide1,
    alt: 'Shekhar Dixit interacting with farmers',
    caption: 'Grassroots Engagement with Farmers',
    position: 'center',
  },
  {
    src: slide2,
    alt: 'Campaign rally led by Rashtriya Kisan Manch',
    caption: 'Nationwide Campaigns for Justice',
    position: 'center',
  },
  {
    src: slide3,
    alt: 'Grassroots volunteers in rural outreach',
    caption: 'Empowering Rural India Together',
    position: 'top',
  },
  {
    src: slide4,
    alt: 'Shekhar Dixit interacting with farmers',
    caption: 'Grassroots Engagement with Farmers',
    position: 'center',
  },
  {
    src: slide5,
    alt: 'Campaign rally led by Rashtriya Kisan Manch',
    caption: 'Nationwide Campaigns for Justice',
    position: 'center',
  },
  {
    src: slide6,
    alt: 'Grassroots volunteers in rural outreach',
    caption: 'Empowering Rural India Together',
    position: 'center',
  },
];

const Carousel = () => {
  return (
    <div className="mx-4 md:mx-10 mb-10">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, Keyboard]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        keyboard={{ enabled: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="rounded-3xl overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative aspect-[16/9] w-full">
              <img
                src={slide.src}
                alt={slide.alt}
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ objectPosition: slide.position || 'center' }}
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-60 text-white text-sm md:text-base px-4 py-2 rounded shadow-lg max-w-[90%]">
                {slide.caption}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
