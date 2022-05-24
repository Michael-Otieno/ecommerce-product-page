import { useState } from "react";

import image0 from "../../images/image-product-1.jpg";
import image1 from "../../images/image-product-2.jpg";
import image2 from "../../images/image-product-3.jpg";
import image3 from "../../images/image-product-4.jpg";

import thumbnail0 from "../../images/image-product-1-thumbnail.jpg";
import thumbnail1 from "../../images/image-product-2-thumbnail.jpg";
import thumbnail2 from "../../images/image-product-3-thumbnail.jpg";
import thumbnail3 from "../../images/image-product-4-thumbnail.jpg";

import './DesktopSlider.css';

export default function DesktopSlider(){

  const thumbnails = [thumbnail0,thumbnail1,thumbnail2,thumbnail3]
  const images = [image0,image1,image2,image3]
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="desktop-slider">
      <img 
      src={images[activeImage]} 
      className="desktop--product--image"
      alt="product"
      />
      <div className="product-thumbnails">
        {thumbnails.map((thumbnail, index) => <img onClick={() => setActiveImage(index)} 
        className={index === activeImage ? "thumbnail active" : "thumbnail" }
        src={thumbnail} alt="product" key={index}
        />
        )}
      </div>
    </div>
  )
}