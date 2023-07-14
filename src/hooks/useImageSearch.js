import { useEffect, useState } from 'react';
import DefaultIcon from '../assets/images/Path_2202.png'

const useImageSearch = (imageName) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const jpgImage = await import(`../assets/images/${imageName}.png`)
          .then((module) => module.default)
          .catch(() => null);
        const svgImage = await import(`../assets/images/${imageName}.svg`)
          .then((module) => module.default)
          .catch(() => null);

        if (jpgImage) {
          setImageUrl(jpgImage);
        } else if (svgImage) {
          setImageUrl(svgImage);
        } else {
          setImageUrl(DefaultIcon);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchImage();
  }, [imageName]);

  return {imageUrl};
};

export default useImageSearch;
