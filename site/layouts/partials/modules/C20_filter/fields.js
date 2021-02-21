export default {
  label: "C20: Filter",
  name: "C20_filter",
  widget: "list",
  fields: [
    {
      label: "Title",
      name: "filter_title",
      widget: "string",
      required: true,
    },
    {
      label: "Intro",
      name: "filter_intro",
      widget: "markdown",
      required: false,
    },
    {
      label: "Filter Cards",
      name: "filter_card",
      widget: "list",
      allow_add: true,
      fields: [
        {
          label: "Card Category",
          name: "filter_card_category",
          widget: "select",
          required: true,
          options: ["blue", "green", "purple"],
        },
        {
          label: "Card Image",
          name: "filter_card_image",
          widget: "image",
          required: true,
        },
        {
          label: "Card Description",
          name: "filter_card_description",
          widget: "string",
          required: true,
        },
        {
          label: "Card Link",
          name: "filter_card_link",
          widget: "string",
          required: false,
        },
        {
          label: "Card CTA Text",
          name: "filter_card_cta",
          widget: "string",
          required: false,
        },
      ],
    },
  ],
};
