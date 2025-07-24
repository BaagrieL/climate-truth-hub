'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Noticia from '@/components/Noticia';

type NoticiaType = {
  title: string;
  content: string;
  type: string;
  id?: string;
};

interface CarrosselProps {
  noticias: NoticiaType[];
}

export default function Carrossel({ noticias }: CarrosselProps) {
  return (
    <div className="w-full max-w-screen-xl h-[24rem] relative">
      <Swiper
        spaceBetween={20}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
        className='h-full w-full'
      >
        {noticias.map((noticia) => (
          <SwiperSlide key={noticia.id} className="bg-transparent py-4">
            <div className="
              h-full w-full 
              bg-gray-800 text-gray-50 
              transform transition-transform duration-300 ease-in-out 
              hover:-translate-y-2 hover:scale-102
              shadow-lg
              rounded-lg
            ">
              <Noticia title={noticia.title} content={noticia.content} type={noticia.type}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}