import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useEffect } from "react";
function Product(props){
    useEffect(function(){
        console.log("Hello products");
    },[]);

    function onQuantityChange(qty){
        console.log("new quantity" + qty);
    }
    return(
        <div className="product">
            <img src={"/img/" + props.data.image} alt="placeholder"/>
            <h5>{props.data.title}</h5>
            <div className="prices">
                <label>Price:${props.data.price}</label>
                <label>Total:$</label>
                {/* include the displayflex*/}
            </div>
            <QuantityPicker onChange={onQuantityChange}/>

            {/* render this in the catalog 5 times */}
        </div>
    );

}

export default Product;