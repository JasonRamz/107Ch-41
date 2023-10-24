import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect, useState } from "react";
function Product(props){
    const[quantity,setQuantity] = useState(1);//useState is a hook in react

    useEffect(function(){
        console.log("Hello products");
    },[]);

    function onQuantityChange(qty){
        setQuantity(qty);
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
                <label>Total: ${getTotal()} </label>
                {/* include the displayflex*/}
            </div>
            <QuantityPicker onChange={onQuantityChange}/>

            {/* render this in the catalog 5 times */}
        </div>
    );

}

export default Product;