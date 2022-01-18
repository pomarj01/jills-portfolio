// Separated this collection of shapes, images and icons into its own file
// Created using Map function to easily cherry pick which item is needed
// Each function retrieves an item's value by key (param) from a Map by using the get() method

import { getImageURL } from "../../helpers/getImageURL";

const renderShapes = [
  { name: "oblongs" },
  { name: "eclipses" },
  { name: "big_waves" },
  { name: "double_waves" },
  { name: "square_dots" },
  { name: "filled_oblongs" },
  { name: "triangle_circle" },
  { name: "circledLines_dots" },
  { name: "double_chevrons" },
  { name: "rounded_wave" },
  { name: "multiple_shapes" },
];

const renderImages = [
  { name: "logo" },
  { name: "waitron_dashboard" },
  { name: "fb_landing" },
  { name: "fb_register" },
  { name: "heattech" },
  { name: "heattech_2" },
  { name: "dev_illustration" },
  { name: "des_illustration" },
  { name: "dev_monitor" },
  { name: "des_monitor" },
  { name: "full_dev_illustration" },
  { name: "full_des_illustration" },
  { name: "footer_wave" },
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
  { name: "cloud_light" },
  { name: "github_dark" },
  { name: "github_light" },
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
  { name: "taskboard_light" },
  { name: "ci_cd_light" },
  { name: "database_light" },
  { name: "terminal_light" },
  { name: "code_light" },
  { name: "ruler_dark" },
  { name: "grid_dark" },
  { name: "crop_dark" },
  { name: "scale_dark" },
  { name: "typography_dark" },
  { name: "heart" },
  { name: "linkedIn" },
  { name: "github_icon" },
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
  setOfShapes.set(list[8].name, list[8].url);
  setOfShapes.set(list[9].name, list[9].url);
  setOfShapes.set(list[10].name, list[10].url);

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
  setOfImages.set(list[9].name, list[9].url);
  setOfImages.set(list[10].name, list[10].url);
  setOfImages.set(list[11].name, list[11].url);
  setOfImages.set(list[12].name, list[12].url);

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
  setOfIcons.set(list[24].name, list[24].url);
  setOfIcons.set(list[25].name, list[25].url);
  setOfIcons.set(list[26].name, list[26].url);
  setOfIcons.set(list[27].name, list[27].url);
  setOfIcons.set(list[28].name, list[28].url);
  setOfIcons.set(list[29].name, list[29].url);
  setOfIcons.set(list[30].name, list[30].url);
  setOfIcons.set(list[31].name, list[31].url);
  setOfIcons.set(list[32].name, list[32].url);
  setOfIcons.set(list[33].name, list[33].url);
  setOfIcons.set(list[34].name, list[34].url);

  return setOfIcons.get(icon);
};
