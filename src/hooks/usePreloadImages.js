import { useEffect } from "react";

const usePreloadImages = (images = []) => {
  useEffect(() => {
    images.forEach((src) => {
      if (!src) return;
      const img = new Image();
      img.src = src;
    });
  }, [images]);
};

export default usePreloadImages;
