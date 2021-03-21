export default {
  label: "Rich Text",
  name: "C02_rich_text",
  widget: "object",
  fields: [
    {
      label: "Content", name: "rich_text_content", widget: "markdown", required: true,
    },
    {
      label: "Line Break", name: "line_break", widget: "boolean", default: false, required: false,
    },
    {
      label: "Small Container", name: "small_container", widget: "boolean", default: false, required: false,
    },
  ],
};
