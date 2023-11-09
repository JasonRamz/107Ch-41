import "./navbar.css";
import {Link} from 'react-router-dom';
import DataContext from '../store/dataContext';
import {useContext} from 'react';

// Navbar is a component
function Navbar(){
    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

    function getCount(){
      let sum = 0;
      for(let i = 0; i < cart.length; i++){
        const prod = cart[i];
        sum += prod.quantity;
      }
      
      return sum;
    }

    return(
        <div className="NavBar">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      Bodega
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/home">
            Home
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/about">
            About
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/catalog">
            Catalog
          </Link>
        </li>
        <br />
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/admin">
            Admin
          </Link>
        </li>
        </ul>
      <form className="d-flex" role="search">
        <div>
          <Link className="nav-link" aria-current="page" to="/Profile">
          <button type="button" className="btn btn-outline-primary ms-2"><i className="fa-solid fa-user"></i>
          {user.name}</button>
          </Link>
        </div>
        <br />
        <div>
          <Link to="/cart" className="btn btn-outline-primary">
          <i className="fa-solid fa-cart-plus"></i>
            {getCount()} Cart
          </Link>
        </div>
      </form>
    </div>
  </div>
</nav>

        </div>
    );
}

export default Navbar;