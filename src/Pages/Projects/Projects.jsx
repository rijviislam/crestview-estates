import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import CompleteProject from "../Shared/CompleteProject";
import UpcomingProject from "../Shared/UpcomingProject";

export default function Projects() {
  const projects = useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center bg-[#E9E7F7]">
      <Helmet>
        <title>Project</title>
      </Helmet>
      <UpcomingProject projects={projects} />
      <CompleteProject projects={projects} />
    </div>
  );
}
