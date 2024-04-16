import "animate.css";
import PropTypes from "prop-types";
import CompleteProjectCard from "./CompleteProjectCard";

export default function CompleteProject({ projects }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold text-[rgb(41,56,78)] text-3xl animate__animated animate__bounce">
        Complete Project
      </h2>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 gap-5 "
      >
        {projects.slice(13, 19).map((project, idx) => (
          <CompleteProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}

CompleteProject.propTypes = {
  projects: PropTypes.array,
};
