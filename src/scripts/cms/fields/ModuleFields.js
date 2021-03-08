/*
 Field definitions are set in module_folder/fields.js
*/
const req = require.context("@modules", true, /.*\/fields.js/);
const modules = req.keys().map(req);

/**
 * A list of modules to blacklist and hide from the author.
 * Recommended to start by hiding all and only showing those needed
 * for your project.
 *
 * New modules that you add will always show, unless it is added
 * to this blacklist
 *
 * @type string[]
 */
const moduleBlacklist = [
  // "C01_accordion",
  // "C02_rich_text",
  // "C03_youtube",
  // "C04_image",
  "C05_show_hide",
  "C06_our_members",
  // "C07_form",
  // "C08_quote",
  // "C09_split_title_image_content",
  // "C10_spotlight_image_content",
  "C11_statistics",
  // "C12_pillar_content_cards",
  // "C13_callout_image_text_cta",
  "C14_youtube_with_quote",
  // "C15_split_title_content_background",
  "C16_our_board",
  "C17_image_gallery",
  // "C18_pdf_downloads",
  "C19_feature_cards",
  "C20_filter",
  "C21_off_canvas_info",
  "C22_countdown",
  "C23_image_overlay",
  "C24_lightbox",
];

export default [
  {
    label: "Modules",
    name: "modules",
    widget: "list",
    types: modules
      .filter((module) => module.default)
      .filter((module) => !moduleBlacklist.includes(module.default.name))
      .map((module) => module.default),
  },
];
