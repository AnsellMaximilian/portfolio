import { Skill } from "./skill-schema";

export type SkillCategory = {
  _id: string;
  name: string;
  skills: Skill[];
};

const skillCategory = {
  name: "skillCategory",
  title: "SKill Categories",
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
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "skill" }],
        },
      ],
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      initialValue: 0,
    },
  ],
};

export default skillCategory;
