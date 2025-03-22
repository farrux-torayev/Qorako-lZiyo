"use client";
import Image from "next/image";
import { ConfettiButton } from "@/components/magicui/confetti";
import { useState, useEffect } from "react";

import { BsMoonStars } from "react-icons/bs";
import { PiSunFill } from "react-icons/pi";
import { MdCall } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("theme") === "dark";
    setDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");

    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <div className="dark:bg-gray-900" >
        <div className="flex items-center justify-between w-[1440px] m-auto  p-4 bg-white dark:bg-gray-900">
          <div>
            <Image
              src="/Navbar logo.png"
              alt="Logo"
              className="w-[100px] h-[100px] rounded-[50px]"
              width={200}
              height={50}
            />
          </div>
          <ul className="flex gap-[20px] items-center">
            <li>
              <a className="text-2xl font-bold hover:underline  " href="">
                Bosh Sahifa
              </a>
            </li>
            <li>
              <a className="text-2xl font-bold  hover:underline" href="">
                Kurslar
              </a>
            </li>
            <li>
              <a className="text-2xl font-bold  hover:underline" href="">
                Biz haqimizda
              </a>
            </li>
          </ul>
          <ul className="flex gap-[20px] items-center">
            <li>
              <a
                className="flex items-center hover:underline  text-2xl font-bold"
                href="tel:+998999954400"
              >
                {" "}
                <PiPhoneCallFill className="mt-[5px] h-[30px] w-[30px] " /> +998
                99 995 44 00
              </a>
            </li>
            <li>
              <ConfettiButton>
                <a href="#">Kirish</a>
              </ConfettiButton>
            </li>
            <li>
              <button
                onClick={toggleDarkMode}
                className="flex items-center  gap-2 px-4 py-2  text-white  dark:text-black rounded-lg"
              >
                {darkMode ? (
                  <>
                    <PiSunFill className="text-yellow-500 w-[30px] h-[30px] " />
                  </>
                ) : (
                  <>
                    <BsMoonStars className=" text-gray-800 w-[30px] h-[30px] " />
                  </>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
