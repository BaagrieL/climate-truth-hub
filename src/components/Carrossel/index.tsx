import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Carrossel() {
  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1.2}  // No mobile mostra um pouco do próximo card
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      <SwiperSlide>
        <div className="bg-blue-500 p-4 rounded text-white">Card 1</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-green-500 p-4 rounded text-white">Card 2</div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="bg-red-500 p-4 rounded text-white">Card 3</div>
      </SwiperSlide>
      {/* ... */}
    </Swiper>
  );
}
