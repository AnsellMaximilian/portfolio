import Header from "@/components/Header";
import HeroContainer from "@/components/HeroContainer";
import ScreenshotList from "@/components/ScreenshotList";
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
    <>
      <Header
        links={[
          { label: "About", href: "#about" },
          { label: "Tech Stack", href: "#tech-stack" },
          { label: "Screenshots", href: "#screenshots" },
        ]}
      />
      <main>
        <HeroContainer>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <h1 className="text-5xl font-semibold mb-2">{project.name}</h1>
              <p className="text-xl">{project.description}</p>
              <div className="mt-4 flex gap-4 flex-wrap">
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
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
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
        <div id="about">
          <div className="container mx-auto px-4 xl:max-w-5xl">
            <h2 className="text-4xl font-bold text-center">
              About {project.name}
            </h2>
            <div className="mt-8 text-xl text-justify">
              <PortableText
                value={project.content}
                components={{
                  marks: {
                    link: ({ children, value }) => (
                      <a
                        href={value.href}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        {children}
                      </a>
                    ),
                  },

                  block: {
                    blockquote: ({ children }) => (
                      <blockquote className="bg-slate-100 flex">
                        <div className="bg-slate-200 w-4"></div>
                        <div className="px-2 py-6"> {children}</div>
                      </blockquote>
                    ),
                    h1: ({ children }) => (
                      <h3 className="text-4xl mb-4 font-bold">{children}</h3>
                    ),
                    h2: ({ children }) => (
                      <h3 className="text-3xl mb-4 font-bold">{children}</h3>
                    ),
                    h3: ({ children }) => (
                      <h3 className="text-2xl mb-4 font-bold">{children}</h3>
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

        <div
          className="mt-32 bg-gray-100 bg-[url('/bg.png')] bg-repeat"
          id="tech-stack"
        >
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center">
              Tools & Technologies Used
            </h2>
            <ul className="bg-gradient-to-b from-primary-base to-primary-light mt-8 grid grid-cols-12 gap-4 py-8 px-4">
              {project.skills.map((skill) => (
                <li
                  key={skill._id}
                  className="col-span-6 sm:col-span-4 xl:col-span-3"
                >
                  <div className="bg-white flex items-center gap-4 p-4">
                    <Image
                      src={skill.image}
                      width={50}
                      height={50}
                      alt={skill.image}
                      className="w-8 md:w-10"
                    />
                    <h4 className="font-semibold text-sm md:text-base">
                      {skill.name}
                    </h4>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {project.screenshots && (
          <div className="mt-8 py-16" id="screenshots">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl font-bold text-center">Screenshots</h2>
              <div className="mt-8">
                {project.screenshots.length > 0 ? (
                  <ScreenshotList screenshots={project.screenshots} />
                ) : (
                  <p className="font-medium text-xl">
                    No screenshots available.
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
