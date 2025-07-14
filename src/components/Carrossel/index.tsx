'use client'

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Noticia from '@/components/Noticia';
import { fetchNoticias } from '@/services/submissionService';

type NoticiaType = {
  title: string;
  content: string;
};

export default function Carrossel() {
  const [noticias, setNoticias] = useState<NoticiaType[]>([]);

  useEffect(() => {
    async function carregarNoticias() {
      try {
        const resultado = await fetchNoticias();
        setNoticias(resultado);
      } catch (erro) {
        console.error('Erro ao carregar notícias:', erro);
      }
    }

    carregarNoticias();
  }, []);

  return (
    <div className="w-full max-w-screen-md h-[15rem] relative">
      <Swiper
        spaceBetween={16}
        slidesPerView={1.2}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3.2 },
        }}
        className='h-full w-full'
      >
        {noticias.map((noticia, index) => (
          <SwiperSlide key={index} className="bg-transparent border border-gray-500 rounded-lg py-8">
              <Noticia title={noticia.title} content={noticia.content} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
