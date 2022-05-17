import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slideshow from './components/Slideshow/Slideshow';


import image0 from "./images/image-product-1.jpg";
import image1 from "./images/image-product-2.jpg";
import image2 from "./images/image-product-3.jpg";
import image3 from "./images/image-product-4.jpg";

import thumbnail0 from "./images/image-product-1-thumbnail.jpg";
import thumbnail1 from "./images/image-product-2-thumbnail.jpg";
import thumbnail2 from "./images/image-product-3-thumbnail.jpg";
import thumbnail3 from "./images/image-product-4-thumbnail.jpg";


function App() {

  return (
    <div className="App">
      <Navbar 
      />
      <Slideshow 
      
      />
    </div>
  );
}

export default App;


// ,image1,image2,image3,thumbnail0,thumbnail1,thumbnail2,thumbnail3