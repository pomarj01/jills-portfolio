import React from "react";

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
