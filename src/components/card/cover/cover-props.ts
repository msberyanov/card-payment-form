import { ImageType } from "./front/type/image-type";

export interface CoverProps {
  cardImage: ImageType;
  toggleImageType: () => void;
}
