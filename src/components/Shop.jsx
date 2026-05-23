import { useEffect, useState } from "react";
import './Shop.css'
import Card from "./Card";

export default function Shop({addToCart}) {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            setProducts(data);
            setLoading(false);
        })
        .catch((error) => console.error(error));
    }, []);

    if (loading) {
        return (
            <div id="loading">
                loading...
            </div>
        )
    }

    return (
        <div id="shop">
            <p>All items</p>
            <div>
                {
                    products.map(product => {
                        return (
                            <Card product={product} addToCart={addToCart} key={product.id} />
                        )
                    })
                }
            </div>
        </div>
    )
}