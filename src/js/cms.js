import React from "react";
import CMS from "netlify-cms-app";
import { nl } from 'netlify-cms-locales';

CMS.registerLocale('nl', nl);

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PagePreview from "./cms-preview-templates/page";
import ContactPreview from "./cms-preview-templates/contact";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("nieuws", PagePreview);
CMS.registerPreviewTemplate("teams", PagePreview);
CMS.registerPreviewTemplate("pages", PagePreview);
CMS.registerPreviewTemplate("site/content", PagePreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
// sponsoring
// banners
CMS.init();
