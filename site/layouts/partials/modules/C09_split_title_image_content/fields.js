export default {
  label: "C09: Split Title with Content",
  name: "C09_split_title_image_content",
  widget: "object",
  fields: [
    {
      label: "Title",
      name: "title",
      widget: "string",
      required: true,
    },
    {
      label: "Image",
      name: "image",
      widget: "image",
      required: false,
    },
    {
      label: "Lead Text",
      name: "leadtext",
      widget: "markdown",
      required: false,
    },
    {
      label: "Content",
      name: "content",
      widget: "markdown",
      required: false,
    },
    {
      label: "CTA Link",
      name: "cta_link",
      widget: "string",
      required: false,
    },
    {
      label: "CTA Text",
      name: "cta_text",
      widget: "string",
      required: false,
    },
  ],
};
