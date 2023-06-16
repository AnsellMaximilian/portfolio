import { fetchProject, fetchProjects } from "@/sanity/services";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { slug: string };
};

export default async function Home({ params: { slug } }: Props) {
  const project = await fetchProject(slug);
  return (
    <div>
      <div className="text-white bg-gradient-to-b from-[#121212] to-[#3d3d3d] pt-24">
        <div className="container mx-auto px-4 py-32 grid grid-cols-12 gap-8">
          <div className="col-span-6">
            <h1 className="text-5xl font-semibold mb-2">{project.name}</h1>
            <p className="text-xl">{project.description}</p>
            <div className="mt-4 flex gap-4">
              {project.liveUrl && (
                <a
                  target="_blank"
                  href={project.liveUrl}
                  className="btn-primary align-middle"
                >
                  View Live
                </a>
              )}
              {project.articleUrl && (
                <a
                  target="_blank"
                  href={project.articleUrl}
                  className="btn-primary--outline"
                >
                  <span>Visit Article</span>
                </a>
              )}
            </div>
          </div>
          <div className="col-span-6">
            <Image
              src={project.image}
              alt={project.name}
              width={1920}
              height={1080}
              className="w-full"
            />
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            className="fill-white"
            fillOpacity="1"
            d="M0,64L1440,224L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center">
            About {project.name}
          </h2>
          <div className="mt-8 text-xl text-justify">
            <PortableText value={project.content} />
          </div>
        </div>
      </div>
    </div>
  );
}
