// Separated this collection of shapes, images and icons into its own file
// Created using Map function to easily cherry pick which item is needed
// Each function retrieves an item's value by key (param) from a Map by using the get() method

import { getImageURL } from "../../utils";

const renderShapes = [
  { name: "oblongs" },
  { name: "eclipses" },
  { name: "big_waves" },
  { name: "double_waves" },
  { name: "square_dots" },
  { name: "filled_oblongs" },
  { name: "triangle_circle" },
  { name: "circledLines_dots" },
];

const renderImages = [
  { name: "waitron_dashboard" },
  { name: "fb_landing" },
  { name: "fb_register" },
  { name: "heattech" },
  { name: "heattech_2" },
  { name: "dev_illustration" },
  { name: "des_illustration" },
  { name: "dev_monitor" },
  { name: "des_monitor" },
];

const renderIcons = [
  { name: "monitor_dark" },
  { name: "palette_dark" },
  { name: "pen_dark" },
  { name: "vector_dark" },
  { name: "wireframe_dark" },
  { name: "ab_testing_light" },
  { name: "ab_testing_dark" },
  { name: "cloud_dark" },
  { name: "github_dark" },
  { name: "js_dark" },
  { name: "js_light" },
  { name: "code_dark" },
  { name: "planet" },
  { name: "paint_roller" },
  { name: "spaceship" },
  { name: "letterJ" },
  { name: "letterP" },
  { name: "browser_light" },
  { name: "html_light" },
  { name: "css_light" },
  { name: "ruler_dark" },
  { name: "grid_dark" },
  { name: "crop_dark" },
  { name: "scale_dark" },
];

export const shapes = (shape) => {
  const list = getImageURL(renderShapes);
  const setOfShapes = new Map();

  setOfShapes.set(list[0].name, list[0].url);
  setOfShapes.set(list[1].name, list[1].url);
  setOfShapes.set(list[2].name, list[2].url);
  setOfShapes.set(list[3].name, list[3].url);
  setOfShapes.set(list[4].name, list[4].url);
  setOfShapes.set(list[5].name, list[5].url);
  setOfShapes.set(list[6].name, list[6].url);
  setOfShapes.set(list[7].name, list[7].url);

  return setOfShapes.get(shape);
};

export const images = (image) => {
  const list = getImageURL(renderImages);
  const setOfImages = new Map();

  setOfImages.set(list[0].name, list[0].url);
  setOfImages.set(list[1].name, list[1].url);
  setOfImages.set(list[2].name, list[2].url);
  setOfImages.set(list[3].name, list[3].url);
  setOfImages.set(list[4].name, list[4].url);
  setOfImages.set(list[5].name, list[5].url);
  setOfImages.set(list[6].name, list[6].url);
  setOfImages.set(list[7].name, list[7].url);
  setOfImages.set(list[8].name, list[8].url);

  return setOfImages.get(image);
};

export const icons = (icon) => {
  const list = getImageURL(renderIcons);
  const setOfIcons = new Map();

  setOfIcons.set(list[0].name, list[0].url);
  setOfIcons.set(list[1].name, list[1].url);
  setOfIcons.set(list[2].name, list[2].url);
  setOfIcons.set(list[3].name, list[3].url);
  setOfIcons.set(list[4].name, list[4].url);
  setOfIcons.set(list[5].name, list[5].url);
  setOfIcons.set(list[6].name, list[6].url);
  setOfIcons.set(list[7].name, list[7].url);
  setOfIcons.set(list[8].name, list[8].url);
  setOfIcons.set(list[9].name, list[9].url);
  setOfIcons.set(list[10].name, list[10].url);
  setOfIcons.set(list[11].name, list[11].url);
  setOfIcons.set(list[12].name, list[12].url);
  setOfIcons.set(list[13].name, list[13].url);
  setOfIcons.set(list[14].name, list[14].url);
  setOfIcons.set(list[15].name, list[15].url);
  setOfIcons.set(list[16].name, list[16].url);
  setOfIcons.set(list[17].name, list[17].url);
  setOfIcons.set(list[18].name, list[18].url);
  setOfIcons.set(list[19].name, list[19].url);
  setOfIcons.set(list[20].name, list[20].url);
  setOfIcons.set(list[21].name, list[21].url);
  setOfIcons.set(list[22].name, list[22].url);
  setOfIcons.set(list[23].name, list[23].url);


  return setOfIcons.get(icon);
};
