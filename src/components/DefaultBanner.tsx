import Banner from "../assets/DefaultBanner.svg"

function DefaultBanner({ Title, Path }) {
  
  return (
    <div className="relative w-full">
      <img src={Banner} className="w-full object-cover" alt="Banner" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black">
        {Title}
        {Path}
      </div>
    </div>
  )
}

export default DefaultBanner