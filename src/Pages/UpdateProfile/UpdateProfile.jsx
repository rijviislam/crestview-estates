import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import auth from "../../Firebase/firebase.config";

export default function UpdateProfile() {
  const { user, setUser } = useContext(AuthContext);
  const [updateName, setUpdateName] = useState(user?.displayName || "");
  const [imagUrl, setImageUrl] = useState(user?.photoURL || "");
  const [userEmail, setUserEmail] = useState(user?.email || "");
  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      email: userEmail,
      displayName: updateName,
      photoURL: imagUrl,
    })
      .then(() => {
        setUser({
          ...user,
          email: userEmail,
          displayName: updateName,
          photoURL: imagUrl,
        });
        toast.success("Profile update Successfully!", {
          position: "top-center",
        });
        setUpdateName("");
        setImageUrl("");
        setUserEmail("");
      })
      .catch(() => {
        console.error("error here");
      });
  };

  return (
    <div className="flex flex-col gap-3 pt-5 items-center bg-[#E9E7F7]">
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <h2 className="text-3xl font-bold text-[rgb(41,56,78)]">
        Update your profile!
      </h2>
      <div data-aos="flip-up" className="min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <form className=" w-[350px] lg:w-[500px]  border border-silver rounded-lg  shadow-2xl bg-base-200">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  defaultValue={user.displayName}
                  className="input input-bordered"
                  onChange={(e) => setUpdateName(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  defaultValue={user.photoURL}
                  className="input input-bordered"
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  defaultValue={user.email}
                  className="input input-bordered"
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
              <div className="form-control mt-6 p-0">
                <button onClick={handleUpdate} className="btn btn-neutral">
                  Update
                </button>
              </div>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
