import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

export default function CompleteProjectCard({ project }) {
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
    <div className="card w-96 bg-base-100 shadow-xl">
      {/* <Helmet>
        <title>{estate_title}</title>
      </Helmet> */}
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {estate_title}
          <div className="badge badge-secondary">{status}</div>
        </h2>
        <p>{description}</p>
        <Link
          to={`/estatedetails/${id}`}
          className="badge border border-red-600 badge-outline"
        >
          {button_text}
        </Link>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{location}</div>
          <div className="badge badge-outline">{segment_name}</div>
        </div>
      </div>
    </div>
  );
}
CompleteProjectCard.propTypes = {
  project: PropTypes.object,
};
