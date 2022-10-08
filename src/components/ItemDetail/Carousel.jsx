import { useState } from "react";

const Carousel = ({ images }) => {
  const [actualImage, setActualImage] = useState(0);
  const qty = images?.length;

  if (!Array.isArray(images) || qty === 0) return;

  const nextImage = () => {
    setActualImage(actualImage === qty - 1 ? 0 : actualImage + 1);
  };

  const previousImagen = () => {
    setActualImage(actualImage === 0 ? qty - 1 : actualImage - 1);
  };

  return (
    <div className="w-full">
      {images.map((imagen, index) => {
        return (
          <div>
            {actualImage === index && (
              <img
                className="pb-2 w-full xl:h-128 rounded-t-lg"
                key={index}
                src={imagen}
                alt="imagen"
              />
            )}
          </div>
        );
      })}
      <div className="flex justify-center">
        <button className="bg-cristal px-5 mx-5" onClick={previousImagen}>
          ←
        </button>
        <button className="bg-cristal px-5 mx-5" onClick={nextImage}>
          →
        </button>
      </div>
    </div>
  );
};

export default Carousel;
