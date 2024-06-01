import { useState } from "react";
import PropTypes from "prop-types";
import "./ImageHover.css";

const ImageHover = ({ images }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="image-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`img-${index}`}
          className={`image ${
            hoveredIndex === index
              ? "hovered"
              : hoveredIndex !== null
              ? "shrink"
              : ""
          }`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
};

ImageHover.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ImageHover;
