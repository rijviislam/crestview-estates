import { useContext } from "react";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  const navLink = (
    <>
      <li>
        <Link to="/" className="text-[rgb(41,56,78)] font-medium">
          Home
        </Link>
      </li>
      {user && (
        <>
          <li>
            <Link className="text-[rgb(41,56,78)] font-medium" to="/projects">
              Project
            </Link>
          </li>
          <li>
            <Link
              className="text-[rgb(41,56,78)] font-medium"
              to="/updateprofile"
            >
              Update Profile
            </Link>
          </li>
          <li>
            <Link className="text-[rgb(41,56,78)] font-medium" to="/profile">
              Profile
            </Link>
          </li>
        </>
      )}

      <li>
        <Link className="text-[rgb(41,56,78)] font-medium" to="/contact">
          Contact
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar px-5 justify-center bg-[#E9E7F7] border border-b-gray-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link
          to="/"
          className="text-sm md:text-xl  font-bold text-[rgb(41,56,78)] lg:text-2xl"
        >
          Crestview Estates
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex gap-5 items-center justify-center">
            <div className="w-10 h-10  overflow-hidden rounded-full">
              <img
                data-tooltip-id="my-tooltip"
                data-tooltip-content={user?.displayName}
                className="w-full h-full object-cover"
                src={user?.photoURL || "https://i.ibb.co/HGCGmV3/OIP.jpg"}
              />
            </div>
            <button
              onClick={signOutUser}
              className="btn btn-sm text-white bg-red-500 border border-red-500"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm text-white  btn-primary">
              Login
            </button>
          </Link>
        )}
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
}
