import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState,useContext } from "react";
import DataContext from "../store/dataContext";

function Product(props){
    const[quantity,setQuantity] = useState(1);//useState is a hook in react
    const addToCart = useContext(DataContext).addToCart();
    useEffect(function(){
        console.log("Hello products");
    },[]);

    function onQuantityChange(qty){
        setQuantity(qty);
    }
    function handleAdd(){
        let prodCart = {...props.data}
        prodCart.quantity = quantity;
        addToCart();
    }
    function getTotal(){
        const total = props.data.price * quantity

        return total.toFixed(2);
    }

    return(
        <div className="product">
            <img src={"/img/" + props.data.image} alt="placeholder"/>
            <h5>{props.data.title}</h5>
            <div className="prices">
                <label>Price: ${props.data.price.toFixed(2)}</label>
                <label>Total: ${props.data.price * quantity} </label>
                {/* include the displayflex*/}
            </div>
            <QuantityPicker onChange={onQuantityChange}/>
            
            <button onClick={handleAdd} className="btn btn-sm btn-outline-success">Add</button>
            {/* render this in the catalog 5 times */}
        </div>
    );

}

export default Product;