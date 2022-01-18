import merge from "lodash/merge";
import find from "lodash/find";
import { images } from "../components/images/collection";

export const getImageURL = (toRender) => {
  const imageList = images;
  const url = toRender.map((img) => {
    return merge(img, find(imageList, { name: img.name }));
  });

  return url;
};
