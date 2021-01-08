import React from "react";
import CMS from "netlify-cms-app";
import { nl } from 'netlify-cms-locales';

CMS.registerLocale('nl', nl);

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PagePreview from "./cms-preview-templates/page";
import ContactPreview from "./cms-preview-templates/contact";
import BannersPreview from "./cms-preview-templates/banners";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("nieuws", PagePreview);
CMS.registerPreviewTemplate("teams", PagePreview);
CMS.registerPreviewTemplate("clubinfo", PagePreview);
CMS.registerPreviewTemplate("lidmaatschap", PagePreview);
CMS.registerPreviewTemplate("privacy", PagePreview);
CMS.registerPreviewTemplate("supportersvereniging", PagePreview);
CMS.registerPreviewTemplate("afgelastingen", PagePreview);
CMS.registerPreviewTemplate("routebeschrijving", PagePreview);
CMS.registerPreviewTemplate("oud-papier", PagePreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("banners", BannersPreview);
// sponsoring
// banners
CMS.init();
