import { variables } from "@static/variables";

type Props = {
  title?: any;
  description?: string;
  OGUrl?: string;
  type?: string;
  keywords?: string[];
  openGraphImages?: any;
};

export const metaDataGenerator = ({
  title,
  description,
  OGUrl,
  type,
  keywords,
  openGraphImages,
}: Props) => {
 
  return {
    applicationName: variables.APP_NAME,
    manifest: "/manifest.json",
    title:  title ?? {
      absolute: variables.defaultMetaContent.title,
    },
    description: description ?? variables.defaultMetaContent.description,
    OGUrl: OGUrl ?? variables.defaultMetaContent.url,
    locale: "en_US",
    type: type ?? "website",
    category: "gaming",
    keywords: keywords ?? variables.defaultMetaContent.keywords,
    metadataBase: new URL(`${process.env.SITE_URL}`),
    openGraph: {
      title: variables.defaultMetaContent.title,
      description: variables.defaultMetaContent.description,
      url: variables.defaultMetaContent.url,
      siteName: variables.defaultMetaContent.title,
      images: openGraphImages ?? [],
    },
    icons: {
      icon: "/icon.png",
      shortcut: "/icon.png",
      apple: "/apple-touch-icon.png",
      other: {
        rel: "apple-touch-icon-precomposed",
        url: "/apple-touch-icon.png",
      },
    },
    appLinks: {
      web: {
        url: new URL(`${process.env.SITE_URL}`) ,
        should_fallback: true,
      },
      // ios: {
      //   url: 'https://nextjs.org/ios',
      //   app_store_id: 'app_store_id',
      // },
      // android: {
      //   package: 'com.example.android/package',
      //   app_name: 'app_name_android',
      // },
    },
  };
};
