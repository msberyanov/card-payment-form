import React, { useCallback, useState } from "react";
import { ImageType } from "./cover/front/type/image-type";
import "./card.css"
import "./cover/cover.css"
import { CardCover } from "./cover/front/card-cover";
import { CardBackCover } from "./cover/back/card-back-cover";

export const Card: React.FC = () => {
  const [imageType, setImageType] = useState<ImageType>("cat");

  const toggleImageType = useCallback(() => {
    setImageType(imageType === "dog" ? "cat": "dog");
  }, [imageType]);

  return (
    <div className="card">
      <CardCover cardImage={imageType}
                 toggleImageType={toggleImageType}/>
      <CardBackCover cardImage={imageType}
                     toggleImageType={toggleImageType}/>
    </div>
  );
}
