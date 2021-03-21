export default {
  label: "C05 Show Hide",
  name: "C05_show_hide",
  widget: "list",
  fields: [
    { label: "Title", name: "showhide_title", widget: "string", required: true },
    { label: "Description", name: "showhide_description", widget: "markdown", required: false },
    {
      label: "Show Hide Section",
      name: "showhide",
      widget: "list",
      allow_add: true,
      fields: [{ label: "Content", name: "showhide_content", widget: "markdown" }],
    },
  ],
};
