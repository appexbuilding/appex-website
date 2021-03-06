export default {
  label: "Form",
  name: "C07_form",
  widget: "object",
  fields: [
    { label: "Form Id", name: "form_id", widget: "string", required: true },
    { label: "Title", name: "form_title", widget: "string", required: true },
    { label: "Lead", name: "form_lead", widget: "string", required: false },
    { label: "Description", name: "form_description", widget: "markdown", required: false },
    {
      label: "Form Components",
      name: "components",
      widget: "list",
      allow_add: true,
      types: [
        {
          label: "FC01: Email",
          name: "FC01_email",
          widget: "object",
          fields: [
            { label: "Email Field ID", name: "email_id", widget: "string", required: true },
            { label: "Email Label", name: "email_label", widget: "string", required: true },
            { label: "Placeholder Text", name: "email_placeholder", widget: "string", required: true },
            { label: "Required", name: "email_required", widget: "boolean", required: false },
            { label: "Error Message", name: "email_error_message", widget: "string", required: true },
          ],
        },
        {
          label: "FC02: Text Input",
          name: "FC02_text_input",
          widget: "object",
          fields: [
            { label: "Text Field ID", name: "text_field_id", widget: "string", required: true },
            { label: "Text Input Label", name: "text_input_label", widget: "string", required: true },
            { label: "Placeholder Text", name: "text_input_placeholder", widget: "string", required: true },
            { label: "Required", name: "text_input_required", widget: "boolean", required: false },
            { label: "Error Message", name: "text_field_error_message", widget: "string", required: true },
            { label: "Min Characters", name: "text_field_min_char", widget: "number", value_type: "int", required: true },
            { label: "Max Characters", name: "text_field_max_char", widget: "number", value_type: "int", required: true },
          ],
        },
        {
          label: "FC03: Text Area",
          name: "FC03_text_area",
          widget: "object",
          fields: [
            { label: "Text Area ID", name: "text_area_id", widget: "string", required: true },
            { label: "Text Area Label", name: "text_area_label", widget: "string", required: true },
            { label: "Placeholder Text", name: "text_area_placeholder", widget: "string", required: true },
            { label: "Required", name: "text_area_required", widget: "boolean", required: false },
            { label: "Error Message", name: "text_area_error_message", widget: "string", required: true },
            { label: "Max Characters", name: "text_area_max_char", widget: "number", value_type: "int", required: true },
          ],
        },
        {
          label: "FC04: Radio Buttons",
          name: "FC04_radio_buttons",
          widget: "object",
          fields: [
            { label: "Radio Buttons ID", name: "radio_buttons_id", widget: "string", required: true },
            { label: "Radio Buttons Label", name: "radio_buttons_label", widget: "string", required: true },
            { label: "Required", name: "radio_buttons_required", widget: "boolean", required: false },
            { label: "Error Message", name: "radio_button_error_message", widget: "string", required: true },
            {
              label: "Radio Button Options",
              name: "radio_options",
              widget: "list",
              allow_add: true,
              fields: [{ label: "Option Text", name: "option_text", widget: "string", required: true }],
            },
          ],
        },
        {
          label: "FC05: Checkboxes",
          name: "FC05_checkbox",
          widget: "object",
          fields: [
            { label: "Checkboxes ID", name: "checkbox_id", widget: "string", required: true },
            { label: "Checkboxes Label", name: "checkbox_label", widget: "string", required: true },
            { label: "Required", name: "checkbox_required", widget: "boolean", required: false },
            { label: "Number of Choices Required", name: "checkbox_num_choices", widget: "number", value_type: "int", required: false },
            { label: "Required Error Message", name: "checkbox_error_message", widget: "string", required: true },
            { label: "Number of Choices Error Message", name: "checkbox_num_choice_error", widget: "string", required: true },
            {
              label: "Checkbox Options",
              name: "checkbox_options",
              widget: "list",
              allow_add: true,
              fields: [{ label: "Option Text", name: "option_text", widget: "string", required: true }],
            },
          ],
        },
        {
          label: "FC06: Select List",
          name: "FC05_select",
          widget: "object",
          fields: [
            { label: "Select ID", name: "select_id", widget: "string", required: true },
            { label: "Select Label", name: "select_label", widget: "string", required: true },
            { label: "Required", name: "select_required", widget: "boolean", required: false },
            { label: "Error Message", name: "select_error_message", widget: "string", required: true },
            {
              label: "Select Options",
              name: "select_options",
              widget: "list",
              allow_add: true,
              fields: [
                { label: "Option ID", name: "option_id", widget: "string", required: true },
                { label: "Option Text", name: "option_text", widget: "string", required: true },
              ],
            },
          ],
        },
        {
          label: "FC07: Date Picker",
          name: "FC07_date_picker",
          widget: "object",
          fields: [
            { label: "Date Picker ID", name: "date_picker_id", widget: "string", required: true },
            { label: "Date Picker Label", name: "date_picker_label", widget: "string", required: true },
            { label: "Required", name: "date_picker_required", widget: "boolean", required: false },
            { label: "Error Message", name: "date_picker_error_message", widget: "string", required: true },
          ],
        },
        {
          label: "FC08: File Upload",
          name: "FC08_file_upload",
          widget: "object",
          fields: [
            { label: "File Upload ID", name: "file_upload_id", widget: "string", required: true },
            { label: "File Upload Label", name: "file_upload_label", widget: "string", required: true },
            { label: "Required", name: "file_upload_required", widget: "boolean", required: false },
            { label: "Placeholder Text", name: "file_upload_placeholder", widget: "string", required: true },
            { label: "Error Message", name: "file_upload_error_message", widget: "string", required: true },
            { label: "Max File Size (in MB)", name: "max_file_size", widget: "number", value_type: "int", required: true },
          ],
        },
      ],
    },
  ],
};
