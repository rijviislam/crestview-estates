import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const { email, displayName, photoURL } = user;
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <h2 className="text-3xl text-black">Profile Information</h2>

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photoURL} className="rounded-full w-[200px] h-[200px]" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{displayName}</h2>
          <p>{email}</p>
          <div className="card-actions">
            <Link to="/updateprofile" className="btn btn-primary">
              Update Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
