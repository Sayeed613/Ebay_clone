import { Routes, Route } from 'react-router-dom'

import SingleProduct from '../../Pages/SingleProduct'
// import Address from '../../Pages/Address'
import AuthPage from '../../Pages/Auth'
import Order from '../../Pages/Order'
import Success from '../../Pages/Success'
import CheckOut from '../../Pages/CheckOut'
import Cart from '../../Pages/Cart'
import Home from '../../Pages/Home'
 export default function AllRoutes() {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/checkout' element={<CheckOut/>}/>
    <Route path='/success' element={<Success/>}/>
    <Route path='/order' element={<Order/>}/>
    <Route path='/auth' element={<AuthPage/>}/>
    {/* <Route path='/address' element={<Address/>}/> */}
    <Route path='/product/:product_id' element={<SingleProduct/>}/>
    </Routes>
    </div>
  )
}
