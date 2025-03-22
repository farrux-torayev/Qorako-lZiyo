"use client";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const images = [
  "/image copy 12.png",
  "/image copy 13.png",
  "/image copy 14.png",
  "/image copy 15.png",
  "/image copy 16.png",
];

const Natijalar = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <h1 className="text-4xl text-center font-[800] pb-[10px]">Bizning talabalarimiz</h1>
      <p className="text-2xl text-center font-[700]  pb-[10px]">
        Bizning talabalarimizning natijalarini bilan tanishib chiqing va
        motivatsiya oling
      </p>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden dark:bg-black">
        <div className="relative flex w-full overflow-hidden  py-5">
          <motion.div
            className="flex w-max space-x-5 items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            whileHover={{ x: isHovered ? "0%" : undefined }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex space-x-5 items-center">
                {images.map((src, i) => (
                  <div className="border  w-[500px] h-[500px] flex  justify-center ">
                    <Image
                      key={i}
                      src={src}
                      alt={`Image ${i}`}
                      width={500}
                      height={500}
                      priority
                      unoptimized
                      className="w-[500px] p-5"
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div> */}
        {/* <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div> */}
      </div>
    </>
  );
};

export default Natijalar;
