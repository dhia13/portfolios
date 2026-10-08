import { useTransition, animated } from "react-spring";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Seer from "./Pojects/Seer";
import Qct from "./Pojects/Qct";
import Healthier from "./Pojects/Healthier";
import Pdf from "./Pojects/Pdf";
import DZPIZZA from "./Pojects/DzPizza";
import GeneralMachine from "./Pojects/GeneralMachine";
import profileData from "../../../profile.json";

const Projects = ({ current }) => {
  const { projects } = profileData;
  const [transitionState, setTransitionState] = useState(
    current === "projects" ? true : false
  );
  useEffect(() => {
    if (current === "projects") {
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
  const [currentProject, setCurrentProject] = useState("home");
  return (
    <div
      className={`w-full h-full absolute top-0 right-0 ${
        current === "projects" ? "z-50" : "z-30"
      }`}
    >
      {transition(
        (style, item) =>
          item && (
            <animated.div
              className="relative w-full h-full flex justify-start items-start "
              style={style}
            >
              {currentProject === "home" && (
                <animated.div
                  style={style}
                  className="w-full h-[400px] relative font-Poppins text-[#d1d1d1] mt-[120px]"
                >
                  <Header className="font-Poppins text-xl ml-[40px] mt-2">
                    Projects
                  </Header>
                  <div
                    className="w-[100px] z-20 h-[100px] absolute top-[55px] left-[40px] bg-gradient-to-r from-purple-600 to-blue-600
                 hover:to-red-400 transition-colors duration-1000 rounded-md"
                  >
                    <div className="w-[96px] h-[96px] absolute top-[4px] left-[4px] bg-[#1d1d20] flex flex-col justify-start items-start"></div>
                  </div>
                  <div className="ml-[60px] mt-8 z-50 relative text-base flex flex-col gap-4 ">
                    {projects.map((project) => (
                      <ClickText 
                        key={project.id} 
                        onClick={() => {
                          // Map project IDs to component names
                          const projectMap = {
                            'pdfextractor': 'pdf',
                            'seer': 'seer',
                            'qct': 'qct',
                            'construction': 'GM',
                            'bistrodz': 'DZPIZZA',
                            'careme': 'healthier'
                          };
                          setCurrentProject(projectMap[project.id] || 'home');
                        }}
                      >
                        {project.title} ({project.subtitle})
                      </ClickText>
                    ))}
                  </div>
                </animated.div>
              )}
              {currentProject === "pdf" && (
                <Pdf
                  currentProject={currentProject}
                  setCurrentProject={setCurrentProject}
                />
              )}
              {currentProject === "seer" && (
                <Seer
                  currentProject={currentProject}
                  setCurrentProject={setCurrentProject}
                />
              )}
              {currentProject === "qct" && (
                <Qct
                  currentProject={currentProject}
                  setCurrentProject={setCurrentProject}
                />
              )}
              {currentProject === "healthier" && (
                <Healthier
                  currentProject={currentProject}
                  setCurrentProject={setCurrentProject}
                />
              )}
              {currentProject === "DZPIZZA" && (
                <DZPIZZA
                  currentProject={currentProject}
                  setCurrentProject={setCurrentProject}
                />
              )}
              {currentProject === "GM" && (
                <GeneralMachine
                  currentProject={currentProject}
                  setCurrentProject={setCurrentProject}
                />
              )}
            </animated.div>
          )
      )}
    </div>
  );
};

export default Projects;
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
  color: transparent;
  cursor: pointer;
  -webkit-text-stroke: #fff;
  -webkit-text-stroke-width: 1px;
  text-shadow: 2px 2px 10px $blue;
  transition: all 0.5s ease-in-out;
  letter-spacing: 0.2em;
  margin-top: 4px;
  margin-bottom: 4px;
  &:hover {
    animation: ${flicker} 0.7s ease-in-out infinite alternate;
    color: red;
  }
`;
const Header = styled.p`
  letter-spacing: 0.2em;
`;
