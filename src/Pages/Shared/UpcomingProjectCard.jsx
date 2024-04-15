import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function UpcomingProjectCard({ project }) {
  const {
    id,
    estate_title,
    image,
    description,
    location,
    segment_name,
    status,
    button_text,
  } = project;
  return (
    <div className="card w-[350px] lg:w-96 bg-base-200 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {estate_title}
          <div className="badge badge-secondary">{status}</div>
        </h2>
        <p>{description}</p>
        <div className="flex justify-between mt-3">
          <Link
            to={`/estatedetails/${id}`}
            className="badge px-3 py-5 bg-blue-500 border-none text-white font-medium badge-outline"
          >
            {button_text}
          </Link>
          <div className="card-actions flex-col justify-end">
            <div className="badge badge-outline py-3 px-2 bg-teal-500 border-none text-white text-[10px] lg:text-sm">
              {segment_name}
            </div>
            <div className="badge badge-outline py-3 px-2 bg-teal-500 border-none text-white text-[10px] lg:text-sm">
              {location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
UpcomingProjectCard.propTypes = {
  project: PropTypes.object,
};
