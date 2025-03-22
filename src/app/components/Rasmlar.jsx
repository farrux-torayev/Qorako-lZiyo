"use client";

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
const images = [
  "/image copy 01.png",
  "/image copy 02.png",
  "/image copy 03.png",
  "/image copy 04.png",
  "/image copy 05.png",
  "/image copy 06.png",
  "/image copy 07.png",
  "/image copy 09.png",
];

export function Rasmlar() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden dark:bg-black">
      <h1 className="text-4xl text-center font-[800] pb-[10px]">Matematika fanining daholari</h1>
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
  );
}
