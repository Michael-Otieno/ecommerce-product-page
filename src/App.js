import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slideshow from './components/Slideshow/Slideshow';
import Details from './components/Details/Details';
import Addcart from './components/Addcart/Addcart';


import { useState } from "react";

function App() {
  const [item, setItem] = useState(0);
  const [price, setPrice] = useState(125);

  function addItem(){
    setPrice(125 + price)
    setItem(item+1)

  }

  function subtractItem(){
    if(item===0){
      return
    }
    setPrice(price-125)
    setItem(item-1)

  }

  function addToCart(){
    console.log('cart')
  }


  return (
    <div className="App">
      <Navbar 
      // item={item}
      // addToCart={addToCart}
      />
      <Slideshow 
      
      />
      <Details />
      <Addcart
      item={item}
      price={price}
      subtractItem={subtractItem}
      addItem={addItem}
      addToCart={addToCart}
       />
    </div>
  );
}

export default App;


