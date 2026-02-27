import React from 'react'
import { IoLogoYoutube } from "react-icons/io";
import { FaSpotify } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const FooterComponent = () => {
  return (
    <div>
        <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">&copy; 2024 ECOM. All rights reserved.</p>
          <div className="social-icons mt-2">
          <a href="https://www.youtube.com" className="text-white mx-2">
            <IoLogoYoutube size={30} />
          </a>
          <a href="https://www.spotify.com" className="text-white mx-2">
            <FaSpotify size={30} />
          </a>
          <a href="https://www.facebook.com" className="text-white mx-2">
            <FaFacebook size={30} />
          </a>
        </div>

        </footer>
    </div>
  )
}

export default FooterComponent