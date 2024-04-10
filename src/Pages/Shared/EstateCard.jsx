import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
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

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="card w-96 bg-base-100 shadow-xl border border-silver">
      <figure>
        <img src={image} className="w-96 object-cover h-[200px]" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{estate_title}</h2>
        <p>{description}</p>
        <div className="flex justify-between items-center">
          <Link to={`/estatedetails/${id}`} className="badge badge-outline">
            {button_text}
          </Link>
          <div className="flex gap-2">
            <div className="badge badge-secondary">{segment_name}</div>
            <div className="badge badge-secondary">{status}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
