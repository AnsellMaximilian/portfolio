import HeroContainer from "@/components/HeroContainer";
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
      <HeroContainer>
        <div className="grid grid-cols-12 gap-8">
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
      </HeroContainer>
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
