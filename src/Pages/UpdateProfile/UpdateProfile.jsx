import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import auth from "../../Firebase/firebase.config";

export default function UpdateProfile() {
  const { user, setUser } = useContext(AuthContext);
  const [updateName, setUpdateName] = useState(user?.displayName || "");
  const [imagUrl, setImageUrl] = useState(user?.photoURL || "");
  console.log(updateName, imagUrl);
  const handleUpdate = (e) => {
    e.preventDefault();
    updateProfile(auth.currentUser, {
      displayName: updateName,
      photoURL: imagUrl,
    })
      .then(() => {
        setUser({ ...user, displayName: updateName, photoURL: imagUrl });
        setUpdateName("");
        setImageUrl("");
      })
      .catch(() => {
        console.error("error here");
      });
  };

  return (
    <div className="flex flex-col gap-3 mt-5 items-center">
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <h2 className="text-3xl text-black">Update your profile!</h2>
      <div className="min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <form className=" w-[500px] rounded-sm  shadow-2xl bg-base-100">
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
              <div className="form-control mt-6 p-0">
                <button onClick={handleUpdate} className="btn btn-neutral">
                  Update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
