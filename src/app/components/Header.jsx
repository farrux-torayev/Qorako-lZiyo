import { BoxReveal } from "@/components/magicui/box-reveal";
import { ConfettiButton } from "@/components/magicui/confetti";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";

const Header = () => {
  return (
    <div className="flex justify-between w-[1440px] m-auto">
      <div className="w-[700px]  m-auto items-center justify-center overflow-hidden pt-8">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className=" font-semibold w-[700px]">
            <TypingAnimation className="text-[70px] ">
              Matematika bu
            </TypingAnimation>
            <span className="text-amber-600 text-6xl font-bold ml-[60px]">
              Mantiqiy fikrlash{" "}
              <span className="ml-[150px]">va muammolarni</span>
            </span>
          </div>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-[.5rem] ">
            <span className="text-amber-600 text-6xl font-bold ml-[228px]">
              hal qilish san’ati!
            </span>
          </h2>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-6 font-bold ml-[50px]">
            <p className="text-[20px] font-bold">
              -&gt;O'zbekistondagi katta abituriyentlar markazi. <br />
              <span className=" text-[#28218d]"> -&gt; Aniq va </span>
              <span className=" text-[#28218d]">ijtimoiy fanlar</span>
              <br />
              <span className=" text-[#28218d]">
                -&gt; DTM eng yuqori ballar
              </span>
              <br />
              -&gt;+998 (78) 555-85-55 <br />
            </p>
          </div>
        </BoxReveal>

        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <ConfettiButton className="mt-[1.6rem] dark:text-white dark:hover:text-black  bg-[#28218d] ml-[50px] h-[45px]">
            Ro'yxatdan o'tish uchun
          </ConfettiButton>
        </BoxReveal>
      </div>
      <div className="relative">
        <Iphone15Pro
          className="w-[500px] h-[500px] mt-[50px]"
          src="/image copy 8.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;

<div>
  <h1>Matematika bu </h1>
  <p>Mantiqiy fikrlash va muammolarni hal qilish san’ati!</p>
</div>;
