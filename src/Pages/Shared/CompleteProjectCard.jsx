export default function CompleteProjectCard({ project }) {
  const {
    estate_title,
    image,
    description,
    location,
    price,
    segment_name,
    status,
    area,
  } = project;
  console.log(project);
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {estate_title}
          <div className="badge badge-secondary">{status}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{location}</div>
          <div className="badge badge-outline">{segment_name}</div>
        </div>
      </div>
    </div>
  );
}
