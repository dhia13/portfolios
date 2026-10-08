import profileData from "../../../profile.json";

function About() {
  const { personal, about } = profileData;
  return (
    <div>
      <div className="flex justify-center items-start w-screen h-full z-60">
        <div className="w-full flex justify-center items-center h-[600px]">
          <div
            className="flex  lg:items-start  xl:items-start 2xl:items-start flex-col flex-wrap  my-auto p-[20px] lg:w-[1000px] sm:w-[800px]
              gap-2 z-50 text-white justify-center  rounded-md"
          >
            <h1 className="text-3xl text-bold font-poppins text-center">
              Greetings
            </h1>
            <p className="text-bold text-base font-poppins">
              My Name is {personal.name}.
            </p>
            <p className="text-md lg:font-poppins lg:text-base font-roboto">
              {about.summary} I have mastered the MERN-stack and software
              engineering, Leveled-up every skill that is required to make
              websites, PWAs, mobile and desktop apps from scratch. Capable of solving/debugging complex
              problems and errors. I'm a fast learner ready to dive into other
              frameworks. I create websites/webApps that are fast and
              optimized with clean code according to best practices and
              pipelines. I'm a trilingual speaker ({about.languages.map(l => l.name).join(", ")}) with
              experience working with teams and developers. I'm fast and
              accurate with great hunger for knowledge and adventure.
            </p>
            <p className=" text-xl font-poppins ">
              Don't hesitate to contact me
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
