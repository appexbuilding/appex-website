export default {
  label: "C12: Pillar Content - Card, Image & Description",
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
      label: "Card Image 1",
      name: "card_image_1",
      widget: "image",
      required: true,
    },
    {
      label: "Card Title 1",
      name: "card_title_1",
      widget: "string",
      required: true,
    },
    {
      label: "Card Description 1",
      name: "card_description_1",
      widget: "markdown",
      required: true,
    },
    {
      label: "Card Image 2",
      name: "card_image_2",
      widget: "image",
      required: false,
    },
    {
      label: "Card Title 2",
      name: "card_title_2",
      widget: "string",
      required: false,
    },
    {
      label: "Card Description 2",
      name: "card_description_2",
      widget: "markdown",
      required: false,
    },
    {
      label: "Card Image 3",
      name: "card_image_3",
      widget: "image",
      required: false,
    },
    {
      label: "Card Title 3",
      name: "card_title_3",
      widget: "string",
      required: false,
    },
    {
      label: "Card Description 3",
      name: "card_description_3",
      widget: "markdown",
      required: false,
    },
  ],
};
