import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  image: string;
  name: string;
  liveUrl?: string;
  articleUrl?: string;
  repoUrl?: string;
  videoUrl?: string;
  slug: string;
  content: PortableTextBlock[];
  description: string;
};

const project = {
  name: "project",
  title: "Projects",
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
      name: "liveUrl",
      title: "Live URL",
      type: "url",
    },
    {
      name: "repoUrl",
      title: "Repo URL",
      type: "url",
    },
    {
      name: "videoUrl",
      title: "Video URL",
      type: "url",
    },
    {
      name: "articleUrl",
      title: "Article URL",
      type: "url",
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "technology" }],
        },
      ],
    },
  ],
};

export default project;
