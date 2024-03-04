import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SimilarProducts from "../Comopnents/Cart/SimilarProducts";
import ErrorIndicator from "../Comopnents/Hook/ErrorIndictor";
import LoadingIndicator from "../Comopnents/Hook/LoadingIndictor";
import { useCart } from "../Comopnents/Context/Cart";
import { toast } from 'react-toastify'


const USD_TO_INR_RATE = 74.5;

function convertToINR(priceUSD) {
  // Convert USD price to INR using the hardcoded exchange rate and round to the nearest integer
  return Math.round(priceUSD * USD_TO_INR_RATE);
}

export default function ProductComponent() {
  const { product_id } = useParams();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState({});
  const cart = useCart();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${product_id}`)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [product_id]);

  if (error) {
    return <ErrorIndicator />;
  }

  if (loading) {
    return <LoadingIndicator />;
  }

  const priceINR = convertToINR(product.price);

  const isProductAddedToCart = cart.getCart().some((item) => item.id === product.id);

  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex px-4 py-10">
          <img src={product.image} alt={product.title} className="w-[40%] h-[350px] rounded-lg" />
          <div className="px-4 w-full">
            <div className="font-bold text-xl">{product.title}</div>
            <div className="text-sm text-gray-700 pt-2">Brand New - Full Warranty</div>
            <div className="border-b py-1" />
            <div className="pt-3 pb-2">
              <div className="flex items-center">
                Condiction : <span className="font-bold text-[17px]">New</span>
              </div>
            </div>
            <div className="border-b py-1" />
            <div className="pt-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <p className="font-bold text-[20px]">Price : {priceINR}</p>
                </div>
                <button 
                  onClick={() => {
                    if (isProductAddedToCart) {
                      cart.removeFromCart(product);
                      toast.info("Removed from cart", { autoClose: 3000 });
                    } else {
                      cart.addToCart(product);
                      toast.success("Added to cart", { autoClose: 3000 });
                    }
                  }}
                  className={`text-white py-2 px-20 rounded-full cursor-pointer ${
                    isProductAddedToCart ? "bg-[#e9a321] hover:bg-[#bf851a]" : "bg-[#3498C9] hover:bg-[#0054A0]"
                  }`}
                >
                  {isProductAddedToCart ? "Remove From Cart" : "Add To Cart"}
                </button>
              </div>
            </div>
            <div className="border-b py-1">
              <div className="pt-3">
                <div className="font-semibold pb-1">Description :</div>
                <div className="text-sm text-gray-700">{product.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SimilarProducts />
    </>
  );
}

