import { useLoaderData } from "react-router-dom";
import EstateCard from "../../Pages/Shared/EstateCard";
export default function Estate() {
  const estate = useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-3xl pb-5">Estate</h2>
      <div className="grid grid-cols-1  gap-5 md:grid-cols-3">
        {estate?.slice(1, 7).map((estateItem, idx) => (
          <EstateCard key={idx} estate={estateItem} />
        ))}
      </div>
    </div>
  );
}
