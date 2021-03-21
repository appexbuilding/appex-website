export default [
  {label: "Publish Date", name: "date", widget: "datetime"},
  {label: "Intro Blurb", name: "description", widget: "text"},
  {label: "Project Type", name: "project_type", widget: "string"},
  {
    label: "Image", name: "image", widget: "image", required: true,
  },
  {label: "Body", name: "body", widget: "markdown"},
];
