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
    <div className="absolute lg:top-[18.2rem] top-[14rem] lg:left-[11rem] w-3/4  overflow-hidden ">
      <div className="lg:mb-5 mb-2 flex gap-2 flex-col items-start justify-start h-full w-full ">
        <h3 className="text-xl text-white">
          WE MAKE THE ORDINARY...EXTRAORDINARY !
        </h3>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[315px] h-[250px] lg:h-[350px]">
            <img src={image4} alt="" />
            <div className="backdrop-sepia bg-white/60 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>MAX TOWER</strong>
              <p className="w-full">ROAD NO #28 WARI DHAKA BANGLADESH</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[315px] h-[250px] lg:h-[350px]">
            <img src={image1} alt="" />
            <div className="backdrop-sepia bg-white/60 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>MAX TOWER</strong>
              <p className="w-full">ROAD NO #28 WARI DHAKA BANGLADESH</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="backdrop-sepia bg-white/60 w-[315px] h-[250px] lg:h-[350px]">
            <img src={image2} alt="" />
            <div className=" backdrop-sepia bg-white/60 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>MAX TOWER</strong>
              <p className="w-full">ROAD NO #28 WARI DHAKA BANGLADESH</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="backdrop-sepia bg-white/60 w-[315px] h-[250px] lg:h-[350px]">
            <img src={image3} alt="" />
            <div className=" backdrop-sepia bg-white/60 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>MAX TOWER</strong>
              <p className="w-full">ROAD NO #28 WARI DHAKA BANGLADESH</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="backdrop-sepia bg-white/60 w-[315px] h-[250px] lg:h-[350px]">
            <img src={image4} alt="" />
            <div className="backdrop-sepia bg-white/60 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>MAX TOWER</strong>
              <p className="w-full">ROAD NO #28 WARI DHAKA BANGLADESH</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="backdrop-sepia bg-white/60 w-[315px] h-[250px] lg:h-[350px]">
            <img src={image5} alt="" />
            <div className="backdrop-sepia bg-white/60 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>MAX TOWER</strong>
              <p className="w-full">ROAD NO #28 WARI DHAKA BANGLADESH</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="backdrop-sepia bg-white/60 w-[315px] h-[250px] lg:h-[350px]">
            <img src={image6} className="" alt="" />
            <div className=" backdrop-sepia bg-white/60 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>MAX TOWER</strong>
              <p className="w-full">ROAD NO #28 WARI DHAKA BANGLADESH</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
