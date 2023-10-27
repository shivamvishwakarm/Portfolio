import React from "react";
import SkillCard from "./SkillCard.jsx";

export const Skill = () => {
  const skill = [
    {
      id: 1,
      name: "FrontEnd",
      skills: [
        { tech: "HTML", color: "#af8f1a" },
        { tech: "CSS", color: "#aeb8f1a" },
        { tech: "JavaScript", color: "#4338ca" },
        { tech: "React", color: "#61DBFB" },
        { tech: "NextJs", color: "#qe8d1e" },
      ],
    },
    {
      id: 2,
      name: "Backend",
      skills: [{ tech: "NodeJs", color: "#7e22ce" }, { tech: "Express", color: "#1aaf48" }],
    },
    {
      id: 3,
      name: "Database",
      skills: [{tech: "MongoDB", color: "#be123c"}],
    },
  ];


  return (
    <div className="m-4 ">
      <h1 className="text-black font-bold">What I know:</h1>
      <div className=" flex flex-wrap gap-10 mt-4">
        {skill.map((e) => (
          <SkillCard key={e.id} skill={e} />
        ))}
      </div>
    </div>
  );
};
