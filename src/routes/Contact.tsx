import Header from "../components/Header"
import Footer from "../components/Footer"
import DefaultBanner from "../components/DefaultBanner"
import HighQuality from "../components/HighQuality"

const Contact = () => {
  return(
    <>
      <Header />
      <DefaultBanner
        Title={<h1 className="text-3xl font-medium">Contact</h1>}
        Path={<p className="text-lg font-bold">Home &gt; <span className="font-normal">Contact</span></p>}
      />
      <div className="flex flex-col m-auto text-center max-w-lg mt-20">
        <h1 className="font-bold text-2xl mb-2">Get In Touch With Us</h1>
        <p className="font-normal text-[#9F9F9F] text-sm">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
      </div>
      <HighQuality />
      <Footer />
    </>
  )
}

export default Contact