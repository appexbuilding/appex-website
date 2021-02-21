export default {
  label: "C24: Lightbox",
  name: "C24_lightbox",
  widget: "object",
  fields: [
    {
      label: "Lightbox Id",
      name: "lightbox_id",
      widget: "string",
      required: true,
    },
    {
      label: "Title",
      name: "lightbox_section_title",
      widget: "string",
      required: true,
    },
    {
      label: "Content",
      name: "lightbox_section_content",
      widget: "markdown",
      required: true,
    },
    {
      label: "Button Text",
      name: "lightbox_button_text",
      widget: "string",
      required: true,
    },
    {
      label: "Animation Type",
      name: "lightbox_animation",
      widget: "select",
      options: ["slide", "fade", "scale"],
      required: true,
    },
    {
      label: "Lightbox Content",
      name: "lightbox_content",
      widget: "list",
      allow_add: true,
      required: true,
      types: [
        {
          label: "LB01: Image",
          name: "LB01_image",
          widget: "object",
          fields: [
            {
              label: "Image",
              name: "lb01_image",
              widget: "image",
              required: true,
            },
            {
              label: "Caption",
              name: "lb01_caption",
              widget: "string",
              required: false,
            },
          ],
        },
        {
          label: "LB02: Video",
          name: "LB02_video",
          widget: "object",
          fields: [
            {
              label: "Upload or Choose Video",
              name: "lb02_video",
              widget: "file",
              required: true,
            },
            {
              label: "Caption",
              name: "lb02_caption",
              widget: "string",
              required: false,
            },
          ],
        },
        {
          label: "LB03: Youtube",
          name: "LB03_youtube",
          widget: "object",
          fields: [
            {
              label: "Youtube ID",
              name: "lb03_youtube_id",
              widget: "string",
              required: true,
            },
            {
              label: "Caption",
              name: "lb03_caption",
              widget: "string",
              required: false,
            },
          ],
        },
        {
          label: "LB04: Vimeo",
          name: "LB04_vimeo",
          widget: "object",
          fields: [
            {
              label: "Vimeo ID",
              name: "lb04_vimeo_id",
              widget: "string",
              required: true,
            },
            {
              label: "Caption",
              name: "lb04_caption",
              widget: "string",
              required: false,
            },
          ],
        },
      ],
    },
  ],
};
