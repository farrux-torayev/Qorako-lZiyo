"use client";
import Image from "next/image";
import { ConfettiButton } from "@/components/magicui/confetti";
import { useState, useEffect } from "react";

import { BsMoonStars } from "react-icons/bs";
import { PiSunFill } from "react-icons/pi";
import { MdCall } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname();

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
      <div className="dark:bg-gray-900">
        <div className="flex items-center justify-between w-[1440px] m-auto  p-4 bg-white dark:bg-gray-900">
          <div>
            <Link href="/">
              <Image
                src="/Navbar logo.png"
                alt="Logo"
                className="w-[100px] h-[100px] rounded-[50px]"
                width={200}
                height={50}
              />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-[120px]">
            <ul className="flex gap-[20px] items-center">
              <li>
                <a className="text-2xl font-bold hover:underline" href="/">
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
                  <PiPhoneCallFill className="mt-[5px] h-[30px] w-[30px] " />{" "}
                  +998 99 995 44 00
                </a>
              </li>
              {pathname !== "/login" && pathname !== "/register" && (
                <li>
                  <ConfettiButton>
                    <Link href="/login">Kirish</Link>
                  </ConfettiButton>
                </li>
              )}
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
              <li>
                <a href="#"><LanguageSwitcher/></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
