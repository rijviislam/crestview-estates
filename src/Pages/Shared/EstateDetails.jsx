// import { Helmet } from "react-helmet-async";
import { Link, useLoaderData, useParams } from "react-router-dom";

// export default function EstateDetails() {
//   const { id } = useParams();
//   const estate = useLoaderData();
//   const findEstateId = estate.find((estateId) => estateId.id == id);
//   const {
//     estate_title,
//     image,
//     description,
//     facilities,
//     price,
//     location,
//     area,
//     segment_name,
//     status,
//   } = findEstateId;
//   return (
//     <div className="flex flex-col items-center mt-5">
//       <Helmet>
//         <title>{estate_title}</title>
//       </Helmet>
//       <h2 className="text-3xl">Estate Details</h2>
//       <div className="card gap-5 h-[500px] card-side my-10 bg-base-100 shadow-xl border border-silver">
//         <figure>
//           <img className="w-full h-full object-cover" src={image} />
//         </figure>
//         <div className="p-5">
//           <h2 className="text-4xl font-bold">{estate_title}</h2>
//           <p className="w-[500px] my-5">{description}</p>
//           <div className="flex gap-2 mb-5">
//             <strong>Facilities: </strong>
//             <p>{facilities[0]}</p>
//             <p>{facilities[1]}</p>
//             <p>{facilities[2]}</p>
//             <p>{facilities[3]}</p>
//           </div>
//           <div className="flex flex-col space-y-5">
//             <strong className="flex gap-2">Location: {location}</strong>
//             <strong className="flex gap-2">Area: {area}</strong>
//             <strong>Price: {price}</strong>
//           </div>
//           <div className="flex gap-5 mt-5">
//             <button className="btn btn-primary">{segment_name}</button>
//             <button className="btn btn-primary">{status}</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
    <div className="hero min-h-screen bg-base-200 border border-red-700">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={image}
          className="w-[500px] h-[450px]  rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl font-bold">{estate_title}</h1>
          <p className="py-6">{description}</p>
          <p>Facilities: {facilities}</p>
          <p>Location: {location}</p>
          <p>Area: {area}</p>
          <p>{segment_name}</p>
          <p>{status}</p>
          <p>{price}</p>
          <Link to="/" className="btn btn-primary">
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
