import { ImageType } from "../type/image-type";

export interface CoverProps {
  cardImage: ImageType;
  toggleImageType?: () => void;
}
