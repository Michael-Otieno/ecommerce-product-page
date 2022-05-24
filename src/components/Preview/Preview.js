import { useState } from "react";

import image0 from "../../images/image-product-1.jpg";
import image1 from "../../images/image-product-2.jpg";
import image2 from "../../images/image-product-3.jpg";
import image3 from "../../images/image-product-4.jpg";

import thumbnail0 from "../../images/image-product-1-thumbnail.jpg";
import thumbnail1 from "../../images/image-product-2-thumbnail.jpg";
import thumbnail2 from "../../images/image-product-3-thumbnail.jpg";
import thumbnail3 from "../../images/image-product-4-thumbnail.jpg";

import closeIcon from "../../images/icon-close.svg";
import nextIcon from "../../images/icon-next.svg";
import prevIcon from "../../images/icon-previous.svg";


import "./Preview.css";

export default function Preview() {
  const thumbnails = [thumbnail0, thumbnail1, thumbnail2, thumbnail3];
  const images = [image0, image1, image2, image3];
  const [activeImage, setActiveImage] = useState(0);

  return (
    <div className="preview-slider">
      <div className="preview-slider-image-btn">
        {/* close icon */}
        <img 
        className="closeIcon"
        src={closeIcon}
        alt="close icon"
        onClick={() =>
          (document.querySelector(".preview-slider").style.display = "none")
        }
        />
        {/* previous btn */}
        <button
        className="prevIconBtn"
        onClick={() => activeImage > 0 ? setActiveImage(activeImage-1) : setActiveImage(0)}
        >
          <img 
          src={prevIcon}
          alt="previous icon"  
          />
        </button>
        {/* active image */}
        <img
          src={images[activeImage]}
          className="desktop-preview-image"
          alt="product"
          
        />
        {/* next btn */}
        <button 
        className="nextIconBtn"
        onClick={() => activeImage < 3 ? setActiveImage(activeImage+1) : setActiveImage(3) }
        >
          <img 
          src={nextIcon}
          alt="next icon"
          />
        </button>
      </div>

      <div className="thumbnails">
        {thumbnails.map((thumbnail, index) => <img onClick={() => setActiveImage(index)} className={index === activeImage ? "thumbnail-prev active": "thumbnail-prev"} src={thumbnail} alt="product image" key={index} />)}
      </div>
    </div>
  );
}
