import HeroContainer from "@/components/HeroContainer";
import { fetchProjects } from "@/sanity/services";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await fetchProjects();
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
    </div>
  );
}
