import { Link } from "react-router-dom";

export default function CategoriesPage() {
    const categories =[
        {
            id: 1,
            name: "Parts & Accessories",
            image: "https://ir.ebaystatic.com/cr/v/c01/01_P_Aeng.jpg",

        },
        {
            id: 2,
            name: "Trading cards",
            image: "https://ir.ebaystatic.com/cr/v/c01/01_Trading%20Cards.jpg",
            route: "/trading-cards"
        },
        {
            id: 3,
            name: "Pre-Loved Luxury",
            image: "https://ir.ebaystatic.com/cr/v/c01/03_Pre-loved%20Luxuryeng.jpg",
            route: "/pre-loved-luxury"
        },
        {
            id: 4,
            name: "Sneakers ",
            image: "https://ir.ebaystatic.com/cr/v/c01/04_Sneakerseng.jpg",
            route: "/sneakers"
        },
        {
            id: 5,
            name: "Watches",
            image: "https://ir.ebaystatic.com/cr/v/c01/05_Watcheseng.jpg",
            route: "/watches"
        },
        {
            id: 6,
            name: "HandBages",
            image: "https://ir.ebaystatic.com/cr/v/c01/06_Handbagseng.jpg",
            route: "/handbags"
        },

    ]

    return (
        <div id="categories" className="w-full mt-8">
            <div className="left text-[22px] font-bold ">Explore Popular categories</div>
            <div className="flex items-center justify-between w-full mx-auto max-w-[1200px] mt-3">
                <ul id="PopularCategories" className="flex items-center text-[20px] text-[#333333] px-2 h-30">
                    {categories.map(item => (
                        <li key={item.id} className="px-3 hover:underline text-#3333-700 mt-6">
                            <Link to={item.route} className="flex flex-col items-center ">
                                <img src={item.image} alt={item.name} className="rounded-full w-100 h-100 mb-2 cursor-pointer"/>
                                <span >{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
