import SingleSkill from "../Utils/SingleSkill";
import { useTransition, animated } from "react-spring";
import { useEffect, useState } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

function MySkills({ current, setCurrent }) {
  const skills = [
    {
      img: "icons/css3.png",
      title: "CSS3",
    },
    {
      img: "icons/html5.png",
      title: "HTML5",
    },
    {
      img: "icons/javascript.png",
      title: "JavaScript",
    },
    {
      img: "icons/typescript.png",
      title: "TypeScript",
    },
    {
      img: "icons/react.png",
      title: "React",
    },
    {
      img: "icons/react.png",
      title: "React Native",
    },
    {
      img: "icons/nextjs.png",
      title: "NextJs",
    },
    {
      img: "icons/electron.png",
      title: "Electron",
    },
    {
      img: "icons/redux.png",
      title: "Redux",
    },
    {
      img: "icons/tailwind.png",
      title: "TailWind",
    },
    {
      img: "icons/mui.png",
      title: "MUI",
    },
    {
      img: "icons/bootstrap.png",
      title: "Bootstrap",
    },
    {
      img: "icons/express.png",
      title: "Express",
    },
    {
      img: "icons/node.png",
      title: "Node",
    },
    {
      img: "icons/mongo.png",
      title: "MongoDb",
    },
    {
      img: "icons/mysql.png",
      title: "MySQL",
    },
    {
      img: "icons/api.png",
      title: "Apis",
    },
    {
      img: "icons/postman.png",
      title: "Postman",
    },
    {
      img: "icons/bash.png",
      title: "Bash",
    },
    {
      img: "icons/git.png",
      title: "Git",
    },
    {
      img: "icons/gitlab.webp",
      title: "Gitlab",
    },
    {
      img: "icons/github1.png",
      title: "Github",
    },
    {
      img: "icons/figma.png",
      title: "Figma",
    },
    {
      img: "icons/arabic.png",
      title: "Arabic",
    },
    {
      img: "icons/english.png",
      title: "English",
    },
    {
      img: "icons/frensh.png",
      title: "Frensh",
    },
  ];
  const [transitionState, setTransitionState] = useState(
    current === "skills" ? true : false
  );
  const [hovered, setHovered] = useState(false);
  useEffect(() => {
    if (current === "skills") {
      setTransitionState(true);
    } else {
      setTransitionState(false);
    }
  }, [current]);
  const transition = useTransition(transitionState, {
    from: { right: "-50%", opacity: 0 },
    enter: { right: "0", opacity: 1 },
    leave: { right: "-50%", opacity: 0 },
  });
  return (
    <div
      className={`w-full h-full absolute top-0 right-0 ${
        current === "skills" ? "z-50" : "z-30"
      }`}
    >
      {transition(
        (style, item) =>
          item && (
            <animated.div
              style={style}
              className="flex justify-center items-center w-full h-full flex-col absolute gap-4 "
            >
              <SkillContainer
                className="h-[70%] flex md:h-[500px] justify-center items-center flex-wrap overflow-scroll overflow-x-hidden
            sm:w-[500px] md:w-[500px] lg:w-[800px] lg:overflow-hidden z-50 w-full"
              >
                {skills.map((skill) => (
                  <div key={skill.title} className="w-[200px] h-[60px] my-1">
                    <SingleSkill title={skill.title} img={skill.img} />
                  </div>
                ))}
              </SkillContainer>
              <div
                className="flex justify-center items-center hover:underline xsm:gap-2 hover:text-green-400 cursor-pointer hover:animate-pulse"
                onClick={() => setCurrent("projects")}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <ClickText className="text-white text-sm max-w-[300px] xsm:max-w-none font-Poppins ">
                  Projects made with these skills
                </ClickText>
              </div>
            </animated.div>
          )
      )}
    </div>
  );
}

export default MySkills;
const SkillContainer = styled.div`
  ::-webkit-scrollbar-track {
    border-radius: 1000px;
    background-color: #746969;
  }
  ::-webkit-scrollbar {
    width: 7px !important;
    height: 2px !important;
    background-color: #746969;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #9333ea;
  }
`;
const flicker = keyframes`
    0% {
      opacity: 0.5;
      text-shadow: 2px 2px 10px $blue;
    }
    100% {
      opacity: 1;
      text-shadow: 2px 2px 20px $blue;
    }
`;
const ClickText = styled.div`
  text-transform: uppercase;
  color: transparent;
  cursor: pointer;
  -webkit-text-stroke: #fff;
  -webkit-text-stroke-width: 1px;
  text-shadow: 2px 2px 10px $blue;
  transition: all 0.5s ease-in-out;
  letter-spacing: 0.2em;
  margin-top: 10px;
  &:hover {
    animation: ${flicker} 0.7s ease-in-out infinite alternate;
    color: red;
  }
`;
