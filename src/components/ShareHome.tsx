import ShareImg from "../assets/ShareHome.svg"

function ShareHome() {

  return (
    <div>
        <div className="text-center">
            <p className="font-semibold text-xl text-[#616161] mt-14">Share your setup with</p>
            <h2 className="font-bold text-4xl text-[#3A3A3A] mt-2">#FuniroFurniture</h2>
        </div>
     <img src={ShareImg} className="w-full"/>
    </div>
  )
}

export default ShareHome