import Image from "next/image";
import React, { useState } from "react";
import Header from "./Header";
import { Cursor } from "react-creative-cursor";
import "react-creative-cursor/dist/styles.css";
import { useTransition, animated } from "react-spring";
const Ui = ({ Children, current, setCurrent }) => {
  const [transitionState, setTransitionState] = useState(false);
  const transition = useTransition(transitionState, {
    from: { right: "-50%", opacity: 0 },
    enter: { right: "0", opacity: 1 },
    leave: { right: "-100%", opacity: 0 },
  });

  return (
    <>
      <div className="w-full h-full flex justify-center items-center overflow-hidden relative">
        {/* mobile slide menu */}
        {transition(
          (style, item) =>
            item && (
              <animated.div
                className="w-full h-full bg-gray-400 absolute z-40 top-0 right-0"
                style={style}
              >
                <div className="w-full h-full justify-start items-center flex flex-col">
                  <div className="w-full h-[80px] justify-between flex items-center mx-4">
                    <div
                      className="w-[80px] h-[80px] justify-center items-center flex "
                      onClick={() => setTransitionState(!transitionState)}
                    >
                      <Image
                        src="/images/MainLogo.png"
                        alt="logo"
                        width="42"
                        height="42"
                        className="cursor-pointer my-4"
                        onClick={() => setTransitionState(!transitionState)}
                      />
                    </div>
                    <div
                      className="w-[80px] h-[80px] justify-center items-center flex "
                      onClick={() => setTransitionState(!transitionState)}
                    >
                      <Image
                        src="/images/close.png"
                        alt="logo"
                        width="42"
                        height="42"
                        className="cursor-pointer my-4"
                      />
                    </div>
                  </div>
                  {/* Mobile nav */}
                  <nav className="w-full justify-end items-center  flex flex-col gap-5">
                    <div className="w-full h-[2px] bg-white"></div>
                    <p
                      className={`cursor-pointer hover:text-green-400 ${
                        current === "about" ? "text-cyan-500" : "text-green-100"
                      } hover:animate-pulse`}
                      onClick={() => {
                        setCurrent("about"),
                          setTransitionState(!transitionState);
                      }}
                    >
                      {`<About />`}
                    </p>
                    <div className="w-full h-[2px] bg-white"></div>
                    <p
                      className={`mx-2 cursor-pointer hover:text-green-400 ${
                        current === "skills"
                          ? "text-cyan-500"
                          : "text-green-100"
                      } hover:animate-pulse`}
                      onClick={() => {
                        setCurrent("skills"),
                          setTransitionState(!transitionState);
                      }}
                    >
                      {`<Skills />`}
                    </p>
                    <div className="w-full h-[2px] bg-white"></div>

                    <p
                      className={`mx-2 cursor-pointer hover:text-green-400 ${
                        current === "projects"
                          ? "text-cyan-500"
                          : "text-green-100"
                      } hover:animate-pulse`}
                      onClick={() => {
                        setCurrent("projects"),
                          setTransitionState(!transitionState);
                      }}
                    >
                      {`<Projects />`}
                    </p>
                    <div className="w-full h-[2px] bg-white"></div>

                    <p
                      className={`mx-2 cursor-pointer  hover:text-green-400 ${
                        current === "contact"
                          ? "text-cyan-500"
                          : "text-green-100"
                      } hover:animate-pulse`}
                      onClick={() => {
                        setCurrent("contact"),
                          setTransitionState(!transitionState);
                      }}
                    >
                      {`<Contact />`}
                    </p>
                    <div className="w-full h-[2px] bg-white"></div>
                  </nav>
                </div>
              </animated.div>
            )
        )}
        <main
          className="w-[100%] lg:relative font-MerriweatherSn bg-[#1d1d20] xsm:h-[95%] lg:w-[90%] xl:w-[67%] sm:h-[75%] h-[100%] xsm:m-[20px] z-30 flex justify-start items-center
         rounded-md flex-col"
        >
          {/* border corners shows only in +md screen */}
          <>
            <div className="w-[300px] h-[300px] bg-gradient-to-r from-purple-600 to-blue-600 hover:to-red-400 transition-colors duration-1000 hidden xsm:absolute rounded-tl-md xsm:flex xsm:top-[0px] xsm:left-[0px] sm:top-[90px] sm:left-[0px] lg:top-[-20px] lg:left-[-20px] ">
              <div className="w-full h-full xsm:relative bg-[#1d1d20] top-[20px] left-[20px]"></div>
              <div className="w-[20px] h-[30px] bg-[#1d1d20] rotate-45 relative right-[-10px]"></div>
              <div className="w-[20px] h-[30px] bg-[#1d1d20] rotate-45 absolute left-[5px] bottom-[-10px]"></div>
            </div>
            <div className="w-[300px] h-[300px] bg-gradient-to-r from-purple-600 to-blue-600 hover:to-red-400 hidden xsm:absolute rounded-br-md xsm:flex xsm:bottom-[0px] xsm:right-[0px] sm:bottom-[90px] sm:right-0 lg:bottom-[-20px] lg:right-[-20px]">
              <div className="w-full h-full xsm:relative bg-[#1d1d20] bottom-[20px] right-[20px]"></div>
              <div className="w-[30px] h-[50px] bg-[#1d1d20] rotate-45 absolute right-[-2px] top-[-12px]"></div>
              <div className="w-[20px] h-[30px] bg-[#1d1d20] rotate-45 absolute left-[-4px] bottom-[0px]"></div>
            </div>
          </>
          <Header
            setCurrent={setCurrent}
            current={current}
            setTransitionState={setTransitionState}
            transitionState={transitionState}
          />
          <div className="h-[calc(100%-80px)] w-full justify-center items-center flex">
            {Children}
          </div>
          {/* <Navigation current={current} setCurrent={setCurrent} /> */}
        </main>
      </div>
    </>
  );
};

export default Ui;
