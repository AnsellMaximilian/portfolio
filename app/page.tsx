import HeroContainer from "@/components/HeroContainer";
import { fetchProjects, fetchTechnologies } from "@/sanity/services";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await fetchProjects();
  const technologies = await fetchTechnologies();
  return (
    <div>
      <HeroContainer>
        <p className="text-3xl font-semibold id-gradient bg-clip-text text-transparent">
          Halo, nama saya
        </p>
        <h1 className="text-5xl font-semibold mb-2">Ansell Maximilian</h1>
        <p className="text-3xl">Web Developer</p>
      </HeroContainer>
      <div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center">Projects</h2>
          <div className="mt-8 grid grid-cols-12 gap-8">
            {projects.map((project) => {
              return (
                <Link
                  href={`/projects/${project.slug}`}
                  key={project._id}
                  className="col-span-12 lg:col-span-6 xl:col-span-4 overflow-hidden rounded shadow-md hover:scale-105 transition-all duration-100"
                >
                  {/* <h3>{project.name}</h3> */}
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1920}
                    height={1080}
                    className="w-full"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-32 bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center">Tools & Skills</h2>
          <div className="bg-[#121212] rounded-lg shadow-xl mt-8 p-8">
            <div className="flex flex-wrap gap-4 justify-between">
              {technologies.map((tech) => (
                <div
                  key={tech._id}
                  className="flex flex-col items-center justify-center gap-2 aspect-square w-28 h-28 bg-white rounded-md"
                >
                  <Image
                    src={tech.image}
                    width={50}
                    height={50}
                    alt={tech.image}
                  />
                  <h4 className="font-semibold">{tech.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
