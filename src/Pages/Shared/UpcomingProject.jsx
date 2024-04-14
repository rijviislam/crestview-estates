import UpcomingProjectCard from "./UpcomingProjectCard";

export default function UpcomingProject({ projects }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl">Upcoming Project</h2>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 gap-5 my-10 md:grid-cols-3"
      >
        {projects.slice(7, 13).map((project, idx) => (
          <UpcomingProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}
