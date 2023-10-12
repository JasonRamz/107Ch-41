import './App.css';
import {React} from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";



function App() {
  return (
      <div className="App">
        <Navbar/>
        <Catalog/>
        <Footer/>
      </div>
  );
}

export default App;

//React-> SPA single page application -> components
//state Variables is global and immutable 
// const[ name,setName*is a functions*]
//useEffect -> init function will tell us what should be executed first then we specify what function to load faster