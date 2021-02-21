export default {
  label: "C22: Countdown",
  name: "C22_countdown",
  widget: "object",
  fields: [
    {
      label: "Countdown Text",
      name: "countdown_text",
      widget: "string",
      required: false,
    },
    {
      label: "Countdown Expiry Date",
      name: "countdown_date",
      widget: "datetime",
      required: true,
    },
  ],
};
