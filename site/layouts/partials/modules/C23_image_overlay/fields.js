export default {
  label: "C23: Image With Overlay",
  name: "C23_image_overlay",
  widget: "object",
  fields: [
    {
      label: "Image with Overlay Id",
      name: "image_overlay_id",
      widget: "string",
      required: true,
    },
    {
      label: "Image",
      name: "image_to_display",
      widget: "image",
      required: true,
    },
    {
      label: "Image Alt Text",
      name: "image_alt",
      widget: "string",
      required: true,
    },
    {
      label: "Overlay Text",
      name: "overlay_text",
      widget: "string",
      required: true,
    },
    {
      label: "Overlay Background",
      name: "overlay_background",
      widget: "select",
      options: ["light", "bold"],
      required: true,
    },
    {
      label: "Overlay Position",
      name: "overlay_position",
      widget: "select",
      options: ["bottom", "top", "left", "right"],
      required: true,
    },
    {
      label: "Image Primary Tone",
      name: "image_primary_tone",
      widget: "select",
      options: ["light", "dark"],
      required: true,
    },
    {
      label: "Cover Entire Image",
      name: "image_cover",
      widget: "boolean",
      required: false,
    },
  ],
};
