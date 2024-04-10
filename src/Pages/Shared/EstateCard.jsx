import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function EstateCard({ estate }) {
  const {
    estate_title,
    description,
    button_text,
    facilities,
    location,
    price,
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
        <h2 className="card-title">
          {estate_title}
          <div className="badge badge-secondary">{segment_name}</div>
          <div className="badge badge-secondary">{status}</div>
        </h2>
        <p>{description}</p>
        <div className="flex ">
          <p>{facilities[0]}</p>
          <p>{facilities[1]}</p>
          <p>{facilities[2]}</p>
          <p>{facilities[3]}</p>
        </div>
        <p>{location}</p>
        <p>{price}</p>
        <Link to={`/estatedetails/${id}`} className="badge badge-outline">
          {button_text}
        </Link>
      </div>
    </div>
  );
}
