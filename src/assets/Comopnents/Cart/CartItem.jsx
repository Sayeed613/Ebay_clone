import React from "react";
import { useCart } from "../Context/Cart";

function convertToINR(priceUSD) {
  const exchangeRate = Math.random() * (80 - 70) + 70;

  return Math.round(priceUSD * exchangeRate);
}

function truncateTitle(title, maxLength) {
  if (title.length > maxLength) {
    return title.substring(0, maxLength) + "...";
  }
  return title;
}

export default function CartItem({ id, title, description, price, image }) {
  const { removeFromCart } = useCart();
  const priceINR = convertToINR(price);
  const truncatedTitle = truncateTitle(title, 150);

  const handleRemove = () => {
    const product = { id, title, description, price, image };
    removeFromCart(product);
  };

  return (
    <div className="relative flex justify-start my-2 border w-full p-6">
      <img
        src={image}
        alt=""
        className="rounded-md w-[150px] h-[150px]"
      />
      <div className="overflow-hidden pl-2 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center font-semibold justify-between w-[400px] text-[16px] underline">
            {title}
          </div>
          <div className="font-bold text-lg">₹: {priceINR}</div>
        </div>
        <div className="semi-bold">New</div>
        <div className="text-sm mt-2">{truncatedTitle}</div>
      </div>
      <div className="absolute right-0 bottom-0 p-4 text-sm">
        <button onClick={handleRemove} className="underline text-blue-500">
          Remove
        </button>
      </div>
    </div>
  );
}
