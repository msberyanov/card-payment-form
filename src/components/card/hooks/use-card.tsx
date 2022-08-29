import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ImageType, nextImageType } from "../type/image-type";
import "./../card.css"
import "./../cover/cover.css"
import { CardCover } from "../cover/front/card-cover";
import { CardBackCover } from "../cover/back/card-back-cover";
import { tuple } from "../../../utils/tuple";
import { ImageTypeProps } from "../type/image-type-props";

export const useCard = () => {
  const [imageType, setImageType] = useState<ImageType>("cat");

  const toggleImageType = useCallback(() => {
    const followingImageType = nextImageType();

    console.log(followingImageType);

    setImageType(followingImageType);
  }, []);

  useEffect(() => {
    setTimeout(() => document.documentElement.style.setProperty("--cover-background", ImageTypeProps[imageType].background), 200);
  }, [imageType]);

  const Card = useMemo(() => (
    <div className="card">
      <CardCover cardImage={imageType}
                 toggleImageType={toggleImageType}/>
      <CardBackCover cardImage={imageType}/>
    </div>
  ), [imageType, toggleImageType]);

    return tuple(Card);
}
