import { Link, useLoaderData, useParams } from "react-router-dom";

export default function EstateDetails() {
  const { id } = useParams();
  const estate = useLoaderData();
  const findEstateId = estate.find((estateId) => estateId.id == id);
  const {
    estate_title,
    image,
    description,
    facilities,
    price,
    location,
    area,
    segment_name,
    status,
  } = findEstateId;
  return (
    <div className="hero min-h-screen bg-base-200  ">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="w-[500px] h-[450px]  rounded-lg shadow-2xl"
        />
        <div className=" w-[300px] lg:w-[500px] md:w-[500px] space-y-2 ">
          <h1 className="text-3xl font-bold">{estate_title}</h1>
          <p className="py-6 text-base font-medium">{description}</p>
          <div className="flex gap-2">
            <strong>Facilities:</strong>
            {facilities.map((item, idx) => (
              <p className="font-medium " key={idx}>
                {" "}
                {item}{" "}
              </p>
            ))}
          </div>
          <div className="flex gap-2">
            <strong>Location:</strong>
            <p className="font-medium">{location}</p>
          </div>
          <div className="flex gap-2">
            <strong>Area:</strong>
            <p className="font-medium">{area}</p>
          </div>
          <div className="flex gap-2">
            {" "}
            <strong>Segment:</strong>
            <p className="font-medium">{segment_name}</p>
          </div>
          <div className="flex gap-2">
            <strong>Status:</strong>
            <p className="font-medium">{status}</p>
          </div>
          <div className="flex gap-2">
            {" "}
            <strong>Price:</strong>
            <p className="font-medium">{price}</p>
          </div>
          <Link
            to="/"
            className="p-2 btn text-white bg-blue-500 hover:bg-blue-700 rounded-xl"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
