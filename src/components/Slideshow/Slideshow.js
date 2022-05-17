import { useState, useEffect, useRef } from "react"

import image0 from "../../images/image-product-1.jpg";
import image1 from "../../images/image-product-2.jpg";
import image2 from "../../images/image-product-3.jpg";
import image3 from "../../images/image-product-4.jpg";

import thumbnail0 from "../../images/image-product-1-thumbnail.jpg";
import thumbnail1 from "../../images/image-product-2-thumbnail.jpg";
import thumbnail2 from "../../images/image-product-3-thumbnail.jpg";
import thumbnail3 from "../../images/image-product-4-thumbnail.jpg";

import './Slideshow.css';

import prevBtn from "../../images/icon-next.svg";
import nextBtn from "../../images/icon-previous.svg";



export default function Slideshow({imgs}){
  imgs = [
    image0,image1,image2,image3
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [])

  const next = () => {
    if(index===imgs.length-1){
      setIndex(0)
    }else{
      setIndex(index + 1)
    }
  }

  const prev = () => {
    if(index === 0){
      setIndex(imgs.length-1)
    }else{
      setIndex(index-1)
    }
  }

  
  return (
    <div className="phone--slideshow">
      <img 
        src={imgs[index]}
        className='img'
        />
      <div>
        <img 
        src={nextBtn}
        onClick={next}
        className="nextBtn"
        />
        <img 
        src={prevBtn}
        onClick={prev}
        className="prevBtn"
        />
        
      </div>
    </div>
  )
}








// <div className='button-2-container'>
//         {[0, 1, 2, 3].map(num => (
//           <div
//             className={`button-2 ${num === current && 'active'}`}
//             onClick={desired}
//             id={num}
//             key={num}
//           />
//         ))}
//       </div>