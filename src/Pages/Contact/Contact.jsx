import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="flex items-center flex-col my-5">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <h2 className="text-3xl text-black">Contact</h2>
      <div className="flex gap-10 my-10">
        <div
          data-aos="fade-right"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
          className="bg-base-200 p-8 rounded-lg"
        >
          <h2 className="text-2xl mb-5 text-black ">CORPORATE OFFICE</h2>
          <div className="flex flex-col gap-8">
            <p className="flex gap-3 items-start w-[400px]">
              <FaLocationDot className="text-4xl" />
              <small className="ml-4 text-lg cursor-pointer">
                Sheltech Tower, 60 Sheikh Russel Square, West Panthapath,
                Dhaka-1205, Bangladesh
              </small>
            </p>
            <p className="flex gap-5 items-start w-[400px]">
              <MdEmail className="text-3xl" />
              <small className=" text-lg cursor-pointer">
                realestate@gmail.com
              </small>
            </p>
            <p className="flex gap-5 items-start w-[400px]">
              <IoCall className="text-3xl" />
              <small className=" text-lg cursor-pointer">
                1655990 (Sales Enquiry)
              </small>
            </p>
            <p className="flex gap-5 items-start w-[400px]">
              <IoCall className="text-gray-600 text-3xl" />
              <small className=" text-lg cursor-pointer">
                0912 444 333 222 (General Enquiry)
              </small>
            </p>
            <p className="flex gap-5 items-start w-[400px]">
              <IoCall className="text-green-700 text-3xl" />
              <small className=" text-lg cursor-pointer">
                09112 555 66 (Land Enquiry)
              </small>
            </p>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
          className="bg-base-200 w-[500px] p-8 rounded-lg"
        >
          <h2 className="text-2xl mb-5 text-black">CONNECT WITH US</h2>
          <form className="">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="Enter your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Contact Number</span>
              </label>
              <input
                type="number"
                placeholder="Enter your number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                placeholder="Enter your message"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
