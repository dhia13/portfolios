import { useTransition, animated } from "react-spring";
import { useEffect, useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
const Healthier = ({ currentProject, setCurrentProject }) => {
  const [transitionState, setTransitionState] = useState(
    currentProject === "healthier" ? true : false
  );
  useEffect(() => {
    if (currentProject === "healthier") {
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
              className="relative w-full h-full flex justify-start items-start bg-blue-200"
              style={style}
            >
              <TiArrowBackOutline
                className="cursor-pointer m-4 w-10 h-10 text-gray-400 hover:text-purple-500"
                onClick={() => {
                  setCurrentProject("home");
                }}
              />
              hello
            </animated.div>
          )
      )}
    </>
  );
};

export default Healthier;
