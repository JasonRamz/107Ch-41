import "./navbar.css";
import {Link} from 'react-router-dom';
import DataContext from '../store/dataContext';
import {useContext} from 'react';

// Navbar is a component
function Navbar(){
    const user = useContext(DataContext).user;
    const cart = useContext(DataContext).cart;

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
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/catalog">
            Catalog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/admin">
            Admin
          </Link>
        </li>
        </ul>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <div>
        <i class="fa-duotone fa-user"></i>
          {user.name}
        </div>
        <Link to="/cart" className="btn btn-outline-primary">
        <i class="fa-duotone fa-cart-plus"></i>
          {cart.length} Cart
        </Link>
      </form>
    </div>
  </div>
</nav>

        </div>
    );
}

export default Navbar;