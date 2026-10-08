import { useTransition, animated } from "react-spring";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import profileData from "../../../profile.json";

const About = ({ current, setCurrent }) => {
  const { personal, about } = profileData;
  const [transitionState, setTransitionState] = useState(
    current === "about" ? true : false
  );
  useEffect(() => {
    if (current === "about") {
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
        current === "about" ? "z-50" : "z-30"
      }`}
    >
      {transition(
        (style, item) =>
          item && (
            <animated.div
              className="relative w-full h-full flex justify-start items-start flex-col ml-8 mt-9"
              style={style}
            >
              <div className="w-full flex justify-start items-center">
                <div className="flex flex-col my-4 text-white font-poppinsSn  lg:w-[800px] w-[400px] xsm:w-[450px] sm:w-[600px]">
                  <h1 className="transition-all duration-400 text-5xl ml-4 my-6 font-thin font-poppinsSn  sm:text-7xl md:mx-10">
                    Greetings
                  </h1>
                  <div className="  ml-4 text-sm lg:text=base text-[#D1D1D1] md:ml-[40px] ">
                    <p>My Name is {personal.name}.</p>
                    <p>
                      {about.summary} I have mastered the
                      MERN-stack and software engineering, Leveled-up every{" "}
                      <span onClick={() => setCurrent("skills")} className="cursor-pointer hover:text-purple-400">skill </span>
                      that is required to make websites, PWAs, mobile and desktop
                      apps from scratch. Capable of solving/debugging complex
                      problems and errors. I'm a fast learner ready to dive
                      into other frameworks. I create{" "}
                      <span onClick={() => setCurrent("projects")} className="cursor-pointer hover:text-purple-400">
                        products{" "}
                      </span>{" "}
                      that are fast and optimized with clean code according
                      to best practices and pipelines. I'm a trilingual speaker
                      ({about.languages.map(l => l.name).join(", ")}) with experience working
                      with teams and developers. I'm fast and accurate with great
                      hunger for knowledge and adventure.
                    </p>
                    <p onClick={() => setCurrent("projects")} className="cursor-pointer hover:text-purple-400">
                      See some of my work
                    </p>
                    <div
                      onClick={() => setCurrent("contact")}
                      className="mt-10"
                    >
                      <ClickText>Lets make something great together</ClickText>
                    </div>
                  </div>
                </div>
              </div>
            </animated.div>
          )
      )}
    </div>
  );
};

export default About;
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
