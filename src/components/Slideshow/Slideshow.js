import { useState, useEffect} from "react"

import image0 from "../../images/image-product-1.jpg";
import image1 from "../../images/image-product-2.jpg";
import image2 from "../../images/image-product-3.jpg";
import image3 from "../../images/image-product-4.jpg";

import './Slideshow.css';

import prevBtn from "../../images/icon-next.svg";
import nextBtn from "../../images/icon-previous.svg";

import DesktopSlider from "../DesktopSlider/DesktopSlider";



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
    <div className="slideshow-margin-spacer">
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

      </div>
      <div className="desktop-slider">
        <DesktopSlider />
      </div>
    </div>
  )
}



