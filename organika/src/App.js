import './App.css';
import {React} from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Catalog from './pages/catalog';


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

