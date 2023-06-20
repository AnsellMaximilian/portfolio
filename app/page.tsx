import CertificationList from "@/components/CertificationList";
import Contacts from "@/components/Contacts";
import HeroContainer from "@/components/HeroContainer";
import Wave from "@/components/Wave";
import {
  fetchCertifications,
  fetchProjects,
  fetchSkillCategories,
  fetchSkills,
} from "@/sanity/services";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await fetchProjects();
  const technologies = await fetchSkills();
  const skillCategories = await fetchSkillCategories();
  const certifications = await fetchCertifications();
  return (
    <div>
      <HeroContainer>
        <div className="flex gap-12 md:gap-8 items-center flex-col lg:flex-row">
          <div className="whitespace-nowrap w-full">
            <p className="text-xl lg:text-3xl xl:text-4xl font-semibold text-gray-300">
              Halo, nama saya
            </p>
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-2 md:mb-4">
              Ansell Maximilian
            </h1>
            <p className="text-xl lg:text-3xl xl:text-4xl">
              Web and Systems Developer
            </p>
          </div>
          <div>
            <p className="mb-4">
              I am a developer based in Indonesia. I graduated with a
              Bachelor&apos;s in Information Systems and taught myself how to
              code, especially using web technologies. I love using my skills to
              solve problems.
            </p>
            <div className="flex gap-4 items-center">
              <a
                href="#contact-section"
                className="bg-white text-black hover:bg-gray-300 border-2 border-white px-4 py-2 font-bold hover:border-gray-300 transition-all duration-100"
              >
                Say Hello
              </a>
              <a
                href="#projects"
                className="hover:bg-gray-300 border-2 border-white px-4 py-2 font-bold hover:border-gray-300 transition-all duration-100 hover:text-black"
              >
                Projects
              </a>
            </div>
          </div>
        </div>
      </HeroContainer>
      <div>
        <div className="container mx-auto px-4" id="projects">
          <h2 className="text-4xl font-bold text-center">Featured Projects</h2>
          <div className="mt-8 grid grid-cols-12 gap-4 md:gap-8">
            {projects.map((project) => {
              return (
                <Link
                  href={`/projects/${project.slug}`}
                  key={project._id}
                  className="col-span-12 lg:col-span-6 xl:col-span-4 overflow-hidden rounded shadow-md hover:scale-105 transition-all duration-100 max-w-full"
                >
                  {/* <h3>{project.name}</h3> */}
                  <Image
                    src={project.image}
                    alt={project.name}
                    width={1920}
                    height={1080}
                    className="w-full max-w-full"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="mt-32 bg-gray-100 py-16 bg-[url('/bg.png')] bg-repeat">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center">Tools & Skills</h2>
          <div className="grid grid-cols-12 gap-8 mt-16 md:mt-32">
            {skillCategories.map((cat, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={cat._id}
                  className={`bg-gradient-to-b from-primary-base to-primary-light col-start-1 col-end-13 shadow-lg pb-10 md:pb-16 mt-0 md:-mt-16 ${
                    isEven
                      ? "md:col-start-1 md:col-end-11 lg:col-end-9"
                      : "md:col-end-13 md:col-start-3 lg:col-start-5"
                  }`}
                >
                  <h3 className="text-white p-4 font-semibold">{cat.name}</h3>
                  <ul className="grid grid-cols-12 gap-4 px-4 pb-4">
                    {cat.skills.map((skill) => (
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
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center">Certifications</h2>
          <div className="mt-8">
            <CertificationList certifications={certifications} />
          </div>
        </div>
      </div>

      <div
        className="text-white bg-primary-base py-24 bg-[url('/bg-dark.png')] bg-repeat"
        id="contact-section"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center">Get in Touch</h2>
          <div className="mt-8">
            <div className="flex justify-center">
              <Contacts />
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gradient-to-b to-primary-base from-primary-light text-gray-300 p-4">
        <div className="flex justify-center gap-8 container mx-auto items-center text-sm">
          <span>Ansell Maximilian &middot; {new Date().getFullYear()}</span>
          <Image src="/logo.svg" alt="Personal Logo" width={40} height={40} />
          <span>All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
