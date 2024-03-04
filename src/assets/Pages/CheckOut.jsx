import { useState, useEffect } from "react";
import { useCart } from "../Comopnents/Context/Cart";
import CheckOutItem from '../Comopnents/Cart/CheckOutItem';
import LoadingIndicator from "../Comopnents/Hook/LoadingIndictor";
import ErrorIndicator from "../Comopnents/Hook/ErrorIndictor";
import Footer from "../Comopnents/Hero/Footer";
import { Link } from "react-router-dom";

export default function CheckOut() {
    const { getCart } = useCart();
    const cartItems = getCart();

    const [orderTotal, setOrderTotal] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let total = 0;
        cartItems.forEach(item => {
            total += item.price;
        });
        setOrderTotal(total);
        setLoading(false);
    }, [cartItems]);

    if (loading) {
        return <LoadingIndicator/>
    }

    if (error) {
        return <ErrorIndicator/>
    }

    return (
        <>
            <div className="mt-4 max-w-[1100px] mx-auto" id="goTOCheckout">
                <div className="text-2xl font-bold mt-4 mb-4">Checkout</div>
                <div className="flex items-baseline gap-4 justify-between mx-auto w-full">
                    {/* Shipping Address */}
                    <div className="w-[65%]">
                        <div className="bg-white rounded-lg p-4 border">
                            <div className="text-xl font-semibold mb-2">Shipping Address</div>
                            <div>
                                <ul className="text-sm mt-2">
                                    <li>Name: Sayeed</li>
                                    <li>Address: Bangalore</li>
                                    <li>Zip Code: 563112</li>
                                    <li>City: Karanataka</li>
                                    <li>Country: India</li>
                                </ul>
                            </div>
                        </div>
                        <div id="items" className="bg-white rounded-lg mt-4">
                            {/* Checkout Item */}
                            {cartItems.map(item => (
                                <CheckOutItem key={item.id} {...item} />
                            ))}
                        </div>
                    </div>
                    {/* Place Order */}
                    <div id="placeOrder" className="w-[35%] border rounded-lg">
                        <div className="p-4">
                            <div className="flex items-baseline justify-between text-sm mb-1">
                                <div>Items({cartItems.length})</div>
                                <div>{orderTotal.toFixed(2)}</div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mb-4 text-sm">
                            <div>Shipping</div>
                            <div>Free</div>
                        </div>
                        <div className="border-t" />
                        <div className="flex items-center justify-between my-4">
                            <div className="font-semibold">Order Total</div>
                            <div className="font-semibold text-2xl">
                                {orderTotal.toFixed(2)}
                            </div>
                        </div>
                        <form>
                            <div className="border border-gray-500 p-2 rounded-sm" id="card-element">
                                <p id="card-error" role="alert" className="text-red-700 text-center font-semibold relative top-2" />
                                <Link to='/success'>
                                    <button type="submit" className="mt-4 bg-blue-600 text-lg w-full text-white font-semibold">
                                        Confirm & pay
                                    </button>
                                </Link>
                            </div>
                        </form>
                        <div className="flex items-center p-4 justify-center gap-2 border-t">
                            <img src="../images/logo .png" width={120} />
                            <div className="font-light mb-2 mt-2">MONEY BACK GUARANTEE</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
}
