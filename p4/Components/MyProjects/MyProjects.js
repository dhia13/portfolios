import Image from "next/image";
import profileData from "../../profile.json";

function MyProjects() {
  const { projects } = profileData;

  // Map project IDs to image paths (fallback to default images if not available)
  const projectImages = {
    'careme': '/images/healthier.png',
    'bistrodz': '/images/events.png',
    'dopm': '/images/livraison.png',
    'construction': '/images/events.png',
    'pdfextractor': '/images/soon.png',
    'hermeslib': '/images/soon.png',
    'geodetection': '/images/soon.png',
    'qct': '/images/Qcs.png'
  };

  return (
    <div className="w-full h-full bg-green-300 z-50">
      <h1 className="text-xl font-pressStart text-white z-50 ml-10 mt-10">
        Projects/Products
      </h1>
      <div className="m-auto h-[calc(100%-200px)] w-[90%] flex flex-wrap mt-[50px] justify-center items-center overflow-x-hidden overflow-y-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`w-[350px] h-[400px] border-white border bg-black bg-cover bg-center rounded-md flex flex-col justify-between items-center m-10 z-50 relative overflow-hidden`}
          >
            {projectImages[project.id] && (
              <div className="absolute top-0 left-0 w-full h-full z-10 opacity-30">
                <Image
                  src={projectImages[project.id]}
                  alt={project.title}
                  width={350}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            )}
            <div className="flex flex-col items-center justify-center z-20 mt-4 px-4 text-center">
              <h1 className="font-pressStart font-normal text-base whitespace-nowrap text-green-400 hover:text-white hover:drop-shadow-glow cursor-pointer">
                {project.title}
              </h1>
              {project.subtitle && (
                <p className="font-pressStart text-xs text-gray-400 mt-2">
                  {project.subtitle}
                </p>
              )}
            </div>
            <div className="flex absolute bottom-10 right-[50%] translate-x-[50%] gap-4 z-30">
              {project.link && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.link}
                  className="w-[32px] h-[32px] rounded-full hover:drop-shadow-glow cursor-pointer flex justify-center items-center bg-black/50 backdrop-blur-sm"
                >
                  <img src="/images/github.png" className="w-[32px] h-[32px]" alt="GitHub" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
