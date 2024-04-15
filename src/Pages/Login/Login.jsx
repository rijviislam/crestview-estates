import { useContext, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import SocialLogin from "../../Component/SocialLogin/SocialLogin";

export default function Login() {
  const { loginUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;

    loginUser(email, password)
      .then(() => {
        toast.success("Login Successfully!", {
          position: "top-center",
        });
        reset();
      })
      .catch((error) => {
        toast.error("Can't login please check your email and password!", {
          position: "top-center",
        });
        console.error(error);
      });
  };
  useEffect(() => {
    if (user) {
      navigate(location.state || "/");
    }
  }, [user]);
  return (
    <>
      <Helmet>
        <title>Log in</title>
      </Helmet>
      <div className="w-full flex items-center justify-center">
        <div className="w-full my-10 max-w-md p-8 border-2 border-red-600 space-y-3 rounded-xl bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
          <h1 className="text-2xl font-bold text-center">Login</h1>
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate=""
            action=""
            className="space-y-6"
          >
            <div className="space-y-1 text-sm">
              <label
                htmlFor="email"
                className="block text-gray-400 dark:text-gray-600"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="space-y-1 text-sm">
              <label
                htmlFor="password"
                className="block text-gray-400 dark:text-gray-600"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border-gray-700 dark:border-gray-300 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800 focus:border-violet-400 focus:dark:border-violet-600"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
              <div className="flex justify-end text-xs text-gray-400 dark:text-gray-600">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-gray-900 dark:text-gray-50 bg-violet-400 dark:bg-violet-600">
              Sign in
            </button>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px sm:w-16 bg-gray-700 dark:bg-gray-300"></div>
            <p className="px-3 text-sm text-gray-400 dark:text-gray-600">
              Login with social accounts
            </p>
            <div className="flex-1 items-center justify-center h-px sm:w-16 bg-gray-700 dark:bg-gray-300"></div>
          </div>
          <SocialLogin />

          <label className="label">
            New here?{" "}
            <Link to="/register" className="label-text-alt link link-hover">
              Create an account
            </Link>
          </label>
        </div>
      </div>
    </>
  );
}
