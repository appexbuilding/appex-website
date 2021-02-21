export default {
  label: "C06: Our Members",
  name: "C06_our_members",
  widget: "list",
  fields: [
    { label: "Title", name: "our_members_title", widget: "string", default: "Our Members", required: true },
    { label: "Description", name: "our_members_description", widget: "markdown", default: "Description goes here" },
    {
      label: "Member",
      name: "member",
      widget: "list",
      allow_add: true,
      fields: [
        { label: "Our Member Image", name: "our_member_image", widget: "image" },
        { label: "Our Member Link", name: "our_member_link", widget: "string" },
      ],
    },
  ],
};
