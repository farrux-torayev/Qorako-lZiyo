"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const SwiperComponent = () => {
  return (
    <>
      <div className="my-[50px]">
        <div>
          <h2 className="capitalize text-3xl text-center font-bold py-[30px]">
            dunyo tanigan buyuk allomalarimizni matematikaga qo'shgan hissasi
          </h2>
        </div>
        <Swiper
          className=""
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          //   navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
        >
          <SwiperSlide>
            <Image
              src="/Buyuk Ajdodlarimiz.png"
              alt="Buyuk Ajdodlarimiz"
              className="w-[600px] m-auto"
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Al Xorazmiy.png"
              alt="Al Xorazmiy 1"
              className="w-[600px] m-auto"
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Ahmad Al Farg'oniy.png"
              alt="Ahmad Al Farg'oniy 2"
              className="w-[600px] m-auto"
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Imom Al Buxoriy.png"
              alt="Imom Al Buxoriy 3"
              className="w-[600px] m-auto"
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Abu Rayhon Beruniy.png"
              alt="Abu Rayhon Beruniy 4"
              className="w-[600px] m-auto"
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Abu Ali Ibn Sino.png"
              alt="Abu Ali Ibn Sino 5"
              className="w-[600px] m-auto"
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Amir Temur.png"
              alt="Amir Temur 6"
              className="w-[600px] m-auto"
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Alisher Navoiy.png"
              alt="Alisher Navoiy 7"
              className="w-[600px] m-auto"
              width={500}
              height={500}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/Zaxiriddin Muhammad Bobur.png"
              alt="Zaxiriddin Muhammad Bobur 8"
              className="w-[600px] m-auto"
              width={500}
              height={500}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperComponent;
