import "./cartProduct.css";

function CartProduct(props){
    return(
    <div className="cart-product">
        <img src={'/img/' + props.data.image} alt="placeholder"/>
        <h4>{props.data.title}</h4>
        <p>{props.data.category}</p>

        <label>Price: {props.data.price.toFixed(2)}</label>
        <br />
        <label>Quantity: {props.data.quantity}</label>
        <br />
        <label>Total: $</label>
    </div>
    );
}
export default CartProduct;