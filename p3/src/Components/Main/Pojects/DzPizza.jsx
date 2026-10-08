import { useTransition, animated } from "react-spring";
import { useEffect, useState } from "react";
import { TiArrowBackOutline } from "react-icons/ti";
import { BsGlobeAmericas } from "react-icons/bs";

const DZPIZZA = ({ currentProject, setCurrentProject }) => {
  const [transitionState, setTransitionState] = useState(
    currentProject === "DZPIZZA" ? true : false
  );
  useEffect(() => {
    if (currentProject === "DZPIZZA") {
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
                <h1 className="text-lg my-2">DZ Pizza</h1>
                <p className="text-sm">
                  This project is an app that allows restaurent to manage orders and for users to make orders online to make life easier
                </p>
                <h1 className="my-1">Functionality</h1>
                <ul
                  className="list-disc text-sm my-4 ml-5
"
                >
                  <li>Seamless pizza ordering interface with a variety of options for customization (size, toppings, crust, etc.).</li>
                  <li>User registration and login using Google accounts for easy authentication.</li>
                  <li>edit on a dZPIZZA page by drawing adding text</li>
                  <li>Secure payment processing through Stripe checkout for hassle-free transactions.</li>
                  <li>
                    and finaly extract a modified dZPIZZA sorry for the simple ui
                    and lack of responsivness after all this is a side project
                    screen shots
                  </li>
                </ul>
                <h1 className="my-1">Admin</h1>
                <ul
                  className="list-disc text-sm my-4 ml-5
"
                >
                  <li>Secure admin dashboard accessible only to authorized personnel.</li>
                  <li>Full CRUD operations for products and categories and users</li>
                  <li>Monitoring of incoming orders with details such as order status, customer information, and delivery addresses.</li>
                  <li>Secure payment processing through Stripe checkout for hassle-free transactions.</li>
                  <li>Comprehensive management of menu items including adding, editing, and removing pizzas and toppings.</li>
                </ul>
              </div>
              <div className="flex justify-center items-center ml-8 mt-4 gap-8">
                <a href="https://dz-pizza.vercel.app/" target={"_blank"}>
                  <BsGlobeAmericas className="cursor-pointer w-8 h-8 text-gray-400 hover:text-purple-500" />
                </a>
              </div>
            </animated.div>
          )
      )}
    </>
  );
};

export default DZPIZZA;
