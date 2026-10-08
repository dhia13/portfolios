import { useState } from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header/Header";
import AboutMe from "../Components/AboutMe/AboutMe";
import MyProjects from "../Components/MyProjects/MyProjects";
import ContactFloters from "../Components/ContactFloters";
import MatrixBg from "../Components/Background/MatrixBg/MatrixBg";
import PageIndicator from "../Components/PageIndicator";
export default function Home() {
  const [current, setCurrent] = useState("header");
  const [currentAbout, setCurrentAbout] = useState("about");
  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      if (current === "header") {
        setCurrent("aboutMe");
      }
      if (current === "aboutMe") {
        setCurrent("myProjects");
      }
      if (current === "myProjects") {
        setCurrent("header");
      }
    }
    if (e.key === "ArrowUp") {
      if (current === "header") {
        setCurrent("myProjects");
      }
      if (current === "myProjects") {
        setCurrent("aboutMe");
      }
      if (current === "aboutMe") {
        setCurrent("header");
      }
    }
    if (current === "aboutMe") {
      if (e.key === "ArrowRight") {
        if (currentAbout === "about") {
          setCurrentAbout("mySkills");
        }
      }
      if (e.key === "ArrowLeft") {
        if (currentAbout === "mySkills") {
          setCurrentAbout("about");
        }
      }
    }
  };
  return (
    <div
      className="overflow-hidden w-screen h-screen relative bg-black font-roboto"
      tabIndex={0}
      onKeyDown={(e) => handleKeyDown(e)}
    >
      <MatrixBg />
      <Navbar setCurrent={setCurrent} current={current} />
      <div className="w-screen h-[calc(100%_-_1rem)] relative">
        <div
          className={`absolute w-full h-full ${
            current === "header" ? "opacity-100" : "opacity-0"
          }`}
        >
          <Header current={current} />
        </div>
        <div
          className={`absolute w-full h-full ${
            current === "myProjects" ? "opacity-100" : "opacity-0"
          }`}
        >
          <MyProjects current={current} />
        </div>
        <div
          className={`absolute  w-full h-full ${
            current === "aboutMe" ? "opacity-100" : "opacity-0"
          }`}
        >
          <AboutMe
            currentAbout={currentAbout}
            setCurrentAbout={setCurrentAbout}
            current={current}
          />
        </div>
      </div>
      {/* Browing status dots floaters */}
      <PageIndicator setValue={setCurrent} value={current} />
      <ContactFloters />
    </div>
  );
}
