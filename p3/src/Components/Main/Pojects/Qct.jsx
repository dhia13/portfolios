import { useTransition, animated } from "react-spring";
import { useEffect, useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { AiFillYoutube } from "react-icons/ai";

const Qct = ({ currentProject, setCurrentProject }) => {
  const [transitionState, setTransitionState] = useState(
    currentProject === "qct" ? true : false
  );
  useEffect(() => {
    if (currentProject === "qct") {
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
                <h1 className="text-lg my-2">Qcs Quiz app (react native)</h1>
                <p className="text-sm">
                  This is a Quiz game i made using react native with a node
                  admin dashboard and server for a doctor targeting medical
                  students
                </p>
                <h1 className="my-1">Functionality</h1>
                <ul className="list-disc text-sm my-4 ml-5">
                  <li>Full CRUD operations on users sections and quizs</li>
                  <li>admin Dashboad</li>
                  <li>quizs with timer 50/50 and ingame functionality</li>
                  <li>in app sounds music and vibration</li>
                  <li>authentication</li>
                </ul>
              </div>
              <div className="flex justify-center items-center ml-8 mt-4 gap-8">
                <a
                  href="https://www.youtube.com/watch?v=yoSjq8MNB3E&t=62s&ab_channel=Daidou"
                  target={"_blank"}
                >
                  <AiFillYoutube className="cursor-pointer w-8 h-8 text-gray-400 hover:text-purple-500" />
                </a>
              </div>
            </animated.div>
          )
      )}
    </>
  );
};

export default Qct;
