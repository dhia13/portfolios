import SingleSkill from "./SingleSkill";

function MySkills() {
  const skills = [
    {
      img: "images/css3.png",
      title: "CSS3",
    },
    {
      img: "images/html5.png",
      title: "HTML5",
    },
    {
      img: "images/javascript.png",
      title: "JavaScript",
    },
    {
      img: "images/react.png",
      title: "React/React-Native",
    },
    {
      img: "images/redux.png",
      title: "Redux",
    },
    {
      img: "images/nextjs.png",
      title: "NextJs",
    },
    {
      img: "images/tailwind.png",
      title: "TailWind",
    },
    {
      img: "images/api.png",
      title: "Apis",
    },
    {
      img: "images/git.png",
      title: "Git",
    },
    {
      img: "images/github1.png",
      title: "Github",
    },
    {
      img: "images/express.png",
      title: "Express",
    },
    {
      img: "images/typescript.png",
      title: "TypeScript",
    },
    {
      img: "images/node.png",
      title: "Node",
    },
    {
      img: "images/mongo.png",
      title: "MongoDb",
    },
    {
      img: "images/mysql.png",
      title: "MySQL",
    },
  ];
  return (
    <div className="flex justify-center items-center w-screen h-full  flex-col">
      <div
        className="h-[500px] flex justify-center items-center flex-wrap w-[250px] overflow-scroll overflow-x-hidden
            sm:w-[500px] md:w-[500px] lg:w-[800px] lg:overflow-hidden z-50 bg-green=300"
      >
        {skills.map((skill) => (
          <div key={skill.title} className="w-[200px] h-[60px] my-1">
            <SingleSkill title={skill.title} img={skill.img} />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center z-50">
        <p className="text-white mt-[20px] text-xl font-poppins ">
          And so much more
        </p>
      </div>
    </div>
  );
}

export default MySkills;
