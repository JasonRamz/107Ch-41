//create the comment structer for the commponent
import"./quantityPicker.css";
import {useState} from "react";

function QuantityPicker(){
    const [quantity, setQuantity] = useState(1);
    function increase(){
        // create the logic to increment the quantity each time it clicks
        // also cor the decrease quantity
        setQuantity(quantity + 1);
        console.log("increase quantity")
        };
    function decrease(){
        console.log("decrease quantity")
        if(quantity===0){return};
        setQuantity(quantity - 1);
        
    }






    return(
        <div className="quantityPicker">
            <button disable= {quantity === 0} onClick={decrease}>-</button>
            <label>{quantity}</label>
            <button onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;