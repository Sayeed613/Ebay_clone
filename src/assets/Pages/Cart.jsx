import SimilarProducts from '../Comopnents/Cart/SimilarProducts'
import CartItem from '../Comopnents/Cart/CartItem'
import { useCart } from '../Comopnents/Context/Cart';
import { Link } from 'react-router-dom';

export default function Cart() {
  const {getCart} = useCart()
  const cartItems = getCart()

    if (cartItems.length === 0) {
        return (
            <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
                <div className="text-2xl font-bold my-4 ">Your Cart is Empty</div>
                <SimilarProducts />
            </div>
        );
    }

    return (
        <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
            <div className="text-2xl font-bold my-4 ">Shipping cart</div>
            <div className="relative flex items-baseline justify-between gap-2">
                <div className="w-[65%]">
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </div>

                <div id="goToCheckout" className='md:w-[33%] absolute top-0 right-0 m-2'>
                    <div className='bg-white p-4 border'>
                       <Link to='/checkout'>
                       <button className='fe=lex justify-center items-center bg-blue-600 text-white font-semibold p-3 rounded-full'>
                            Go to Checkout
                        </button>
                       </Link>
                        <div className='flex items-baseline justify-between mt-4 text-sm mb-1'>
                            <div>Item ({cartItems.length})</div>
                            <div>₹ {calculateTotal(cartItems)}</div>
                        </div>
                        <div className='flex items-baseline justify-between mb-4 text-sm'>
                            <div>Shipping</div>
                            <div>Free</div>
                        </div>
                        <div className="border-b border-gray-300" />
                        <div className='flex items-center justify-between mt-4 mb-1 text-lg font-semibold'>
                            <div>Subtotal</div>
                            <div>₹ {calculateTotal(cartItems)}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-40'>
            <SimilarProducts />
            </div>
        </div>
    );
}
function calculateTotal(cartItems){
    return cartItems.reduce((total, item) => total + item.price, 0)
}
