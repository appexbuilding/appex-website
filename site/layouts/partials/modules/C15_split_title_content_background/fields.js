export default {
  label: "C15: Split Title with Content & Background",
  name: "C15_split_title_content_background",
  widget: "object",
  fields: [
    {
      label: "Disable Column",
      name: "disable_column",
      widget: "boolean",
      default: false,
      required: false,
    },
    {
      label: "Title",
      name: "title",
      widget: "string",
      required: true,
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
      label: "CTA Text",
      name: "cta_text",
      widget: "string",
      required: false,
    },
    {
      label: "CTA Link",
      name: "cta_link",
      widget: "string",
      required: false,
    },
  ],
};
