export default {
  label: "Statistics",
  name: "C11_statistics",
  widget: "object",
  fields: [
    {
      label: "Statistic Number 1",
      name: "stat_number_1",
      widget: "number",
      valueType: "float",
      required: true,
    },
    {
      label: "Statistic Type 1",
      name: "stat_type_1",
      widget: "string",
      required: true,
    },
    {
      label: "Info 1",
      name: "stat_info_1",
      widget: "markdown",
      required: true,
    },
    {
      label: "Statistic Number 2",
      name: "stat_number_2",
      widget: "number",
      valueType: "float",
      required: false,
    },
    {
      label: "Statistic Type 2",
      name: "stat_type_2",
      widget: "string",
      required: false,
    },
    {
      label: "Info 2",
      name: "stat_info_2",
      widget: "markdown",
      required: false,
    },
    {
      label: "Statistic Number 3",
      name: "stat_number_3",
      widget: "number",
      valueType: "float",
      required: false,
    },
    {
      label: "Statistic Type 3",
      name: "stat_type_3",
      widget: "string",
      required: false,
    },
    {
      label: "Info 3",
      name: "stat_info_3",
      widget: "markdown",
      required: false,
    },
  ],
};
