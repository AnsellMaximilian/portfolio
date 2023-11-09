import { Project } from "./project-schema";

export type Hackathon = {
  _id: string;
  image?: string;
  name: string;
  announcementUrl?: string;
  articleUrl?: string;
  slug: string;
  description: string;
  project: Project;
  featured: boolean;
  winner: boolean;
  placement: string;
};

const hackathon = {
  name: "hackathon",
  title: "Hackathons",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string",
        },
      ],
    },
    {
      name: "announcementUrl",
      title: "Announcement URL",
      type: "url",
    },
    {
      name: "articleUrl",
      title: "Article URL",
      type: "url",
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "winner",
      title: "Winner",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "placement",
      title: "Placement",
      type: "string",
    },

    {
      name: "project",
      title: "Project",
      type: "reference",
      to: [{ type: "project" }],
    },
  ],
};

export default hackathon;
