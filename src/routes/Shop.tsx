import { useState } from 'react'
import Header from "../components/Header"
import DefaultBanner from "../components/DefaultBanner"
import HighQuality from "../components/HighQuality"
import Footer from "../components/Footer"
import ProductList from "../components/ProductList"
import ProductFilter from '../components/ProductFilter'

const Shop = () => {
  const [limit, setLimit] = useState(16)
  const [sortBy, setSortBy] = useState('default')

  return (
    <>
      <Header />
      <DefaultBanner Title={<h1 className="text-3xl font-medium">Shop</h1>} Path={<p className="text-lg font-bold">Home &gt; <span className="font-normal">Shop</span></p>}  />
      <div className="w-full">
        <ProductFilter limit={limit} setLimit={setLimit} sortBy={sortBy} setSortBy={setSortBy} />
      </div>
      <div className="w-4/5 m-auto">
        <ProductList limit={limit} sortBy={sortBy} />
      </div>
      <HighQuality />
      <Footer />
    </>
  )
}

export default Shop
