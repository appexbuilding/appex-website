export default {
  label: "C17: Image Gallery",
  name: "C17_image_gallery",
  widget: "list",
  fields: [
    {
      label: "Add Gallery Image",
      name: "gallery",
      widget: "list",
      allow_add: true,
      fields: [
        {
          label: "Image",
          name: "gallery_image",
          widget: "image",
        },
      ],
    },
  ],
};
