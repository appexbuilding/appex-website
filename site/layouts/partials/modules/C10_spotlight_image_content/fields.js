export default {
  label: "Spotlight with Image & Content",
  name: "C10_spotlight_image_content",
  widget: "object",
  fields: [
    {
      label: "Image",
      name: "image",
      widget: "image",
    },
    {
      label: "Title 1",
      name: "title1",
      widget: "string",
      required: true,
    },
    {
      label: "Content 1",
      name: "content1",
      widget: "markdown",
      required: true,
    },
    {
      label: "Title 2",
      name: "title2",
      widget: "string",
      required: false,
    },
    {
      label: "Content 2",
      name: "content2",
      widget: "markdown",
      required: false,
    },
  ],
};
