import React from "react";
import Layout from "./src/components/layout";

("use strict");

// Create portal DOM element
export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <div
      key={pluginOptions.key ? pluginOptions.key : "modal"}
      id={pluginOptions.id ? pluginOptions.id : "modal"}
    >
      {pluginOptions.text}
    </div>,
  ]);
};

// Wrapping Layout page element across the site
export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};
