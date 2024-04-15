import { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function Register() {
  const { createUser, updateUserProfile, setReload } = useContext(AuthContext);
  const [regErr, setRegErr] = useState("");
  // const [passErr, setPassErr] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const { email, password, image, fullName } = data;

    setRegErr("");
    // setPassErr("");
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      toast.error("Write a strong password!", {
        position: "top-center",
      });
      return;
    }

    createUser(email, password)
      .then(() => {
        toast.success("Register Successfully!", {
          position: "top-center",
        });
        updateUserProfile(fullName, image).then(() => {
          setReload(true);
          reset();
        });
      })
      .catch((error) => {
        setRegErr(error.message);
        if (regErr) {
          toast.error(`Can't Register with this email!`, {
            position: "top-center",
          });
          return;
        }
      });
  };
  console.log(regErr);
  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="w-full flex items-center justify-center bg-[#E9E7F7]">
        <div className="w-full my-10 max-w-md p-8 border-2 border-silver-500 space-y-3 rounded-xl bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
          <h1 className="text-2xl font-bold text-center">Register</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-6"
          >
            <div className="space-y-1 text-sm">
              <label htmlFor="fullname" className="block dark:text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("fullName", { required: true })}
              />
              {errors.fullName && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block dark:text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="imageurl" className="block dark:text-gray-600">
                Image Url
              </label>
              <input
                type="imageurl"
                name="imageurl"
                id="imageurl"
                placeholder="Image Url"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("image", { required: true })}
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <button className="block w-full p-3 text-center rounded-md dark:text-gray-50 btn btn-primary">
              Register
            </button>
            <label className="label">
              Have an account?{" "}
              <Link to="/login" className="label-text-alt link link-hover">
                Please Login
              </Link>
            </label>
          </form>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}
