import "animate.css";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Profile() {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex flex-col items-center justify-center pt-10 pb-5 bg-[#E9E7F7]">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-[rgb(41,56,78)] animate__animated animate__bounce">
        Profile Information
      </h2>

      <div
        data-aos="flip-down"
        className="card w-[350px] lg:w-96 md:w-96 mt-5 bg-base-200 shadow-xl"
      >
        <figure className="px-10 pt-10">
          <img
            src={user?.photoURL || "https://i.ibb.co/HGCGmV3/OIP.jpg"}
            className="rounded-full w-[200px] h-[200px]"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user?.displayName || "unknown user"}</h2>
          <p>{user?.email || "mail not found"}</p>
          <div className="card-actions">
            <Link
              to="/updateprofile"
              className="btn btn-primary bg-[rgb(41,56,78)]"
            >
              Update Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
