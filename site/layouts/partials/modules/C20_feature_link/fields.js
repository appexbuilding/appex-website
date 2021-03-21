export default {
  label: "Feature Link",
  name: "C20_feature_link",
  widget: "list",
  fields: [
    {
      label: "Feature Link",
      name: "feature_link",
      widget: "string",
      required: true,
    },
    {
      label: "Feature Title",
      name: "feature_link_title",
      widget: "string",
      required: false,
    },
    {
      label: "Feature Description",
      name: "feature_link_description",
      widget: "string",
      required: false,
    },
  ],
};
