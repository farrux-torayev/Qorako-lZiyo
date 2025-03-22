"use client";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const images = [
  "/image copy 7.png",
  "/image copy 6.png",
  "/image copy 5.png",
  "/image copy 4.png",
  "/image copy 3.png",
  "/image copy 9.png",
  "/image copy 7.png",
  "/image copy 6.png",
  "/image copy 5.png",
  "/image copy 4.png",
  "/image copy 3.png",
  "/image copy 9.png",
];

const Kurslar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <VelocityScroll>Qorako'lZiyo</VelocityScroll>
      <h1 className="text-4xl text-center font-[800] pt-[20px]">
        Bizning kurslarimiz haqida qisqacha
      </h1>
      <div className="relative flex w-full  overflow-hidden   dark:bg-black">
        <motion.div
          className="flex w-max space-x-5 h-[600px] items-center cursor-pointer"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          whileHover={{ x: isHovered ? "0%" : undefined }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...Array(1)].map((_, index) => (
            <div key={index} className="flex space-x-5 items-center">
              {images.map((src, i) => (
                <div className="w-[300px] h-[800px] flex  justify-center pt-[-20px] ">
                  <Iphone15Pro
                    key={i}
                    src={src}
                    alt={`Image ${i}`}
                    width={500}
                    height={700}
                    priority
                    unoptimized
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Kurslar;
