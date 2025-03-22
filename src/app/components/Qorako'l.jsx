"use client";

import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
const images = [
  "/uzum.svg",
  "/humo.svg",
  "/mastercard.svg",
  "/uzcard.svg",
  "/payme.svg",
  "/visa.svg",
  "/App Store.svg",
  "/uzum.svg",
  "/humo.svg",
  "/mastercard.svg",
  "/uzcard.svg",
  "/payme.svg",
  "/visa.svg",
  "/App Store.svg",
];

export function QorakolZiyo() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="relative flex w-full flex-col   items-center justify-center overflow-hidden leading-[100px]">
      <h1 className="text-4xl text-center font-[800] pb-[10px]">
        Bizning hamkorlarimiz
      </h1>
      <div className="relative flex w-full overflow-hidden dark:bg-black py-5">
        <motion.div
          className="flex w-max space-x-5 items-center cursor-pointer"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          whileHover={{ x: isHovered ? "0%" : undefined }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...Array(1)].map((_, index) => (
            <div key={index} className="flex space-x-5 items-center">
              {images.map((src, i) => (
                <div className="border  w-[250px] h-[125px] flex  bg-white justify-center ">
                  <Image
                    key={i}
                    src={src}
                    alt={`Image ${i}`}
                    width={100}
                    height={100}
                    priority
                    unoptimized
                    className="w-[200px] p-5"
                  />
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
      <div className="relative flex w-full overflow-hidden dark:bg-black py-5">
        <motion.div
          className="flex w-max space-x-5 items-center cursor-pointer "
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          whileHover={{ x: isHovered ? "0%" : undefined }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex space-x-5 items-center">
              {images.map((src, i) => (
                <div className="border  w-[250px] h-[125px] flex bg-white  justify-center ">
                  <Image
                    key={i}
                    src={src}
                    alt={`Image ${i}`}
                    width={100}
                    height={100}
                    priority
                    unoptimized
                    className="w-[200px] p-5"
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
