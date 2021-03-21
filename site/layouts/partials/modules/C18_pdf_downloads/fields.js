export default {
  label: "PDF Downloads",
  name: "C18_pdf_downloads",
  widget: "list",
  fields: [
    {
      label: "Heading",
      name: "pdf_downloads_heading",
      widget: "string",
      default: "Download resources",
    },
    {
      label: "PDF Download List",
      name: "pdf_downloads_list",
      widget: "list",
      allow_add: true,
      fields: [
        {
          label: "PDF Heading",
          name: "pdf_downloads_list_heading",
          widget: "string",
          required: false,
        },
        {
          label: "PDF File",
          name: "pdf_downloads_list_file",
          widget: "file",
          required: true,
        },
        {
          label: "PDF Text",
          name: "pdf_downloads_list_text",
          widget: "string",
          required: false,
        },
      ],
    },
  ],
};
