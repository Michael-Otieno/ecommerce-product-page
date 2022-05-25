import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slideshow from './components/Slideshow/Slideshow';
import Details from './components/Details/Details';
import Addcart from './components/Addcart/Addcart';


import Preview from './components/Preview/Preview';

function App() {

  return (
    <div className="App">
      <Navbar 
      />
      <div className='desktop--page'>
        <Slideshow />
        <Preview />
        <div className='details--addcart--comp'
        >
          <Details />
          <Addcart
          />
        </div>
      </div>
      
    </div>
  );
}

export default App;


