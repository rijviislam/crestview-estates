import "animate.css";
import PropTypes from "prop-types";
import UpcomingProjectCard from "./UpcomingProjectCard";

export default function UpcomingProject({ projects }) {
  return (
    <div className="flex flex-col items-center my-10">
      <h2 className="text-sm md:text-xl font-bold text-[rgb(41,56,78)] lg:text-3xl animate__animated animate__bounce">
        Upcoming Project
      </h2>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 gap-5 my-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {projects.slice(7, 13).map((project, idx) => (
          <UpcomingProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}
UpcomingProject.propTypes = {
  projects: PropTypes.object,
};
