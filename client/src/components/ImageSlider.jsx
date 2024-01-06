import React from 'react';

const ImageSlider = ({ images }) => {
  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img key={index} src={image.url} alt={`${index}`}  />
      ))}
    </div>
  );
};

export default ImageSlider;
