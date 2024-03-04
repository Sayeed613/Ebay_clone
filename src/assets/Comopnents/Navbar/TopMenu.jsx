import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsChevronDown } from 'react-icons/bs';
import { FaRegBell } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useCart } from '../Context/Cart';

function TopMenu({ id, name, picture }) {
    const [isMenu, setIsMenu] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const cart = useCart();

    const handleHover = (value) => {
        setIsHovering(value);
        if (!value) {
            setIsMenu(false);
        }
    };

    const isLoggedIn = () => {
        if (id) {
            return (
                <button
                    onMouseEnter={() => handleHover(true)}
                    onMouseLeave={() => handleHover(false)}
                    className="flex item-center gap-2 hover:underline cursor-pointer"
                >
                    <div>
                        Hi, {name}
                    </div>
                    <BsChevronDown />
                </button>
            );
        }
        return (
            <div
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
                className="flex items-center gap-2 hover:underline cursor-pointer"
            >
                <div>Login</div>
                <BsChevronDown />
            </div>
        );
    };

    return (
        <div id="TopMenu" className="border-b sm:160px">
            <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
                <ul id="TopMenuLeft" className="flex items-center text-[11px] text-[#333333] px-8 h-8">
                    <li className="relative px-3">
                        {isLoggedIn()}
                        {isHovering && (
                            <div
                                onMouseEnter={() => handleHover(true)}
                                onMouseLeave={() => handleHover(false)}
                                id="AuthDropDown"
                                className={`absolute bg-white w-[200px] text-[#333333] z-40 top-[20px] left-0 border shadow-lg visible`}
                            >
                                <div className="flex item-center justify-start gap-1 p-3">
                                    <img src={picture} width={50} alt="user-avatar" />
                                    <div className="font-bold text-[13px]">{name}</div>
                                </div>
                                <div className="border-b" />
                                <ul className="bg-white">
                                    <li className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                                        <Link to='/order'>My Orders</Link>
                                    </li>
                                    <li onClick={() => { signOut(); setIsMenu(false) }} className="text-[11px] py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-600 cursor-pointer">
                                        <Link to='./' >Sign out</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li className="px-3 hover:underline cursor-pointer">
                        <Link to="/daily-deals">Daily Deals</Link>
                    </li>
                    <li className="px-3 hover:underline cursor-pointer">
                        <Link to="/help">Help & Contact</Link>
                    </li>
                </ul>
                <ul id="TopMenuRight" className="flex items-center text-[11px] text-[#333333] px-2 h-8">
                    <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
                        <Link to="/sell">Sell</Link>
                    </li>
                    <li className="relative px-3">
                        <Link to="/wishlist" className="flex items-center gap-2 hover:underline cursor-pointer">
                            <div>WishList</div>
                            <BsChevronDown />
                        </Link>
                    </li>
                    <li className="relative px-3">
                        <Link to="/my-ebay" className="flex items-center gap-2 hover:underline cursor-pointer">
                            <div>My Order</div>
                            <BsChevronDown />
                        </Link>
                    </li>
                    <li className="px-3 hover:underline cursor-pointer">
                        <FaRegBell size={18} />
                    </li>
                    <Link to='/cart'>
                        <li className="px-3 hover:underline cursor-pointer relative">
                            <div>
                                <AiOutlineShoppingCart size={22} />
                                {cart.cartCount() > 0 && (
                                    <div className="absolute -top-1 -right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-[9px]">
                                        {cart.cartCount()}
                                    </div>
                                )}
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default TopMenu;
