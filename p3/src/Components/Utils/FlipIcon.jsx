import { useState } from "react";

const FlipIcon = ({ icon }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div>
      <div
        className={`w-[55px] h-[55px] bg-gray-700 rounded-sm flex justify-center items-center relative overflow-hidden
        hover:bg-[#2481cc] transition delay-150 duration-350 ease-in-out cursor-pointer transform hover:scale-105 `}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div
          className={`w-full h-full flex justify-center items-center absolute top-0 ${
            hovered && "translate-y-[100%]"
          } transition delay-150 duration-350 ease-in-out cursor-pointer"
          `}
        >
          <img src={icon} alt="git" width="32px" height="32px" />
        </div>
        <div
          className={`w-full h-full flex justify-center items-center absolute top-[-100%] ${
            hovered && "translate-y-[100%]"
          } transition delay-150 duration-350 ease-in-out cursor-pointer`}
        >
          <img src={icon} alt="git" width="32px" height="32px" />
        </div>
      </div>
    </div>
  );
};
export default FlipIcon;
