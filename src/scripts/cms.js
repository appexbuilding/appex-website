import React from "react";
import CMS, {init} from "netlify-cms-app";
import cloudinary from "netlify-cms-media-library-cloudinary";

import {
  ModuleFields, SEOFields, SettingsFields, BannerFields, ArticleFields,
} from "./cms/";

// Import main site styles as a string to inject into the CMS preview pane
// eslint-disable-next-line import/no-unresolved,import/no-webpack-loader-syntax
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!webpack-import-glob-loader!../scss/main.scss";

window.CMS_MANUAL_INIT = true;

init({
  config: {
    backend: {
      name: "git-gateway",
    },
    load_config_file: false,
    media_folder: "site/static/img",
    public_folder: "img",
    collections: [
      {
        name: "pages",
        label: "Pages",
        folder: "site/content",
        create: true,
        editor: {
          preview: false,
        },
        slug: "{{fields.title}}",
        fields: [{
          label: "Title", name: "title", widget: "string", required: true,
        }, ...SEOFields, ...BannerFields, ...ModuleFields],
      },
      {
        name: "projects",
        label: "Projects",
        folder: "site/content/projects",
        create: true,
        editor: {
          preview: false,
        },
        slug: "{{fields.title}}",
        fields: [{
          label: "Title", name: "title", widget: "string", required: true,
        }, ...SEOFields, ...BannerFields, ...ArticleFields, ...ModuleFields],
      },
      {
        name: "settings",
        label: "Global Settings",
        folder: "site/content/settings",
        slug: "settings",
        editor: {
          preview: false,
        },
        fields: [...SettingsFields],
      },
    ],
  },
});

CMS.registerMediaLibrary(cloudinary);
CMS.registerPreviewStyle(styles, {raw: true});
