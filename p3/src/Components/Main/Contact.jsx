import React from "react";
import { useTransition, animated } from "react-spring";
import { useEffect, useState } from "react";
import FlipIcon from "../Utils/FlipIcon";
import axios from "axios";
import profileData from "../../../profile.json";

const Contact = ({ current }) => {
  const { contact } = profileData;
  const [transitionState, setTransitionState] = useState(
    current === "contact" ? true : false
  );
  useEffect(() => {
    if (current === "contact") {
      setTransitionState(true);
    } else {
      setTransitionState(false);
    }
  }, [current]);
  const transition = useTransition(transitionState, {
    from: { right: "-50%", opacity: 0 },
    enter: { right: "0", opacity: 1 },
    leave: { right: "-50%", opacity: 0 },
  });
  const [copyss, setCopyss] = useState(false);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  const [success, setSuccess] = useState(false);
  const sendEmail = () => {
    axios
      .post("https://portfoliomailer.onrender.com", {
        email,
        subject,
        comment,
      })
      .then((res) => {
        console.log(res);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(contact.email);
    setCopyss(true);
    setTimeout(() => {
      setCopyss(false);
    }, 1000);
  };
  return (
    <div
      className={`w-full h-full absolute top-0 right-0 ${
        current === "contact" ? "z-50" : "z-30"
      }`}
    >
      {transition(
        (style, item) =>
          item && (
            <animated.section
              style={style}
              className="w-full h-full flex justify-around items-center flex-col"
            >
              <div className="font-Poppins">
                <div className="w-full justify-center items-center flex flex-col mb-4">
                  <p className="text-white font-semibold my-4 text-4xl">
                    Contact
                  </p>
                  <div className="w-[100px] h-[4px] bg-white"></div>
                </div>
                <form action="#" className="space-y-2">
                  <div className="min-w-[300px]">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="email"
                      className=" bg-gray-700  text-white text-sm rounded-sm block w-full p-2.5 lg:w-[400px]"
                      placeholder="Email"
                      required
                    />
                  </div>
                  <div>
                    <input
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      type="text"
                      id="subject"
                      className=" bg-gray-700  text-white text-sm rounded-sm block w-full p-2.5 lg:w-[400px]"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      id="message"
                      rows="5"
                      className=" bg-gray-700  text-white text-sm rounded-sm block w-full p-2.5 lg:w-[400px]"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                  <div className="w-full flex justify-end items-center">
                    <button
                      onClick={() => sendEmail()}
                      type="submit"
                      className="py-2 hover:animate-pulse px-2 text-sm justify-items-end font-medium text-center border-2 border-white text-white rounded-sm "
                    >
                      Send message
                    </button>
                  </div>
                </form>
                <div
                  className={`w-full flex justify-center items-center text-green-300 my-2 ${
                    success ? "visible" : "invisible"
                  }`}
                >
                  <p>Email Sent</p>
                </div>
              </div>
              <div className="p-4 flex-col justify-center items-center gap-6 flex">
                <div className="flex justify-center items-center sm:gap-2 gap-1  ">
                  <p className="text-white">Email : {contact.email}</p>
                  <div className="w-[30px] h-[30px] relative">
                    <img
                      src="/icons/copy.png"
                      alt="copy"
                      width="24px"
                      height="24px"
                      className="cursor-pointer w-[24px] hover:w-[28px] hover:h-[28px] transform h-[24px]"
                      onClick={() => handleCopy()}
                    />
                    <div
                      className={`${
                        copyss ? "absolute" : "hidden"
                      } top-[-45px] left-[-75px] sm:left-[-10px] text-white text-xs px-[5px] py-[4px] bg-gray-400 whitespace-nowrap	 rounded-md text`}
                    >
                      Email copied
                    </div>
                  </div>
                </div>
                <div className="text-white flex justify-center items-center gap-4 ">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FlipIcon icon="/icons/in.png" color="0a66c2" />
                  </a>
                  <a href={contact.github} target="_blank" rel="noopener noreferrer">
                    <FlipIcon icon="/icons/gt.png" color="#2481cc" />
                  </a>
                </div>
              </div>
            </animated.section>
          )
      )}
    </div>
  );
};

export default Contact;
