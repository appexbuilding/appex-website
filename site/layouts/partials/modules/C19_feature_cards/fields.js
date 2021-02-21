export default {
  label: "C19: Feature Cards",
  name: "C19_feature_cards",
  widget: "list",
  fields: [
    {
      label: "Title",
      name: "feat_card_title",
      widget: "string",
      required: true,
    },
    {
      label: "Intro",
      name: "feat_card_intro",
      widget: "markdown",
      required: false,
    },
    {
      label: "Feature Cards",
      name: "feat_card",
      widget: "list",
      allow_add: true,
      fields: [
        {
          label: "Card Image",
          name: "feat_card_image",
          widget: "image",
          required: true,
        },
        {
          label: "Card Description",
          name: "feat_card_description",
          widget: "string",
          required: true,
        },
        {
          label: "Card Link",
          name: "feat_card_link",
          widget: "string",
          required: false,
        },
        {
          label: "Card CTA Text",
          name: "feat_card_cta",
          widget: "string",
          required: false,
        },
      ],
    },
  ],
};
