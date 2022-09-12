import { Cloudinary } from "@cloudinary/url-gen";

import { fill } from "@cloudinary/url-gen/actions/resize";

// Create a Cloudinary instance and set your cloud name.
const cloudinary = new Cloudinary({
  cloud: {
    cloudName: "mywiseassistant",
    apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
    apiSecret: process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET,
  },
});

export const getImageUrl = (path: string, width?: number, height?: number) => {
  const image = cloudinary.image(`GrandImprovements/${path}`);
  if (width && height) image.resize(fill().width(width).height(height));
  return image.format("webp").toURL();
};

export default cloudinary;
