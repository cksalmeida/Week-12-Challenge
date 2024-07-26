import FooterLogo from "../assets/FooterLogo.svg"
import Facebook from "../assets/FacebookLogo.svg"
import Instagram from "../assets/InstagramLogo.svg"
import Twitter from "../assets/TwitterLogo.svg"
import LinkedIn from "../assets/LinkedInLogo.svg"

function Footer() {
    
  return (
    <footer className="p-8 border-t border-gray-300">
      <div className="container mx-auto">
        <div className="flex gap-48">
          <div>
            <img src={FooterLogo} className="mb-6 ml-5"/>
            <address className="not-italic mb-6 ml-5">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </address>
            <div className="flex">
              <a href="https://www.facebook.com/?locale=pt_BR"><img src={Facebook} alt="Facebook" /></a>
              <a href="https://www.instagram.com/"><img src={Instagram} alt="Instagram" /></a>
              <a href="https://x.com"><img src={Twitter} alt="Twitter" /></a>
              <a href="https://br.linkedin.com/"><img src={LinkedIn} alt="LinkedIn" /></a>
            </div>
          </div>
          <div className="flex space-x-16">
            <div>
              <h4 className="font-bold mb-4">Links</h4>
              <ul className="space-y-6">
                <li><a href="/">Home</a></li>
                <li><a href="/Shop">Shop</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Help</h4>
              <ul className="space-y-6">
                <li><a href="#">Payment Options</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Privacy Policies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Newsletter</h4>
              <form className="flex">
                <input type="email" placeholder="Enter Your Email Address" className="p-2 border underline" />
                <button type="submit" className="p-2 underline text-black">SUBSCRIBE</button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-300 pt-4 text-left font-medium">
          <p>2023 furino. All rights reserved</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
