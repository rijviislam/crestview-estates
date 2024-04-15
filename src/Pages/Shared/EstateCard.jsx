import "aos/dist/aos.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function EstateCard({ estate }) {
  const {
    estate_title,
    description,
    button_text,
    segment_name,
    status,
    image,
    id,
  } = estate;

  return (
    <div
      data-aos="fade-up"
      className="card mx-3 lg:w-96
       bg-base-200 shadow-xl border border-silver"
    >
      <figure>
        <img src={image} className="w-96 object-cover h-[200px]" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <p>{description}</p>
        <div className="flex justify-between mt-3">
          <Link
            to={`/estatedetails/${id}`}
            className="badge px-3 py-5 bg-blue-500 border-none text-white font-medium badge-outline"
          >
            {button_text}
          </Link>
          <div className="flex gap-2 flex-col">
            <div className="badge py-3 px-2 badge-secondary">
              {segment_name}
            </div>
            <div className="badge py-3 px-2 badge-secondary">{status}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

EstateCard.propTypes = {
  estate: PropTypes.object,
};
