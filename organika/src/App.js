import './App.css';
import {React} from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import About from './pages/about';
import Home from './pages/home';
import Admin from './pages/admin';


import {BrowserRouter, Routes, Route}from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/catalog" element={<Catalog/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
        </Routes>
          
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;

//React-> SPA single page application -> components
//state Variables is global and immutable 
// const[ name,setName*is a functions*]
//useEffect -> init function will tell us what should be executed first then we specify what function to load faster