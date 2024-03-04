import './App.css';
import CartProvider from './assets/Comopnents/Context/Cart';
import AllRoutes from './assets/Comopnents/Hook/AllRoutes';
import Navbar from './assets/Comopnents/Navbar/Navbar';
import Footer from './assets/Comopnents/Hero/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App({children}) {
  return (
    <>
        <CartProvider>
          <div className="min-w-[1050px] max-w-[1300px] mx-auto">
            <Navbar />
            <AllRoutes/>
            <Footer />
          </div>
          <ToastContainer />
          {children}
        </CartProvider>
    </>
  );
}

export default App;