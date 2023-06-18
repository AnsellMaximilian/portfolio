import { groq } from "next-sanity";
import { clientFetch } from "./config";
import { Project } from "./schemas/project-schema";
import { Skill } from "./schemas/skill-schema";
import { SkillCategory } from "./schemas/skill-category-schema";
import { Certification } from "./schemas/certification-schema";

export async function fetchProjects(): Promise<Project[]> {
  return clientFetch(
    groq`*[_type == "project"]{
          _id,
          name,
          "slug": slug.current,
          "image": image.asset->url,
          liveUrl,
          articleUrl,
          videoUrl,
          content,
          description
        }`
  );
}

export async function fetchProject(slug: string): Promise<Project> {
  return clientFetch(
    groq`*[_type == "project" && slug.current == $slug]{
            _id,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            liveUrl,
            articleUrl,
            videoUrl,
            content,
            description

          }[0]`,
    { slug }
  );
}

export async function fetchSkills(): Promise<Skill[]> {
  return clientFetch(
    groq`*[_type == "skill"]{
          _id,
          name,
          "slug": slug.current,
          "image": image.asset->url,
        }`
  );
}

export async function fetchSkillCategories(): Promise<SkillCategory[]> {
  return clientFetch(
    groq`*[_type == "skillCategory"] | order(order){
          _id,
          name,
          skills[]->{
            _id,
            name,
            "slug": slug.current,
            "image": image.asset->url,
          }
        }`
  );
}

export async function fetchCertifications(): Promise<Certification[]> {
  return clientFetch(
    groq`*[_type == "certification"]{
          _id,
          name,
          "image": image.asset->url,
          description,
          "slug": slug.current,
          organization

        }`
  );
}
