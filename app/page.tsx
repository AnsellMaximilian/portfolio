import CertificationList from "@/components/CertificationList";
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
        <p className="text-3xl font-semibold id-gradient bg-clip-text text-transparent">
          Halo, nama saya
        </p>
        <h1 className="text-5xl font-semibold mb-2">Ansell Maximilian</h1>
        <p className="text-3xl">Web Developer</p>
      </HeroContainer>
      <div>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center">
            Featured Projects
          </h2>
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
      <div className="mt-32 bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center">Tools & Skills</h2>
          <div className="grid grid-cols-12 gap-4 mt-8">
            {skillCategories.map((cat, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={cat._id}
                  className={`bg-gradient-to-br from-primary-base to-primary-light col-start-1 col-end-13 ${
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
                            className="w-8 md:w-12"
                          />
                          <h4 className="font-semibold text-sm md:text-base">
                            {skill.name}
                          </h4>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <Wave
                    className="fill-gray-100"
                    direction={isEven ? "to left" : "to right"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center">Certifications</h2>
          <div className="mt-8">
            <CertificationList certifications={certifications} />
          </div>
        </div>
      </div>
    </div>
  );
}
