import Typewriter from "typewriter-effect";

const TypeWriterText = () => {
  return (
    <div className="w-screen ml-[60px] h-[300px] z-50 relative font-roboto font-bold">
      {/* type writer hello there after than type welcome */}
      <div className="relative text-5xl text-cyan-500 font-bold ">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello There")
              .changeDelay("60")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Welcome")
              .start();
          }}
        />
      </div>
      <div className="text-4xl flex gap-2 mt-4">
        <p>My Name is Dhia Eddine i am a </p>
        <br />
        <p className="text-cyan-400 text-4xl font-extrabold">FullStack</p>
        <p>Developer</p>
      </div>
    </div>
  );
};
export default TypeWriterText;
