import { useState } from "react";

const PageIndicator = ({ setValue, value }) => {
  const [headerHover, setHeaderHover] = useState(
    value === "hover" ? true : false
  );
  const [aboutMeHover, setAboutMeHover] = useState(
    value === "aboutMe" ? true : false
  );
  const [myProjectsHover, setMyProjectsHover] = useState(
    value === "myProjects" ? true : false
  );
  return (
    <div className="w-[24px] absolute top-1/2 left-[6px] flex justify-center items-center flex-col z-50">
      <div
        className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
        onClick={() => setValue("header")}
      >
        <img
          onMouseMove={() => setHeaderHover(true)}
          onMouseOut={() => setHeaderHover(false)}
          src={
            value === "header"
              ? "/images/circle-full.png"
              : headerHover
              ? "/images/circle-hover.png"
              : "/images/circle-empty.png"
          }
          alt="circle"
          className="w-[16px] h-[16px]"
        />
      </div>
      <div
        className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
        onClick={() => setValue("aboutMe")}
      >
        <img
          onMouseMove={() => setAboutMeHover(true)}
          onMouseOut={() => setAboutMeHover(false)}
          src={
            value === "aboutMe"
              ? "/images/circle-full.png"
              : aboutMeHover
              ? "/images/circle-hover.png"
              : "/images/circle-empty.png"
          }
          alt="circle"
          className="w-[16px] h-[16px]"
        />
      </div>
      <div
        className="w-[24px] h-[24px] flex justify-center items-center cursor-pointer"
        onClick={() => setValue("myProjects")}
      >
        <img
          onMouseMove={() => setMyProjectsHover(true)}
          onMouseOut={() => setMyProjectsHover(false)}
          src={
            value === "myProjects"
              ? "/images/circle-full.png"
              : myProjectsHover
              ? "/images/circle-hover.png"
              : "/images/circle-empty.png"
          }
          alt="circle"
          className="w-[16px] h-[16px]"
        />
      </div>
    </div>
  );
};

export default PageIndicator;
