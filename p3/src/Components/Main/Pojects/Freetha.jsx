import { useTransition, animated } from "react-spring";
import { useEffect, useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
const Freetha = ({ currentProject, setCurrentProject }) => {
  const [transitionState, setTransitionState] = useState(
    currentProject === "freetha" ? true : false
  );
  useEffect(() => {
    if (currentProject === "freetha") {
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
              Freetha
            </animated.div>
          )
      )}
    </>
  );
};

export default Freetha;
