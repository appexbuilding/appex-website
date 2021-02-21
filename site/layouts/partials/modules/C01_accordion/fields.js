export default {
  label: "C01 Accordion",
  name: "C01_accordion",
  widget: "list",
  fields: [
    { label: "Allow Multiple Open", name: "allowMultiple", widget: "boolean", default: false, required: false },
    {
      label: "Accordion Dropdowns",
      name: "dropdowns",
      widget: "list",
      allow_add: true,
      fields: [
        { label: "Title", name: "title", widget: "string", required: true },
        { label: "Content", name: "content", widget: "markdown", required: true },
      ],
    },
  ],
};
