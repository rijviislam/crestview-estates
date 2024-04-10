import Slider from "../../Pages/Shared/Slider";

export default function Banner() {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: "url(https://i.ibb.co/m9MwPbz/A-3.jpg)" }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="px-[11rem] flex gap-2 flex-col items-start justify-start h-full w-full pt-[5rem]">
        <h2 className="text-3xl text-white ">Our Recent Project</h2>
        <p className=" text-white">APARTMENT | STUDENT HOUSING | TWONHOUSES</p>
      </div>
      <Slider />
    </div>
  );
}
