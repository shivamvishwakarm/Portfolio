import React from "react";
import ProjectCard from "./ProjectCard.jsx";

const projects = [
  {
    id: 1,
    title: "Freelance",
    description: "A freelance website for government officials.",
    link: "https://cscegovonline.in/",
    technology: [
      { tech: "Next.js", color: "#d9e130" },
      { tech: "Tailwind CSS", color: "#4a7b06" },
      { tech: "MongoDB", color: "#7d3a23" },
      { tech: "cloudinary", color: "#b34b76" },
      { tech: "APIs", color: "#b34b76" },
    ],
  },
  {
    id: 2,
    title: "Fizz News",
    description: "A news website for the latest news and updates with categories and much more functionality.",
    link: "https://github.com/shivamvishwakarm/Fizznews",
    technology: [
      { tech: "React", color: "#e00f58" },
      { tech: "Bootstrap", color: "#59f763" },
      { tech: "Express.js", color: "#901ea2" },
      { tech: "Node.js", color: "#5f29cb" },
      { tech: "APIs", color: "#9bfde9" },
    ],
  },
  {
    id: 3,
    title: "Blog Website",
    description: "A blog website with authentication and authorization with database.",
    link: "https://github.com/shivamvishwakarm/iBlog-website",
    technology: [
      { tech: "Node.js", color: "#513f9d" },
      { tech: "Express.js", color: "#454870" },
      { tech: "MongoDB", color: "#10f645" },
      { tech: "APIs", color: "#704715" },
      { tech: "bootsrap", color: "#afd520" },
    ],
  },
  {
    id: 4,
    title: "Weather web app",
    description: "A Weather web app that shows the weather of any city in the world.",
   
    link: "https://github.com/shivamvishwakarm/Weather_webApp",
    technology: [
      { tech: "Node.js", color: "#6fffbd" },
      { tech: "Express.js", color: "#79d8be" },
      { tech: "APIs", color: "#2f9e75" },
      { tech: "bootsrap", color: "#77cb97" },
    ],
  },
];

const Project = () => {
  return (
    <div className="m-4 ">
      <h1 className="text-black font-bold">Projects:</h1>
      <div className="project-cards flex flex-wrap  gap-10 mt-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
