//create the component and add it to the app.js please
import Product from "../components/product";
import DataService from "../services/dataservice";
import "./catalog.css";
import { useEffect, useState } from "react";

function Catalog(){
//when the component is loaded i want to do something
const[products, setProducts] = useState([]);
//let array = [];
//let variables = 1;
useEffect(function(){

    console.log("catalog component is loaded");
    loadCatalog();//this is very similar to init function
},[]);
function loadCatalog(){
    //get the products that i have in the catalog (dataservice)
    let service = new DataService();
    let prods = service.getProducts();
    console.log(prods);
    setProducts(prods);
}
    return (
        <div className="catalog">
            <h1>Catalog</h1>
            {/* Add your catalog items here */}
            <h2>We have {products.length} new products for you</h2>
            {products.map(arrowProducts => <Product data={arrowProducts} />)}
        </div>
    );
}

export default Catalog;
