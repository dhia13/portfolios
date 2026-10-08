import { useTransition, animated } from "react-spring";
import { useEffect, useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { BsGlobeAmericas } from "react-icons/bs";
import { BiGitRepoForked } from "react-icons/bi";

const Pdf = ({ currentProject, setCurrentProject }) => {
  const [transitionState, setTransitionState] = useState(
    currentProject === "pdf" ? true : false
  );
  useEffect(() => {
    if (currentProject === "pdf") {
      setTransitionState(true);
    } else {
      setTransitionState(false);
      n;
    }
    return setTransitionState(true);
  }, [currentProject]);
  const transition = useTransition(transitionState, {
    from: { right: "-50%", opacity: 0 },
    enter: { right: "0", opacity: 1 },
    leave: { right: "-50%", opacity: 0 },
  });
  return (
    <>
      {transition(
        (style, item) =>
          item && (
            <animated.div
              className="relative w-full h-full flex justify-start items-start flex-col ml-8 mt-9"
              style={style}
            >
              <TiArrowBackOutline
                className="cursor-pointer m-4 w-10 h-10 text-gray-400 hover:text-purple-500"
                onClick={() => {
                  setCurrentProject("home");
                }}
              />
              <div className="w-[90%] flex justify-start items-start flex-col mx-2 font-Poppins text-[#d1d1d1] md:ml-10">
                <h1 className="text-lg my-2">Pdf Editor</h1>
                <p className="text-sm">
                  This little project is a part of a bigger project i worked on
                  so i wanted to share this part of the code as a small app
                </p>
                <h1 className="my-1">Functionality</h1>
                <ul
                  className="list-disc text-sm my-4 ml-5
"
                >
                  <li>upload multi pdf and extract pages from them</li>
                  <li>
                    rearrange pages with a simple drag and drop -add picture as
                    an extra pdf page
                  </li>
                  <li>edit on a pdf page by drawing adding text</li>
                  <li>
                    plan tool for architects alows u to easly select progress on
                    an architecture plan
                  </li>
                  <li>
                    and finaly extract a modified pdf sorry for the simple ui
                    and lack of responsivness after all this is a side project
                    screen shots
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center ml-8 mt-4 gap-8">
                <a
                  href="https://github.com/dhia13/Pdf-Extractor"
                  target={"_blank"}
                >
                  <BiGitRepoForked className="cursor-pointer w-8 h-8 text-gray-400 hover:text-purple-500" />
                </a>
                <a href="https://pdf-editor-self.vercel.app/" target={"_blank"}>
                  <BsGlobeAmericas className="cursor-pointer w-8 h-8 text-gray-400 hover:text-purple-500" />
                </a>
              </div>
            </animated.div>
          )
      )}
    </>
  );
};

export default Pdf;
