import axios from 'axios';

let catalog =[  
    {
        "title": "Shoes",
        "category": "Footwear",
        "price": 39.99,
        "image": "Shoes.jpeg",
        "_id": "Thing1"//dont repeat this
    },
    {
        "title": "Hat",
        "category": "Headwear",
        "price": 9.99,
        "image": "Hat.jpeg",
        "_id": "Thing2"//dont repeat this
    },
    {
        "title": "Shirt",
        "category": "Clothing",
        "price": 19.99,
        "image": "Japan.jpeg",
        "_id": "Thing3"//dont repeat this
    },
    {
        "title": "Pants",
        "category": "Clothing",
        "price": 29.99,
        "image": "Pants.jpeg",
        "_id": "Thing4"//dont repeat this
    },
    {
        "title": "Socks",
        "category": "Footwear",
        "price": 5.99,
        "image": "Socks.jpeg",
        "_id": "Thing5"//dont repeat this
    },
    {
        "title": "Gloves",
        "category": "Clothing",
        "price": 9.99,
        "image": "Gloves.jpeg",
        "_id": "Thing6"//dont repeat this
    },
    {
        "title": "Scarf",
        "category": "Clothing",
        "price": 9.99,
        "image": "Scarf.jpeg",
        "_id": "Thing7"//dont repeat this
    },
    {
        "title": "Jacket",
        "category": "Clothing",
        "price": 49.99,
        "image": "Jacket.jpeg",
        "_id": "Thing8"//dont repeat this
    }
];
class DataService{
    async getProducts(){
       // return catalog;

        const response = await axios.get("http://127.0.0.1:5000/api/catalog");
        return response.data;


    }

    async saveProduct(product){
        const response = await axios.post("http://127.0.0.1:5000/api/catalog", product);
        return response.data;
    }



    async getCoupons(){
        const response = await axios.get("http://127.0.0.1:5000/api/coupons");
        return response.data;
    }

    async saveCoupon(coupon){
        const response = await axios.post("http://127.0.0.1:5000/api/coupons", coupon);
        return response.data;
    }
}

export default DataService;