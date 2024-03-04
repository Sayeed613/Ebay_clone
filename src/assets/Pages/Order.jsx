import { CiDeliveryTruck } from "react-icons/ci";
import {Link } from 'react-router-dom';
export default function Order({}) {

  const orders =[
    {
      id: 1,
      stripe_id: "568946174",
      name: "Sayeed Ahmed",
      country: "India",
      total : "1299",
      address : "KGF",
      city: "bangalore",
      zipCode : "563122",
      orederItem : [
        {
          id: 1,
          title: "Fjallraven",
          // image: "https://fakestoreapi.com/products/1"
        }
      ]
    }
  ]

  return (
    <>
    <div id="ordersPage" className="mt-4 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
        <div className="bg-white w-full p-6 min-h-[150px] ">
            <div className="flex items-center text-xl ">
                <CiDeliveryTruck className="text-green-500" size={35}/>
                <span className="pl-4">Orders</span>
            </div>
            {orders.length < 1 ?
            <div className="flex items-center justify-center">
              You have no order history
            </div>
         : null  }
         {orders.map(order => (
            <div className="text-sm pl-[50px]" key={order.id}>
              <div className="border-b py-1">
                <div className="pt-2">
                  <span className="font-bold mr-2">Stripe ID : {order.stripe_id}</span>
                </div>
                <div className="pt-2">
                  <span className="font-bold mr-2">Delivery Address : {order.name} , {order.address} , {order.city} , {order.country}</span>
                </div>
                <div className="pt-2">
                  <span className="font-bold mr-2">Total : {order.total}</span>
                </div>
                <div className="flex items-center gap-4">
                  {order.orederItem.map(item => (
                    <div key={item.id} className="flex items-center">
                      <Link to="/" className="py-1 hover:underline text-blue-500 font-bold">
                        <img src={item.image} width="120" className="rounded" />
                        {item.title}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
         ))}
        </div>
    </div>
    </>
  )}
