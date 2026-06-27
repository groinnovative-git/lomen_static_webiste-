import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo1 from "../assets/images/logo1.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="mainModule">
        <div className="navNavbar">
          <div className="navLeft">
            <Link to="/" className="navLogoContainer">
              <img src={logo1} alt="LoMen Fashion Club Logo" />
            </Link>
            <div className="navCenterText">
              <span>Lomen Fashion Club</span>
            </div>
          </div>

          <div className="navRight">
            <div className="navItems">
              <Link to="/" className="navItem">Home</Link>
              <Link to="/about" className="navItem">About</Link>
              <Link to="/product" className="navItem">Collection</Link>
              <Link to="/contact" className="navItem">Contact</Link>
            </div>
            <a href="https://mybillbook.in/store/lomen_fashion_club" target="_blank" rel="noopener noreferrer" className="navItem navBuyNow">Buy Now</a>
            <button className="hamburgerButton" onClick={toggleMenu}>
              <Menu size={24} />
            </button>
          </div>
        </div>

        <div
          className={`overlay ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        ></div>

        <div className={`mobileMenu ${isMenuOpen ? "open" : ""}`}>
          <div className="mobileMenuHeader">
            <Link to="/" onClick={toggleMenu} className="navLogoContainer">
              <img src={logo1} alt="LoMen Fashion Club Logo" />
            </Link>
            <button className="closeButton" onClick={toggleMenu}>
              <X size={24} />
            </button>
          </div>
          <div className="mobileMenuItems">
            <Link to="/" className="mobileMenuItem" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" className="mobileMenuItem" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/product" className="mobileMenuItem" onClick={toggleMenu}>
              Collection
            </Link>
            <Link to="/contact" className="mobileMenuItem" onClick={toggleMenu}>
              Contact
            </Link>
            <a href="https://mybillbook.in/store/lomen_fashion_club" target="_blank" rel="noopener noreferrer" className="mobileMenuItem mobileBuyNow" onClick={toggleMenu}>
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
