import DataService from "../services/dataservice";
import "./admin.css";
import { useEffect,useState } from "react";
function Admin() {

    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState({
        title: "",
        category: "",
        description: "",
        image: "",
        price: 0,
    });

    const[allCoupons, setAllCoupons]=useState([]);
    const [coupon, setCoupon] = useState({
        code: "",
        discount: 0,
    });

    useEffect(function () {
        loadProducts();
        loadCoupons();
    },[]);



    async function loadProducts() {
        const service = new DataService();
        let productsResponse = await service.getProducts();
        setAllProducts(productsResponse);
    }


    async function loadCoupons() {
        const service = new DataService();
        let couponsResponse = await service.getCoupons();
        setAllCoupons(couponsResponse);
    }


    function handleProductChange(e) {
        let name = e.target.name;
        let copy = { ...product };
        copy[name] = e.target.value;
        setProduct(copy);
    }
    async function saveProduct() {
        let fixedProduct = { ...product };
        fixedProduct.price = parseFloat(product.price);
        console.log(fixedProduct);

        const service = new DataService();
        let savedProduct = await service.saveProduct(fixedProduct);

        let copy = [...allProducts];
        copy.push(savedProduct);
        setAllProducts(copy);
    }


    function handleCouponChange(x) {
        let couponName = x.target.name;
        let copy = { ...coupon };
        copy[couponName] = x.target.value;
        setCoupon(copy);
    }


    async function saveCoupon() {
        let fixedCoupon = { ...coupon };
        fixedCoupon.discount = Number(coupon.discount);

        const service = new DataService();
        let savedCoupon = await service.saveCoupon(fixedCoupon);

        let copy = [...allCoupons];
        copy.push(savedCoupon);
        setAllCoupons(copy);
    }


    return (
        <div className="admin">
            <section className="add-item-section">
                {/* Form for adding a new item */}
                <h2>Create Products</h2>
                <div>
                    <div className="form-group">
                        <label htmlFor="description">Title</label>
                        <input onChange={handleProductChange} type="text" name="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Category</label>
                        <input onChange={handleProductChange} type="text" name="category" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        onChange={handleProductChange}
                        type="text"
                        name="description"
                    />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input onChange={handleProductChange} type="text" name="image" />
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input onChange={handleProductChange} type="number" name="price" />
                </div>
                <button onClick={saveProduct} className="btn btn-dark">
                    Save Product
                </button>
                {allProducts.map(product => <p key={product.title}>{product.title} ${product.price}</p>)}
            </section>
            
            <section className="coupon">
                <h2>Add Coupon</h2>
                <div className="form-group">
                    <label>Coupon</label>
                    <input onBlur={handleCouponChange} type="text" name="code" />
                </div>
                <h2>Discount</h2>
                <div className="form-group">
                    <label>Discount</label>
                    <input onBlur={handleCouponChange} type="number" name="discount" />
                    <button onClick={saveCoupon} className="btn btn-dark">
                        Save Coupon
                    </button>
                </div>
                {allCoupons.map(coupon => <p key={coupon.code}>{coupon.code} - {coupon.discount}</p>)}
            </section>
        </div>
    );
}

export default Admin;
