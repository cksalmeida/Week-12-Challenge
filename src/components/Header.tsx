import FurniroLogo from "../assets/FurniroLogo.svg"
import { Link } from "react-router-dom"

function Header() {

  return (
    <>
     <header className="w-full h-24 flex items-center">
       <img src={FurniroLogo} alt="Furniro Logo" className="ml-[100px]"/>
       <div className="flex gap-20 font-medium ml-[270px]">
       <Link to="/">Home</Link>
       <Link to="/Shop">Shop</Link>
       <Link to="/About">About</Link>
       <Link to="/Contact">Contact</Link>
       </div>
     </header>
    </>
  )
}
  
  export default Header