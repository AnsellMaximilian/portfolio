import { groq } from "next-sanity";
import { clientFetch } from "./config";
import { Project } from "./schemas/project-schema";
import { Technology } from "./schemas/technology-schema";

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

export async function fetchTechnologies(): Promise<Technology[]> {
  return clientFetch(
    groq`*[_type == "technology"]{
          _id,
          name,
          "slug": slug.current,
          "image": image.asset->url,
        }`
  );
}
