//create the comment structer for the commponent
import"./quantityPicker.css";
import {useState} from "react";

function QuantityPicker(props){
    const [quantity, setQuantity] = useState(1);
    function increase(){
        // create the logic to increment the quantity each time it clicks
        // also cor the decrease quantity
        let val = quantity + 1;
        setQuantity(val);
        props.onChange(val);
        
        };
    function decrease(){
        if(quantity===1){return};
        let val = quantity - 1;
        setQuantity(val);
        props.onChange(val);
        
    }






    return(
        <div className="quantityPicker">
            <button className="btn btn-sm btn-dark" onClick={decrease} disabled={quantity === 1}>-</button>
            <label>{quantity}</label>
            <button  className="btn btn-sm btn-primary" onClick={increase}>+</button>
        </div>
    );
}

export default QuantityPicker;