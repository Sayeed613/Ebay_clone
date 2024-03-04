import { useLocation } from "react-router-dom"


export default function CheckOutItem({ title, id, description, price , image}) {
    const location = useLocation();

  return (
    <div className="flex justify-start rounded-lg mb-2 border p-4">
        <img className="rounded-md w-[150px] h-[150px]" src={image}/>
        <div className="overflow-hidden pl-2">
            <div className="font-semibold">
                {title}
            </div>
            <div className="text-lg font-semibold ">
                <span className="font-bold">₹ {price}</span>
            </div>
            <div className="flex items-center text-[14px] text-gray-500">
                {description}
            </div>
            <div className="text-sm mt-2">

            </div>
            {location == './cart' ?
            <div className="text-sm mt-2 w-full flex justify-end underline text-blue-500 cursor-pointer">
                Remove
            </div>
            : null }
        </div>
    </div>
  )
}
