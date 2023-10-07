//create the component and add it to the app.js please
import Product from "../components/product";
import "./catalog.css";

function Catalog(){
    return (
        <div className="catalog">
            <h1>Catalog</h1>
            {/* Add your catalog items here */}
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
};

export default Catalog;
