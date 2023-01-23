import { useEffect, useState } from "react";
import Box from "./common/Box";

const PosterImage = ({ src }) => {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return (
    <>
      {imageSrc ? (
        <img src={src} alt="poster" />
      ) : (
        <Box width={180} height={240} />
      )}
    </>
  );
};

export default PosterImage;
