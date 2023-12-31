import CertificationList from "@/components/CertificationList";
import Contacts from "@/components/Contacts";
import HackathonList from "@/components/HackathonList";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HeroContainer from "@/components/HeroContainer";
import SectionHeader from "@/components/SectionHeader";
import SkillsList from "@/components/SkillsList";
import Socials from "@/components/Socials";
import { fetchProjects, fetchSkillCategories } from "@/sanity/services";
import Image from "next/image";
import Link from "next/link";
import { AiTwotoneTrophy as Trophy } from "react-icons/ai";

export default async function Home() {
  const projects = await fetchProjects();
  const skillCategories = await fetchSkillCategories();
  return (
    <>
      <Header
        links={[
          { label: "Projects", href: "#projects" },
          { label: "Contacts", href: "#contact-section" },
        ]}
      />
      <main>
        <HeroContainer>
          <Hero />
        </HeroContainer>
        <div>
          <div className="container mx-auto px-4" id="projects">
            <SectionHeader
              title="Featured Projects"
              subtitle="Some of my projects"
            />
            <div className="mt-8 grid grid-cols-12 gap-4 md:gap-8">
              {projects.map((project) => {
                return (
                  <Link
                    href={`/projects/${project.slug}`}
                    key={project._id}
                    className="col-span-12 lg:col-span-6 xl:col-span-4 overflow-hidden rounded shadow-md hover:scale-105 transition-all duration-100 max-w-full group relative"
                  >
                    {/* <h3>{project.name}</h3> */}
                    <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 bg-[rgba(0,0,0,0.8)] text-white absolute inset-0 transition-all duration-200">
                      <div className="p-4 text-center">
                        <h3 className="font-semibold text-xl">
                          {project.name}
                        </h3>
                        <p>{project.shortDescription}</p>
                      </div>
                    </div>
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
            <SectionHeader
              title="Tools & Skills"
              subtitle="Technologies I've Used, Skills I Possess"
            />
            <div className="mt-16 md:mt-32">
              <SkillsList skillCategories={skillCategories} />
            </div>
          </div>
        </div>

        <div>
          <Socials />
        </div>

        {/* <div className="mt-8 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center">Certifications</h2>
            <div className="mt-8">
              <CertificationList certifications={certifications} />
            </div>
          </div>
        </div> */}

        <div className="mt-8 py-16">
          <div className="container mx-auto px-4">
            <SectionHeader
              title="Hackathons"
              subtitle="Some hackathons I've won"
            />
            <div className="mt-8">
              <HackathonList />
            </div>
            {/* <div className="mt-4 text-center">
              <button className="font-semibold hover:text-slate-600">
                View More
              </button>
            </div> */}
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
      </main>
    </>
  );
}
