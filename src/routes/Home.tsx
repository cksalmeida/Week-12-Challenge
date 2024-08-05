import Header from "../components/Header"
import BannerHome from "../components/BannerHome"
import Footer from "../components/Footer"
import ShareHome from "../components/ShareHome"
import BrowseHome from "../components/BrowseHome"
import CardImg1 from "../assets/CardImgHome1.svg"
import CardImg2 from "../assets/CardImgHome2.svg"
import CardImg3 from "../assets/CardImgHome3.svg"
import ProductList from "../components/ProductList"
import ShowMoreButton from "../components/ShowMoreButton"

const Home = () => {
  return (
    <>
      <Header />
      <BannerHome />
      <div className="text-center mt-14">
        <h3 className="font-bold text-3xl text-[#333333]">Browse The Range</h3>
        <p className="mt-2 text-[#666666]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="grid grid-cols-1 px-4 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8">
      <BrowseHome CardImg={CardImg1} Title="Dining" />
      <BrowseHome CardImg={CardImg2} Title="Living" />
      <BrowseHome CardImg={CardImg3} Title="Bedroom" />
      </div>
      <div className="w-4/5 m-auto">
        <h2 className="font-bold text-center text-2xl mb-2 mt-12">Our Products</h2>
        <ProductList limit={8} sortBy="rating" pagination={false} />
      </div>
      <ShowMoreButton />
      <ShareHome />
      <Footer />
    </>
  )
}

export default Home
