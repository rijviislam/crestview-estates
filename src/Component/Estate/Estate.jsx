import { useLoaderData } from "react-router-dom";
import EstateCard from "../../Pages/Shared/EstateCard";
export default function Estate() {
  const estate = useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-[#E9E7F7]">
      <h2 className="text-3xl font-bold text-[rgb(41,56,78)] pb-5">Estate</h2>
      <div className="grid sm:grid-cols-1  gap-5 md:grid-cols-2 lg:grid-cols-3">
        {estate?.slice(0, 6).map((estateItem, idx) => (
          <EstateCard key={idx} estate={estateItem} />
        ))}
      </div>
    </div>
  );
}
