import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(){
    return(
        <div className="product">
            <img src="https://picsum.photos/200/200" alt="product"></img>
            <h5>Title goes Here</h5>
            <div className="prices">
                <label>Price=</label>
                <label>Total=</label>
                {/* include the displayflex*/}
            </div>
            <QuantityPicker/>

            {/* render this in the catalog 5 times */}
        </div>
    );

}

export default Product;