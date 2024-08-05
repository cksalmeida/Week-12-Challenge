import Banner from "../assets/BannerHome.svg"

function BannerHome() {
  return (
    <div className="relative flex items-center justify-end w-full">
      <img src={Banner} className="w-full object-cover" alt="Banner" />
      <aside className="absolute bg-[#FFF3E3] p-10 mt-40 mr-40 w-[480px] h-auto shadow-lg hidden sm:block">
        <span className="text-gray-600 font-semibold">New Arrival</span>
        <h1 className="mt-2 text-4xl font-bold text-yellow-600">Discover Our New Collection</h1>
        <p className="mt-4 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="mt-6 px-6 py-2 bg-yellow-600 text-white font-bold text-sm uppercase">Buy Now</button>
      </aside>
    </div>
  )
}

export default BannerHome
