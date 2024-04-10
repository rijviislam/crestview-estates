import CompleteProjectCard from "./CompleteProjectCard";

export default function CompleteProject({ projects }) {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl">Complete Project</h2>
      <div className="grid grid-cols-1 my-10 md:grid-cols-3 gird gap-5 ">
        {projects.slice(13, 17).map((project, idx) => (
          <CompleteProjectCard key={idx} project={project} />
        ))}
      </div>
    </div>
  );
}
