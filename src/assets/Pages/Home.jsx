import HeroCarsousel from '../Comopnents/Hero/HeroCarsousel'
import CategoriesPage from '../Comopnents/Hero/Categories'
import ProductComponent from '../Comopnents/Product/ProductComponents'


export default function Home() {
    return (
      <div className="min-w-[1050px] max-w-[1300px] mx-auto">
      <div>
        <HeroCarsousel/>
        <CategoriesPage/>
        <ProductComponent/>
      </div>
      </div>
    )
  }