import { useTransition, animated } from "react-spring";
import { useEffect, useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { BsGlobeAmericas } from "react-icons/bs";
import { BiGitRepoForked } from "react-icons/bi";

const Seer = ({ currentProject, setCurrentProject }) => {
  const [transitionState, setTransitionState] = useState(
    currentProject === "seer" ? true : false
  );
  useEffect(() => {
    if (currentProject === "seer") {
      setTransitionState(true);
    } else {
      setTransitionState(false);
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
                <h1 className="text-lg my-2">Seer Data Manager</h1>
                <p className="text-sm">
                  This is a project made with react and electron to make an app
                  for desktop with the purpose of entering event visitor info
                  and then storing thier data and printing qr code on the badge
                </p>
                <h1 className="my-1">Functionality</h1>
                <ul
                  className="list-disc text-sm my-4 ml-5
"
                >
                  <li>Input validation for email and name</li>
                  <li>View and searsh db by email name or id</li>
                  <li>Print qr Code of any user with thier info</li>
                  <li>
                    Select the position and dimentions of the qr code to match
                    any badge
                  </li>
                  <li>Export data as excel</li>
                  <li>
                    Sync with other app on different computers via a node server
                  </li>
                  <li>Cloud backup</li>
                  <li>Crud operations</li>
                </ul>
              </div>
              <div className="flex justify-center items-center ml-8 mt-4 gap-8">
                <a
                  href="https://github.com/dhia13/SEER_BADGING-data-entery-app-"
                  target={"_blank"}
                >
                  <BiGitRepoForked className="cursor-pointer w-8 h-8 text-gray-400 hover:text-purple-500" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=MsTeCE0EPoY"
                  target={"_blank"}
                >
                  <BsGlobeAmericas className="cursor-pointer w-8 h-8 text-gray-400 hover:text-purple-500" />
                </a>
              </div>
            </animated.div>
          )
      )}
    </>
  );
};

export default Seer;
