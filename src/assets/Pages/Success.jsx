import { AiOutlineCheckCircle } from "react-icons/ai"
import { Link } from "react-router-dom"

export default function Success() {
  return (
    <>
      <div id="succesPage" className="mt-12 max-w[1200px] mx-auto px-2 min-h-[50vh]">
        <div className="bg-white w-full p-6 min-h-[150px] flex items-center justify-center">
            <div>
                <div className="flex items-center text-xl">
                    <AiOutlineCheckCircle className="text-green-500 "size={35}/>
                    <span className="pl-4">Payment Succeddfull</span>
                </div>
                <p className="text-sm">Thank you ! ve recived your payment.</p>
                <Link to='/' className="w-full">
                    <div className="w-full bg-blue-600 text-sm font-semibold text-white p-[11px] mt-4">
                        Back to Shop
                    </div>
                </Link>
            </div>

        </div>
      </div>
    </>
  )
}
