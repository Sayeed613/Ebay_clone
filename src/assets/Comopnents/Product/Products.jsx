import { Link } from "react-router-dom";

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
function Products({ image, title, description, price, id,}) {
    const priceINR = convertToINR(price);
    const truncatedTitle = truncateTitle(title, 20);
  return (
      <Link to={`/product/${id}`}>
      <div className="max-w-[330px] p-1.5 border border-gray-50 hover:border-gray-200 hover:shadow-xl rounded mx-auto h-[300px]">
        <img src={image} alt={title} className="rounded cursor-pointer w-[200px] h-[200px]" />
        <div className="pt-2 px-2">
            <div className="font-semibold text-[15px] hover:underline cursor-pointer mt-8">{truncatedTitle}</div>
            <div className="font-extrabold">₹ {priceINR}</div>
        </div>
      </div>
      </Link>
  );
}
export default Products

