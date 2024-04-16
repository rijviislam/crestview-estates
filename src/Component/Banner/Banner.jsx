import Slider from "../../Pages/Shared/Slider";

export default function Banner() {
  return (
    <div
      className="hero  min-h-screen"
      style={{ backgroundImage: "url(https://i.ibb.co/m9MwPbz/A-3.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="w-full h-full  flex flex-col items-center">
        <div className="lg:w-[650px] text-center py-2 lg:py-5">
          <h2 className="animate__animated animate__bounce lg:text-5xl md:text-5xl text-2xl text-white">
            Crestview Estates
          </h2>
          <p className="lg:text-2xl  text-white mt-1 lg:mt-3">
            Crestview Estates Elevated Living, Panoramic Views, Serene
            Atmosphere
          </p>
        </div>
      </div>
      <Slider />
    </div>
  );
}
