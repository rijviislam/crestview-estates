export default function UpdateProfile() {
  // const { user } = useContext(AuthContext);
  // console.log(user);
  // const { displayName, photoURL, email } = user;
  return (
    <div className="flex flex-col gap-3 mt-5 items-center">
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
                  // value={displayName}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  // value={email}
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image Url</span>
                </label>
                <input
                  type="text"
                  placeholder="image url"
                  // value={photoURL}
                  className="input input-bordered"
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
