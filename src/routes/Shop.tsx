import Header from "../components/Header"
import DefaultBanner from "../components/DefaultBanner"
import HighQuality from "../components/HighQuality"
import Footer from "../components/Footer"

const Shop = () => {
  return(
    <>
      <Header />
      <DefaultBanner Title={<h1 className="text-3xl font-medium">Shop</h1>} Path={<p className="text-lg font-bold">Home &gt; <span className="font-normal">Shop</span></p>}  /> 
      <HighQuality />
      <Footer />
    </>
  )
}

export default Shop