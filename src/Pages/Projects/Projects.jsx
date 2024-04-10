import { useLoaderData } from "react-router-dom";
import CompleteProject from "../Shared/CompleteProject";
import UpcomingProject from "../Shared/UpcomingProject";

export default function Projects() {
  const projects = useLoaderData();
  return (
    <div className="flex flex-col items-center justify-center">
      <UpcomingProject projects={projects} />
      <CompleteProject projects={projects} />
    </div>
  );
}
