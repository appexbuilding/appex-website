export default {
  label: "C14: Youtube with Quote",
  name: "C14_youtube_with_quote",
  widget: "object",
  fields: [
    {
      label: "Youtube ID",
      name: "youtube_quote_id",
      widget: "string",
      required: false,
      default: "mgS9BizFeYE",
    },
    {
      label: "Quote Text",
      name: "youtube_quote_text",
      widget: "markdown",
    },
    {
      label: "Quote Author",
      name: "youtube_quote_author",
      widget: "string",
    },
  ],
};
