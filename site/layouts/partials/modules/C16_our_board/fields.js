export default {
  label: "C16: Our Board",
  name: "C16_our_board",
  widget: "list",
  fields: [
    {
      label: "Title",
      name: "our_board_title",
      widget: "string",
      default: "Our Board",
      required: true,
    },
    {
      label: "Description",
      name: "our_board_description",
      widget: "markdown",
      default: "Description goes here",
      required: false,
    },
    {
      label: "Board",
      name: "board",
      widget: "list",
      allow_add: true,
      fields: [
        {
          label: "Board Name",
          name: "our_board_name",
          widget: "string",
          required: true,
        },
        {
          label: "Board Image",
          name: "our_board_image",
          widget: "image",
          required: true,
        },
        {
          label: "Board Title",
          name: "our_board_title",
          widget: "string",
          required: true,
        },
        {
          label: "Board Quote",
          name: "our_board_quote",
          widget: "string",
          required: false,
        },
        {
          label: "Board Description",
          name: "our_board_description",
          widget: "markdown",
          required: false,
        },
        {
          label: "Board LinkedIn",
          name: "our_board_linkedin",
          widget: "string",
          required: false,
        },
      ],
    },
  ],
};
