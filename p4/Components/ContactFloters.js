import { useState } from "react";
import profileData from "../profile.json";

const ContactFloters = () => {
  const { personal, contact } = profileData;
  const [open, setOpen] = useState(false);
  return (
    <div
      onMouseMove={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
      className={`absolute z-50 w-[50px] top-[200px] lg:top-[400px] right-0 ${
        !open && "opacity-50 w-[50px]"
      }  ${
        open && "opacity-100 w-[170px]"
      } bg-black rounded-tl-md rounded-bl-md cursor-pointer flex flex-col
       justify-start items-center`}
    >
      <a
        className={`flex justify-start items-center gap-2 ${
          open && "w-[150px]"
        } h-[50px]`}
        href={contact.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/github.png"
          alt="Github"
          className="w-[28px] h-[28px]"
        />
        {open && (
          <p className="text-white font-pressStart text-xs hover:text-[#04E949]">
            Github
          </p>
        )}
      </a>
      <a
        className={`flex justify-start items-center gap-2 ${
          open && "w-[150px]"
        } h-[50px]`}
        href={contact.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/linkedin.png"
          alt="linkedin"
          className="w-[28px] h-[28px]"
        />
        {open && (
          <p className="text-white font-pressStart text-xs hover:text-[#04E949]">
            Linkedin
          </p>
        )}
      </a>
      <a
        className={`flex justify-start items-center gap-2 ${
          open && "w-[150px]"
        } h-[50px]`}
        href="https://t.me/+213794064884"
        target="_blank"
      >
        <img
          src="/images/telegramContact.png"
          alt="telegram"
          className="w-[28px] h-[28px]"
        />
        {open && (
          <p className="text-white font-pressStart text-xs hover:text-[#04E949]">
            Telegram
          </p>
        )}
      </a>
      <a
        className={`flex justify-start items-center gap-2 ${
          open && "w-[150px]"
        } h-[50px]`}
        href="https://www.codewars.com/users/dhia13"
        target="_blank"
      >
        <img
          src="/images/codewars.png"
          alt="CodeWars"
          className="w-[28px] h-[28px]"
        />
        {open && (
          <p className="text-white font-pressStart text-xs hover:text-[#04E949]">
            CodeWars
          </p>
        )}
      </a>
      <a
        className={`flex justify-start items-center gap-2 ${
          open && "w-[150px]"
        } h-[50px]`}
        href="http://m.me/sahhar13"
        target="_blank"
      >
        <img
          src="/images/facebookContact.png"
          alt="Messenger"
          className="w-[28px] h-[28px]"
        />
        {open && (
          <p className="text-white font-pressStart text-xs hover:text-[#04E949]">
            Messenger
          </p>
        )}
      </a>
      <a
        className={`flex justify-start items-center gap-2 ${
          open && "w-[150px]"
        } h-[50px]`}
        href={`mailto:${contact.email}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/email.png"
          alt="email"
          className="w-[28px] h-[28px]"
        />
        {open && (
          <p className="text-white font-pressStart text-xs hover:text-[#04E949]">
            Email
          </p>
        )}
      </a>
    </div>
  );
};

export default ContactFloters;
