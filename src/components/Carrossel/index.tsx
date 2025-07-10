'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Carrossel() {
    return (
        <div className="w-full max-w-screen-md mx-auto h-[300px] relative">
            <Swiper
                spaceBetween={16}
                slidesPerView={1.2}
            >
                <SwiperSlide>
                    <div className="bg-blue-500 h-full flex items-center justify-center">
                        
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-green-500 h-full flex items-center justify-center">Card 2</div>
                </SwiperSlide>
                {/* ... */}
            </Swiper>
        </div>

    );
}
