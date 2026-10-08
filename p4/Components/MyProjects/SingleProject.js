const SingleProject = ({ projectData }) => {
  console.log(projectData.picture);
  return (
    <div
      className={`w-[350px] h-[250px] bg-soon bg-cover bg-center rounded-md flex justify-center items-start relative m-10 z-50`}
    >
      <div className="flex items-center justify-center z-60 my-10 cursor-pointer">
        <h1 className="font-pressStart font-normal text-base whitespace-nowrap text-green-400 hover:text-white hover:drop-shadow-glow">
          {projectData.title}
        </h1>
      </div>
      <div className="flex absolute bottom-4 right-[130px] gap-4">
        <a
          href={projectData.gitRepo}
          className="w-[32px] h-[32px] rounded-full hover:drop-shadow-glow cursor-pointer flex justify-center items-center"
        >
          <img src="./images/github.png" className="w-[32px] h-[32px]" />
        </a>
        <a
          href={projectData.liveLink}
          className="w-[32px] h-[32px] rounded-full hover:drop-shadow-glow cursor-pointer flex justify-center items-center"
        >
          <img src="./images/globe.png" className="w-[32px] h-[32px]" />
        </a>
      </div>
    </div>
  );
};

export default SingleProject;

{
  /* <div className="absolute bottom-4 right-4 w-[32px] h-[32px] bg-blue-200 rounded-full hover:bg-gray-500  cursor-pointer flex justify-center items-center">
        <img src="./images/expand.png" className="w-[24px] h-[24px]" />
      </div> */
}
