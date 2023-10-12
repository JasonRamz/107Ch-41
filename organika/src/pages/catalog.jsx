//create the component and add it to the app.js please
import Product from "../components/product";
import DataService from "../services/dataservice";
import "./catalog.css";
import { useEffect, useState } from "react";

function Catalog(){
//when the component is loaded i want to do something
const[products, setProducts] = useState([]);
const[categories, setCategories] = useState([]);
const[productsToDisplay, setProductsToDisplay] = useState([]);
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
    setProducts(prods);
    setProductsToDisplay(prods);
    //here i want to create the values for the chategories stateVariable
    let cats = ["Footwear", "Headwear", "Clothing"];
    setCategories(cats);
    
}
function clearFilters() {
    //something to do here
    setProductsToDisplay(products);
}
function filter(category){
        console.log(category);
        //lets create the filters logic 
        //first we need a variable to store the catergory
        let list = [];
        //find the product that matches the category and add them to the list
        for(let i = 0; i < products.length; i++){
            let prod = products[i];
            if(prod.category === category){
                list.push(prod);
            }
            //console.log(prod);
        }
        console.log(list);
        setProductsToDisplay(list);
}
    return (
        <div className="catalog">
            <h1>Catalog</h1>
            {/* Add your catalog items here */}
            <h2>We have {products.length} new products for you</h2>{categories.map(arrowCategories => <button key={arrowCategories} onClick={()=>filter(arrowCategories)} className="btn btn-sm btn-primary btn-filter">{arrowCategories}</button>)}
            <br />
            <button onClick={clearFilters} className="btn btn-sm btn-warning btn-filter">Clear</button>
            <br />
            {productsToDisplay.map(arrowProducts => <Product key={arrowProducts._id} data={arrowProducts} />)}
        </div>
    );
}

export default Catalog;
