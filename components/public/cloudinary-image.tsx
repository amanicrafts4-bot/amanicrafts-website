"use client"; // This directive is required

import { CldImage, CldImageProps } from "next-cloudinary";

export default function CloudinaryImage(props: CldImageProps) {
  return <CldImage {...props} />;
}
