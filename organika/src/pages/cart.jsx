import { useContext } from "react";
import "./cart.css";
import DataContext from "../store/dataContext";
import CartProduct from "../components/cartProduct";

function Cart() {
    const cart = useContext(DataContext).cart;

    function getCount() {
        let sum = 0;
        for (let i = 0; i < cart.length; i++) {
            const prod = cart[i];
            sum += prod.quantity;
        }

        return sum;
    }

    function getTotal() {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            const product = cart[i];
            total += product.price * product.quantity;
        }
        return total.toFixed(2);
    }
    return (
        <div className="cart page">
            <h1 className="title">Your Cart</h1>
            <h3>You have {getCount()} items in your cart</h3>
            <div>
                <div>
                    {cart.map((prod) => (
                        <CartProduct data={prod} key={prod._id} />
                    ))}
                </div>
                <aside>
                    <h4>Total</h4>
                    <h3>${getTotal()}</h3>
                    <hr />
                    <input type="text" placeholder="Coupon code" />
                    <hr />
                    <div className="input-group">
                        <input type="text" placeholder="Gift card" />
                        <button className="btn btn-dark">Apply</button>
                    </div>
                    <button className="btn btn-dark">Pay</button>
                </aside>
            </div>
        </div>
    );
}

export default Cart;
