//create the comment structer for the commponent
import"./quantityPicker.css";
import {useState} from "react";

function QuantityPicker(){
    const [quantity, setQuantity] = useState(1);
    function increase(){
        console.log("increase quantity")
        // create the logic to increment the quantity each time it clicks
        // also cor the decrease quantity
        let val = quantity + 1;
        setQuantity(val);
        
        };
    function decrease(){
        console.log("decrease quantity")
        if(quantity===1){return};
        let val = quantity - 1;
        setQuantity(val);
        
    }






    return(
        <div className="quantityPicker">
            <button className="btn btn-sm btn-dark" disable= {quantity === 1} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button  className="btn btn-sm btn-primary" onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;