export default {
  label: "C21: Off Canvas Info",
  name: "C21_off_canvas_info",
  widget: "object",
  fields: [
    {
      label: "Title",
      name: "off_canvas_section_title",
      widget: "string",
      required: true,
    },
    {
      label: "Content",
      name: "off_canvas_section_content",
      widget: "markdown",
      required: true,
    },
    {
      label: "Button Text",
      name: "off_canvas_button_text",
      widget: "string",
      required: true,
    },
    {
      label: "Flip to Right",
      name: "off_canvas_flip",
      widget: "boolean",
      default: false,
    },
    {
      label: "Off Canvas Content",
      name: "off_canvas_content",
      widget: "object",
      allow_add: false,
      fields: [
        {
          label: "Off Canvas ID",
          name: "off_canvas_id",
          widget: "string",
          required: true,
        },
        {
          lable: "Off Canvas Title",
          name: "off_canvas_bar_title",
          widget: "string",
          reuired: false,
        },
        {
          label: "Off Canvas Content",
          name: "off_canvas_bar_content",
          widget: "markdown",
          required: true,
        },
      ],
    },
  ],
};
