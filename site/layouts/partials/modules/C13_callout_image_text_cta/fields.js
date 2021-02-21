export default {
  label: "C13: Call Out with Image, text & CTA",
  name: "C13_callout_image_text_cta",
  widget: "object",
  fields: [
    {
      label: "Call Out Image",
      name: "callout_image",
      widget: "image",
      required: true,
    },
    {
      label: "Call Out Title",
      name: "callout_title",
      widget: "string",
      required: true,
    },
    {
      label: "Call Out Description",
      name: "callout_description",
      widget: "markdown",
      required: true,
    },
    {
      label: "Call Out CTA Link",
      name: "callout_cta_link",
      widget: "string",
      required: false,
    },
    {
      label: "Call Out CTA Text",
      name: "callout_cta_text",
      widget: "string",
      required: false,
    },
  ],
};
