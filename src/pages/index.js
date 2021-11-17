import * as React from "react";
import { Helmet } from "react-helmet";
import App from "./App";
import "../styles/index.css";
import { headTags } from "../utils";
import favicon from "../assets/favicon/favicon.ico";
import favicon_16x16 from "../assets/favicon/favicon-16x16.png";
import favicon_32x32 from "../assets/favicon/favicon-32x32.png";
import favicon_apple_touch from "../assets/favicon/apple-touch-icon.png";
import android_192x192 from "../assets/favicon/android-chrome-192x192.png";


const IndexPage = ({ location }) => (
  <>
    <Helmet
      title={headTags.title}
      meta={[
        { charset: "utf-8" },
        { name: "description", content: `${headTags.meta.description}`, },
        { name: "type", content: "website" },
        { name: "keywords", content: `${headTags.meta.keywords}` },
        { property: "og:locale", content: "en_US" },
        { property: "og:type", content: "website" },
        { property: "og:title", content: `${headTags.title}` },
        { property: "og:description", content: `${headTags.meta.description}` },
        { property: "og:url", content: `${headTags.website}` },
      ]}
      link={[
        { rel: "canonical", href: `${headTags.website}` },
        { rel: "icon", type: "image/png", href: `${favicon}` },
        { rel: "icon", type: "image/png", size: "16x16", href: `${favicon_16x16}`, },
        { rel: "icon", type: "image/png", size: "32x32", href: `${favicon_32x32}`, },
        { rel: "icon", type: "image/png", size: "72x72", href: `${favicon_apple_touch}`, },
        { rel: "icon", type: "image/png", size: "192x192", href: `${android_192x192}`, },
      ]}
    />

    <App location={location} />
  </>
);

export default IndexPage;
