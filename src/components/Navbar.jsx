import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import BrandLogo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white">
        <div className="flex flex-col md:flex-row justify-between">      
            
            <div className="flex justify-between">
                <a href="#">
                    <img src={BrandLogo} alt="brand logo" className=""/>
                </a>

                <div className="md:hidden">
                <button onClick={toggleMenu}>
                    {isOpen ? (
                    <RiCloseLine className="h-6 w-6 text-white" />
                    ) : (
                    <GiHamburgerMenu className="h-6 w-6 text-white" />
                    )}
                </button>
                </div>
            </div>

            <div>
                <ul className={`text-center md:flex md:items-center  ${isOpen ? 'block' : 'hidden'} md:block md:gap-10`}>
                    <li><a href="#about" className="block py-2 m-5 md:py-0 md:m-0">About</a></li>
                    <li><a href="#collection" className="block py-2 m-5 md:py-0 md:m-0">Collection</a></li>
                    <li><a href="#faq" className="block py-2 m-5 md:py-0 md:m-0">FAQs</a></li>
                    <li><button href="#explore" className="block py-2 m-5 md:py-0 md:m-0">Connect wallet</button></li>
                    <li className="flex gap-5">
                        <FaXTwitter />
                        <FaDiscord />
                    </li>
                </ul>
            </div>

        </div>
    </nav>
  );
};

export default Navbar;
