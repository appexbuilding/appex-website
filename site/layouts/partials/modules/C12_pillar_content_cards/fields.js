export default {
  label: "Pillar Content - Card, Image & Description",
  name: "C12_pillar_content_cards",
  widget: "object",
  fields: [
    {
      label: "Intro Title",
      name: "intro_title",
      widget: "string",
      required: true,
    },
    {
      label: "Intro Description",
      name: "intro_description",
      widget: "markdown",
      required: true,
    },
    {
      label: "Content Cards",
      name: "content_card",
      widget: "list",
      allow_add: true,
      fields: [
        {
          label: "Card Image",
          name: "content_card_image",
          widget: "image",
          required: true,
        },
        {
          label: "Card Title",
          name: "content_card_title",
          widget: "string",
          required: true,
        },
        {
          label: "Card Description",
          name: "content_card_description",
          widget: "markdown",
          required: true,
        },
        {
          label: "Card Link",
          name: "content_card_link",
          widget: "string",
          required: false,
        },
        {
          label: "Card CTA Text",
          name: "content_card_cta",
          widget: "string",
          required: false,
        },
      ],
    },
  ],
};
