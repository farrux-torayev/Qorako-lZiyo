import Image from "next/image";
import SwiperComponent from "./components/Swiper";
import Navbar from "./components/Navbar";
import { QorakolZiyo } from "./components/Qorako'l";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Rasmlar } from "./components/Rasmlar";
import Kurslar from "./components/Kurslar";
import Natijalar from "./components/Natijalar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <SwiperComponent />
      <Kurslar />
      <Rasmlar />
      <QorakolZiyo />
      <Natijalar />
      <Footer />
    </>
  );
}
