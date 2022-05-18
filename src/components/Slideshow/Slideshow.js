import { useState, useEffect, useRef } from "react"

import image0 from "../../images/image-product-1.jpg";
import image1 from "../../images/image-product-2.jpg";
import image2 from "../../images/image-product-3.jpg";
import image3 from "../../images/image-product-4.jpg";


import './Slideshow.css';

import prevBtn from "../../images/icon-next.svg";
import nextBtn from "../../images/icon-previous.svg";

import Details from '../Details/Details'


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
    <div>
      <div className="phone--page">
        <img 
        src={imgs[index]}
        className='img'
        alt="images"
        />
        <div>
          <img 
          src={nextBtn}
          onClick={next}
          className="nextBtn"
          alt="next icon"
          />
          <img 
          src={prevBtn}
          onClick={prev}
          className="prevBtn"
          alt="previous icon"
          />       
        </div>

        <div className="desktop--page">
        <div className="desktop--shoe--slider">
          <Details />
        </div>
        <div className="desktop--shoe--detail">
          nnnnn
        </div>

      </div>
      </div>
      {/* <div className="desktop--page">
        <div className="desktop--shoe--slider">
          <Carousel />
        </div>
        <div className="desktop--shoe--detail">
          nnnnn
        </div>

      </div> */}
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