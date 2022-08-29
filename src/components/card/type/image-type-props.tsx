import { ImageType } from "./image-type";

type ImageTypePropsType = {
  [type in ImageType]: {
    background: string;
  }
}

export const ImageTypeProps: ImageTypePropsType = {
  "cat": {
    background: "linear-gradient(270deg, #bc4ebd, #217aab)"
  },
  "dog": {
    background: "linear-gradient(270deg, #4aaf90, #22739f)"
  },
  "kitty": {
    background: "linear-gradient(270deg, #65bd39, #bb6d37)"
  },
  "parrot": {
    background: "linear-gradient(270deg, #49b685, #0c848f)"
  },
}
