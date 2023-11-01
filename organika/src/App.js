import './App.css';
import {React} from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';
import About from './pages/about';
import Home from './pages/home';
import Admin from './pages/admin';
import Cart from './pages/cart';
import Profile from './pages/Profile';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";



import {BrowserRouter, Routes, Route}from 'react-router-dom';
import GlobalProvider from './store/globalProvider';


function App() {
  return (
    <GlobalProvider>
    <BrowserRouter>
      <div className="App">
        <Navbar/>
          
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/catalog" element={<Catalog/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/Profile" element={<Profile/>}></Route>
        </Routes>
          
        <Footer/>
      </div>
    </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;

//React-> SPA single page application -> components
//state Variables is global and immutable 
// const[ name,setName*is a functions*]
//useEffect -> init function will tell us what should be executed first then we specify what function to load faster