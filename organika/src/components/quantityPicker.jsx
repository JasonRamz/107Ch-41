//create the comment structer for the commponent
import "./quantityPicker.css";

function QuantityPicker(){

    return(
        <div className="quantityPicker">
            <button className="btn btn-sm btn-primary">-</button>
            <label>1</label>
            <button className="btn btn-sm btn-primary">+</button>
        </div>
    );

}

export default QuantityPicker;