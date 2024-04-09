import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Navbar() {
  const { user, signOutUser } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100">
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a>Update Profile</a>
            </li>
            <li>
              <a>About us</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          Real Estate
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a>Update Profile</a>
          </li>
          <li>
            <a>About us</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className=" ">
            <label
              tabIndex={0}
              className="avatar  flex items-center justify-between w-[170px] h-[50px]"
            >
              <div className="w-10 rounded-full">
                <img
                  className="w-full h-full object-contain"
                  src={user?.photoURL || "https://i.ibb.co/HGCGmV3/OIP.jpg"}
                />
              </div>
              <button
                onClick={signOutUser}
                className="btn btn-sm border border-red-600 btn-ghost"
              >
                Logout
              </button>
            </label>
          </div>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm  btn-ghost">Login</button>
          </Link>
        )}
      </div>
    </div>
  );
}
