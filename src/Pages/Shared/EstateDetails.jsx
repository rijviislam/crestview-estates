import { useLoaderData, useParams } from "react-router-dom";
export default function EstateDetails() {
  const { id } = useParams();
  const estate = useLoaderData();
  const findEstateId = estate.find((estateId) => estateId.id == id);
  const { estate_title } = findEstateId;
  //   console.log(findEstateId);
  //   console.log(estate, id);
  return (
    <div>
      <h2 className="text-3xl">EstateDetails</h2>
      <p>{estate_title}</p>
    </div>
  );
}
