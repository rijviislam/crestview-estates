import { useRef } from "react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import image5 from "../../assets/apartment3.jfif";
import image1 from "../../assets/apartments.jfif";
import image2 from "../../assets/apartments2.jfif";
import image6 from "../../assets/student-house-2.jfif";
import image3 from "../../assets/student-house.jfif";
import image4 from "../../assets/townhouses.jfif";

export default function Slider() {
  const swiperRefLocal = useRef();

  const handleMouseEnter = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.stop();
  };
  const handleMouseLeave = () => {
    swiperRefLocal?.current?.swiper?.autoplay?.start();
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="absolute lg:top-[18.3rem] top-[14.3rem] lg:left-[11rem] w-3/4  overflow-hidden "
    >
      <div className=" lg:mb-5 mb-2 flex gap-2 flex-col items-start justify-start h-full w-full ">
        <h3 className="text-base text-white">
          WE MAKE THE ORDINARY...EXTRAORDINARY !
        </h3>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        ref={swiperRefLocal}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        autoplay={{ delay: 800 }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" w-[315px] h-[250px] lg:h-[350px] cursor-pointer">
            <img src={image4} alt="" />
            <div className="backdrop-sepia bg-white/60 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>The Elliott Bay View</strong>
              <p className="w-full">Beacon Hill, Seattle, Washington </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" w-[315px] h-[250px] lg:h-[350px] cursor-pointer">
            <img src={image1} alt="" />
            <div className="backdrop-sepia bg-white/60 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>The Lofts at Wrightwood</strong>
              <p className="w-full">Andersonville, Chicago, Illinois </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" backdrop-sepia w-[315px] h-[250px] lg:h-[350px] cursor-pointer">
            <img src={image2} alt="" />
            <div className=" backdrop-sepia bg-white/60 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>The Kōan on South Congress</strong>
              <p className="w-full">The Lofts at Wrightwood</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" backdrop-sepia bg-white/60 w-[315px] h-[250px] lg:h-[350px] cursor-pointer">
            <img src={image3} alt="" />
            <div className=" backdrop-sepia bg-white/60 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>The Cady Heron</strong>
              <p className="w-full">Georgetown, Washington D.C.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" backdrop-sepia bg-white/60 w-[315px] h-[250px] lg:h-[350px] cursor-pointer">
            <img src={image5} alt="" />
            <div className="backdrop-sepia bg-white/60 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>The Pacific Tides</strong>
              <p className="w-full">Venice Beach, Los Angeles, California </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" backdrop-sepia bg-white/60 w-[315px] h-[250px] lg:h-[350px] cursor-pointer">
            <img src={image6} className="" alt="" />
            <div className=" backdrop-sepia bg-white/60 p-2 absolute w-[315px] h-[100px] z-10 bottom-0">
              <strong>The Washington Mews</strong>
              <p className="w-full">
                Greenwich Village, New York City, New York
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
