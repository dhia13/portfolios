import React from "react";
const Navigation = ({ current, setCurrent }) => {
  return (
    <nav className="w-full h-[50px] flex justify-around items-center text-base ">
      <p
        className={`mx-2 cursor-pointer   font-semibold hover:text-neutral-400 ${
          current === "skills" ? "text-cyan-500" : "text-neutral-100"
        }`}
        onClick={() => setCurrent("about")}
      >
        About
      </p>
      <p
        className={`mx-2 cursor-pointer   font-semibold hover:text-neutral-400 ${
          current === "skills" ? "text-cyan-500" : "text-neutral-100"
        }`}
        onClick={() => setCurrent("skills")}
      >
        Skills
      </p>
      <p
        className={`mx-2 cursor-pointer   font-semibold hover:text-neutral-400 ${
          current === "projects" ? "text-cyan-500" : "text-neutral-100"
        }`}
        onClick={() => setCurrent("projects")}
      >
        Projects
      </p>
      <p
        className={`mx-2 cursor-pointer   font-semibold hover:text-neutral-400 ${
          current === "contact" ? "text-cyan-500" : "text-neutral-100"
        }`}
        onClick={() => setCurrent("contact")}
      >
        Contact
      </p>
    </nav>
  );
};

export default Navigation;
