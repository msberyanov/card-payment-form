export const IMAGE_TYPES = ["cat", "dog", "kitty", "parrot"] as const;

export type ImageType = typeof IMAGE_TYPES[number];

// export const imageTypesIterator = IMAGE_TYPES[Symbol.iterator]();
//
// imageTypesIterator.next();

let imageTypeIndex = 0;

export const nextImageType = () => {
  imageTypeIndex = (imageTypeIndex + 1) % IMAGE_TYPES.length;

  return IMAGE_TYPES[imageTypeIndex];
}
