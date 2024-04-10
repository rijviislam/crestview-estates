import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import image5 from "../../assets/apartment3.jfif";
import image1 from "../../assets/apartments.jfif";
import image2 from "../../assets/apartments2.jfif";
import image6 from "../../assets/student-house-2.jfif";
import image3 from "../../assets/student-house.jfif";
import image4 from "../../assets/townhouses.jfif";

export default function Slider() {
  return (
    <div className=" absolute top-[15rem] left-[11rem] w-3/4 border-white overflow-hidden">
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="bg-red-500 w-[315px] h-[350px]">
            <img src={image4} alt="" />
            <div className=" bg-gray-600 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>MAX TOWER</strong>
              <p className="w-full">ROAD NO #28 WARI DHAKA BANGLADESH</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-purple-500 w-[315px] h-[350px]">
            <img src={image1} alt="" />
            <div className=" bg-gray-600 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>MAX TOWER</strong>
              <p className="w-full">ROAD NO #28 WARI DHAKA BANGLADESH</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-yellow-500 w-[315px] h-[350px]">
            <img src={image2} alt="" />
            <div className=" bg-gray-600 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>MAX TOWER</strong>
              <p className="w-full">ROAD NO #28 WARI DHAKA BANGLADESH</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-fuchsia-950 w-[315px] h-[350px]">
            <img src={image3} alt="" />
            <div className=" bg-gray-600 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>MAX TOWER</strong>
              <p className="w-full">ROAD NO #28 WARI DHAKA BANGLADESH</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-500 w-[315px] h-[350px]">
            <img src={image4} alt="" />
            <div className=" bg-gray-600 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>MAX TOWER</strong>
              <p className="w-full">ROAD NO #28 WARI DHAKA BANGLADESH</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-500 w-[315px] h-[350px]">
            <img src={image5} alt="" />
            <div className=" bg-gray-600 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>MAX TOWER</strong>
              <p className="w-full">ROAD NO #28 WARI DHAKA BANGLADESH</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-500 w-[315px] h-[350px]">
            <img src={image6} className="" alt="" />
            <div className=" bg-gray-600 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>MAX TOWER</strong>
              <p className="w-full">ROAD NO #28 WARI DHAKA BANGLADESH</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
