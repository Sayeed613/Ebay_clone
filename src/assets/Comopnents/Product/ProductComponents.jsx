import { useState, useEffect } from "react";

import Products from "./Products";
import ErrorIndicator from "../Hook/ErrorIndictor";
import LoadingIndicator from "../Hook/LoadingIndictor";



export default function ProductComponent() {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((res) => {
                setProducts(res);
            })
            .catch(() => {
                setError(true);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (error) {
        return <ErrorIndicator />;
    }

    if (loading) {
        return <LoadingIndicator />;
    }

    return (
        <div id="categories" className="w-full mt-8">
            <div className="left text-[22px] font-bold ">Products</div>
            <div className="grid grid-cols-5 gap-4 mt-8">

            {products.map((product) => (
                <Products {...product} key={product.id} />
                ))}
                </div>
            </div>
    );
}
