import { pageStaticInfo } from "./data";
export const variables = {
  appVersion: "1.0.0",
  APP_NAME: "Siam's Portfolio PWA",
  APP_DEFAULT_TITLE: "Siam's Portfolio PWA App",
  APP_TITLE_TEMPLATE: "%s - Siam's Portfolio PWA",
  APP_DESCRIPTION:
    "Siam's Portfolio PWA is a review aggregation app for video games",

  defaultMetaContent: {
    title: "Siam's Portfolio",
    description:
      "Siam's Portfolio is a review aggregation app for video games.",
    url: process.env.SITE_URL,
    openGraphImages: ["/og-image.png"],
    keywords: ["Criticplex", "Review", "Critics"],
  },

  apiUrls: {
    redirectUrl: "",

    navigation: `${process.env.BASE_URL}/navigation`,
  },

  ...pageStaticInfo,
};
