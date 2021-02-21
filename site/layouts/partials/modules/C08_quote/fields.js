export default {
  label: "C08: Quote",
  name: "C08_quote",
  widget: "object",
  fields: [
    {
      label: "Quote Text",
      name: "quote_text",
      widget: "markdown",
    },
    {
      label: "Quote Author",
      name: "quote_author",
      widget: "string",
      required: false,
    },
  ],
};
