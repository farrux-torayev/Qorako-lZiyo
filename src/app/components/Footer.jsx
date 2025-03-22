import { ConfettiButton } from "@/components/magicui/confetti";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaRss } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="dark:bg-gray-900  ">
      <div className=" flex justify-between  p-10 pb-0 w-[1440px] m-auto">
        <div>
          <Image src="/logo.png" alt="Logo" width={300} height={300} />
          <h2 className="text-3xl font-bold mt-[50px]  pb-[15px]">
            Biz ijtimoiy tarmoqlarda
          </h2>
          <ul className="flex gap-[15px]">
            <li className=" text-[#006BFF] hover:text-amber-700">
              <a href="https://www.facebook.com/profile.php?id=61550274025821&ref=ig_profile_ac">
                <FaFacebook className="w-[50px] h-[70px]" />{" "}
              </a>
            </li>
            <li className="text-black hover:text-amber-700  ">
              <a href="https://t.me/qorakolziyo?fbclid=PAZXh0bgNhZW0CMTEAAaY3Xvay7ruXQlhSlYft9phK2y8qJv0B23hpAu73iFFnm_YYvzsC8FRCqEU_aem_Y4HAuoq87O7mtk49qoOtlA">
                <FaTelegram className="w-[50px] h-[70px]" />{" "}
              </a>
            </li>
            <li className="text-[#b25013]  hover:text-amber-700">
              <a href="https://www.instagram.com/qorakolziyo/?fbclid=IwY2xjawJKqqlleHRuA2FlbQIxMAABHakB6pwmT19UDzbLH9BV5S4xaayOO5ywG9JkkuVgU4ICNTL6G6akvGagZA_aem_w4L2iLomkMo_gcLlpJFhZA">
                <FaInstagram className="w-[50px] h-[70px]" />{" "}
              </a>
            </li>
            <li className=" text-[#28218d]  hover:text-amber-700">
              <a href="https://www.youtube.com/@qorakolziyooquvmarkazi1029">
                <FaYoutube className="w-[70px] h-[70px]" />{" "}
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-[20px] mt-[50px]">
          <ul className="items-center flex flex-col gap-y-[20px] ">
            <li>
              <a className="text-2xl font-bold" href="">
                Bosh Sahifa
              </a>
            </li>
            <li>
              <a className="text-2xl font-bold" href="">
                Kurslar
              </a>
            </li>
            <li>
              <a className="text-2xl font-bold" href="">
                Biz haqimizda
              </a>
            </li>
          </ul>
          <ul className=" items-center flex flex-col gap-y-[20px]">
            <li>
              <a className="text-2xl font-bold" href="">
                {" "}
                +998 99 995 44 00
              </a>
            </li>
            <li className="h-[100px]">
              <ConfettiButton className="dark:text-white dark:hover:text-black  bg-[#28218d] h-[45px]">
                <a className="text-2xl font-bold " href="">
                  Ro'yxatdan o'tish
                </a>
              </ConfettiButton>
            </li>
          </ul>
        </div>
        <div className="mt-[50px]">
          <div className="px-[15px] w-[400px] ">
            <h1 className="text-2xl font-bold mb-[10px]">To'lov turlari</h1>
            <ul className="grid grid-cols-2 gap-[17px] cursor-pointer ">
              <li className="w-[170px] h-[50px] bg-[#f2f2f7] rounded-[10px]  flex  justify-around items-center">
                <a>
                  <img className="" src="/uzum.svg" alt="" />
                </a>
              </li>
              <li className="w-[170px] h-[50px]  bg-[#f2f2f7] rounded-[10px] flex  justify-around items-center">
                <a className={"flex items-center"}>
                  <img src="/payme.svg" alt="" />
                </a>
              </li>
              <li className="w-[170px] h-[50px]  bg-[#f2f2f7] rounded-[10px] flex  justify-around items-center">
                <a className={"flex items-center"}>
                  <img src="/visa.svg" alt="" />
                </a>
              </li>
              <li className="w-[170px] h-[50px]  bg-[#f2f2f7] rounded-[10px] flex  justify-around items-center">
                <a className={"flex items-center"}>
                  <img src="/mastercard.svg" alt="" />
                </a>
              </li>
              <li className=" w-[170px] h-[50px]  bg-[#f2f2f7] rounded-[10px] flex  justify-around items-center">
                <a className={"flex items-center"}>
                  <img src="/humo.svg" alt="" />
                </a>
              </li>
              <li className="w-[170px] h-[50px]  bg-[#f2f2f7] rounded-[10px] flex  justify-around items-center">
                <a className={"flex items-center"}>
                  <img src="/uzcard.svg" alt="" />
                </a>
              </li>
            </ul>
          </div>
          <h1 className="text-2xl font-bold ml-[15px] mt-[20px]">
            Yuklab olish mumkin
          </h1>
          <ul className="flex gap-[25px] mx-[15px] h-[70px] my-[10px]">
            <li className=" text-[#64748b] hover:text-[#006BFF]">
              <a href="">
                <Image
                  className="h-[60px]"
                  src="/App Store.svg"
                  alt="alt"
                  width={170}
                  height={200}
                />
              </a>
            </li>
            <li className=" text-[#64748b] hover:text-[#006BFF]">
              <a href="">
                <Image
                  className="h-[60px]"
                  src="/Google Play.svg"
                  alt="alt"
                  width={170}
                  height={200}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-black" />
      <h1 className="text-[18px] font-bold my-[20px] ml-[80px]">Copyright © 2012 Qorako'lZiyo. All Rights Reserved.</h1>
    </div>
  );
};

export default Footer;
