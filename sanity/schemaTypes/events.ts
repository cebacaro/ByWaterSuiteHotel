import { defineType, defineField } from "sanity";
import { UserIcon } from "lucide-react";

export const event = defineType({
  name: "event", // Schema name must match the reference
  title: "Events",
  type: "document",
  icon: UserIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "description",
      type: "text",
      title: "Description",
      validation: (rule) => rule.required().min(10).max(500),
    }),
    defineField({
      name: "image",
      type: "image",
      
    }),
    
  ],
  preview: {
    select: {
      title: "title", // Use the "title" field for previews
      subtitle: "description", // Use the "description" field for subtitles
    },
  },
});
