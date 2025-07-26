'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Noticia from '@/components/Noticia';
import { useState } from 'react';
import { Trash2 } from 'lucide-react';
import { deleteNoticia } from '@/services/submissionService';
import { getLoggedUserRole } from '@/services/authService';

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
  const [isTrashVisible, setIsTrashVisible] = useState(false);  

  async function handleDelete(id: string) {
    const resposta = confirm("Tem certeza que deseja excluir essa noticia?");

    if (!resposta) {
      return
    }

    const response = await deleteNoticia(id).catch((error) => {
      console.log(error);
      alert("Somente admins podem excluir notícias");
    });

    if (response instanceof Error) {
      alert(response.message);
      return
    }

    window.location.reload();

  }

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
              flex flex-col
              h-full w-full 
              bg-gray-800 text-gray-50 
              transform transition-transform duration-300 ease-in-out 
              hover:-translate-y-2 hover:scale-102
              shadow-lg
              rounded-lg"
              onMouseEnter={() => setIsTrashVisible(true)}
              onMouseLeave={() => setIsTrashVisible(false)}
            >
              <Noticia title={noticia.title} content={noticia.content} type={noticia.type} />
              <div className="flex justify-end p-4">
                {isTrashVisible && getLoggedUserRole() === "admin" &&
                  <Trash2 size={24}
                    color="#FB2C36"
                    className="cursor-pointer"
                    onClick={() => handleDelete(noticia.id!)}
                  ></Trash2>
                }
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}