import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function UpdateProfile() {
  const { user, updateUserProfile } = useContext(AuthContext);
  // const [name, setName] = useState("");
  // console.log(user);
  const { displayName, photoURL } = user;
  console.log(displayName, photoURL);
  // const { register, handleSubmit, reset } = useForm();
  const handleUpdate = (e) => {
    e.preventDefault();
    updateUserProfile(displayName, photoURL);
  };

  // const onSubmit = (data) => {
  //   const { email, password, fullName, imageurl } = data;
  //   createUser(email, password)
  //     .then(() => {
  //       toast.success("Register Successfully!", {
  //         position: "top-center",
  //       });
  //       updateProfile(user, {
  //         displayName: fullName,
  //         photoURL: imageurl,
  //       });
  //       reset();
  //     })
  //     .catch(() => {
  //       toast.error("Can't Register!", {
  //         position: "top-center",
  //       });
  //     });
  // };

  // const handleChange = (e) => {
  //   console.log(e.target.value);
  // };

  // const handleChange = (e) => {
  //   // setName(e.target.value);
  //   e.preventDefault();
  //   updateUserProfile(displayName, email, photoURL)
  //     .then((res) => {
  //       console.log(res.user);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  return (
    <div className="flex flex-col gap-3 mt-5 items-center">
      <Helmet>
        <title>Update Profile</title>
      </Helmet>
      <h2 className="text-3xl text-black">Update your profile!</h2>
      <div className="min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <form
            onSubmit={() => handleUpdate}
            className=" w-[500px] rounded-sm  shadow-2xl bg-base-100"
          >
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  defaultValue={displayName}
                  className="input input-bordered"
                  // {...register("fullName", { required: true })}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  defaultValue={photoURL}
                  className="input input-bordered"
                  // {...register("imageurl", { required: true })}
                />
              </div>
              <div className="form-control mt-6 p-0">
                <button className="btn btn-neutral">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
