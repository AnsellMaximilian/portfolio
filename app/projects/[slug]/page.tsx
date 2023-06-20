import HeroContainer from "@/components/HeroContainer";
import { fetchProject, fetchProjects } from "@/sanity/services";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { FaGithub as GithubLogo } from "react-icons/fa";

type Props = {
  params: { slug: string };
};

export default async function Home({ params: { slug } }: Props) {
  const project = await fetchProject(slug);
  return (
    <div>
      <HeroContainer>
        <div className="grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-8">
          <div className="col-span-12 lg:col-span-6 row-start-2 lg:row-start-1">
            <h1 className="text-5xl font-semibold mb-2">{project.name}</h1>
            <p className="text-xl">{project.description}</p>
            <div className="mt-4 flex gap-4">
              {project.liveUrl && (
                <a
                  target="_blank"
                  href={project.liveUrl}
                  className="btn-primary flex items-center"
                >
                  View Live
                </a>
              )}
              {project.articleUrl && (
                <a
                  target="_blank"
                  href={project.articleUrl}
                  className="btn-primary--outline flex items-center"
                >
                  <span>Visit Article</span>
                </a>
              )}
              {project.repoUrl && (
                <a
                  target="_blank"
                  href={project.repoUrl}
                  className="btn-primary--outline flex items-center gap-2"
                >
                  <span>View Repo</span>
                  <GithubLogo size={20} />
                </a>
              )}
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 row-start-1">
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
          <h2 className="text-4xl font-bold text-center">
            About {project.name}
          </h2>
          <div className="mt-8 text-xl text-justify">
            <PortableText
              value={project.content}
              components={{
                block: {
                  h3: ({ children }) => (
                    <h3 className="text-3xl mb-4 font-bold">{children}</h3>
                  ),
                  normal: ({ children }) => (
                    <p className="text-xl mb-4">{children}</p>
                  ),
                },
                list: {
                  number: ({ children }) => (
                    <ol className="text-xl mb-4 list-decimal list-outside pl-8 space-y-4">
                      {children}
                    </ol>
                  ),
                  bullet: ({ children }) => (
                    <ul className="text-xl mb-4 list-disc list-outside pl-8 space-y-4">
                      {children}
                    </ul>
                  ),
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
