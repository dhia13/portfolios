import BouncyText from "../Utils/AnimatedText/BouncyText/BouncyText";
import { useTransition, animated } from "react-spring";
import { useEffect, useState } from "react";
import Image from "next/image";
import { keyframes } from "styled-components";
import styled from "styled-components";
import profileData from "../../../profile.json";

function Home({ current, setCurrent }) {
  const { personal, about } = profileData;
  const [transitionState, setTransitionState] = useState(
    current === "home" ? true : false
  );
  useEffect(() => {
    if (current === "home") {
      setTransitionState(true);
    } else {
      setTransitionState(false);
    }
  }, [current]);
  const transition = useTransition(transitionState, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <div
      className={`w-full h-full absolute top-0 right-0 ${
        current === "home" ? "z-50" : "z-30"
      }`}
    >
      {transition(
        (style, item) =>
          item && (
            <animated.div
              className=" w-full h-full flex justify-start items-start flex-col ml-8 mt-9
               absolute bg-[#1d1d20]"
              style={style}
            >
              <div className="w-full h-full flex justify-start items-start flex-col text-[#d1d1d1]">
                {/* Introduction */}
                <h1 className="transition-all duration-400 text-6xl ml-4 my-10 font-thin font-poppinsSn  sm:text-7xl md:mx-10">
                  {personal.greeting}
                </h1>
                <div className="flex flex-col justify-start items-start lg:flex-row w-[90%] mx-auto md:my-10 ">
                  <div className="flex justify-start items-start font-poppinsSn w-[90%] lg:w-[70%] h-full ">
                    <div className="w-[2px] h-full bg-gradient-to-r from-purple-600 to-blue-600 hover:to-red-400 transition-colors duration-1000 "></div>
                    <div className="pl-2 ml-2">
                      <p className="text-sm font-normal mb-2 font-Montserrats ">
                        My name is {personal.name}, I am a {personal.title}
                        <br />
                        located in {personal.location}
                      </p>
                      <p className="text-sm font-normal mb-2 font-Montserrats">
                        {about.summary}
                      </p>
                      <div
                        className="flex justify-start items-center gap-2 mb-2"
                        onClick={() => setCurrent("about")}
                      >
                        <ClickText
                          className="text-sm font-normal"
                          onClick={() => setCurrent("about")}
                        >
                          More about me
                        </ClickText>
                      </div>
                      <div
                        className="flex justify-start items-center gap-2 mb-2"
                        onClick={() => setCurrent("projects")}
                      >
                        <ClickText className="text-sm font-normal">
                          Projects
                        </ClickText>
                      </div>
                      <div
                        className="flex justify-start items-center gap-2 mb-2"
                        onClick={() => setCurrent("skills")}
                      >
                        <ClickText className="text-sm font-normal">
                          Skills
                        </ClickText>
                      </div>
                      <div
                        className="flex justify-start items-center gap-2 mb-2"
                        onClick={() => setCurrent("contact")}
                      >
                        <ClickText
                          className="text-sm font-normal"
                          onClick={() => setCurrent("contact")}
                        >
                          Contact me
                        </ClickText>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </animated.div>
          )
      )}
    </div>
  );
}

export default Home;
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
  text-align: center;
  letter-spacing: 0.2em;
  &:hover {
    animation: ${flicker} 0.7s ease-in-out infinite alternate;
    color: red;
  }
`;
