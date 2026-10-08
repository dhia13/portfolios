import { useTransition, animated } from "react-spring";
import { useEffect, useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { BsGlobeAmericas } from "react-icons/bs";

const GENERALMACHINE = ({ currentProject, setCurrentProject }) => {
  const [transitionState, setTransitionState] = useState(
    currentProject === "GM" ? true : false
  );
  useEffect(() => {
    if (currentProject === "GM") {
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
                <h1 className="text-lg my-2">General Machine</h1>
                <p className="text-sm">
                  This project is an app with landing page to display prodects made for an industriel company
                </p>
                <h1 className="my-1">Functionality</h1>
                <ul
                  className="list-disc text-sm my-4 ml-5
"
                >
                  <li>A friendly user interface to describe the company and display prodects</li>
                  <li>Easy access to contact the company </li>
                  <li>Dark and light mode</li>
                  <li>Multi language with i18n</li>
                  <li>Responsiveness</li>
                </ul>
                <h1 className="my-1">Admin</h1>
                <ul
                  className="list-disc text-sm my-4 ml-5
"
                >
                  <li>Full CRUD operations for products</li>
                </ul>
              </div>
              <div className="flex justify-center items-center ml-8 mt-4 gap-8">
                <a href="https://generalmachine.vercel.app/" target={"_blank"}>
                  <BsGlobeAmericas className="cursor-pointer w-8 h-8 text-gray-400 hover:text-purple-500" />
                </a>
              </div>
            </animated.div>
          )
      )}
    </>
  );
};

export default GENERALMACHINE;
