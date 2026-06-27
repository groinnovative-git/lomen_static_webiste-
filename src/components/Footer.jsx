import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo1 from "../assets/images/logo1.jpeg";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const footerMenu = [
  { label: "Instagram Profile", to: "/product" },
  { label: "New Collection", to: "/product" },
  { label: "Men's Shirts", to: "/shirt" },
  { label: "Jackets", to: "/product" },
  { label: "Contact Us", to: "/contact" },
];

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setEmail("");
    }
  };

  return (
    <footer className="homeFooter">
      {/* Main Footer */}
      <div className="homeFooterMain">
        {/* Brand Column */}
        <div className="homeFooterBrand">
          <Link to="/" className="homeFooterLogoLink">
            <img src={logo1} alt="LoMen Logo" className="homeFooterLogo" />
            <h2 className="homeFooterBrandName">LoMen</h2>
          </Link>
          <p className="homeFooterBrandDesc">
            Premium men's fashion built for everyday confidence, comfort,
            and modern style.
          </p>

          {/* Social Icons */}
          <div className="homeFooterSocials">
            <a
              href="https://www.instagram.com/lomen_f_club/"
              target="_blank"
              rel="noopener noreferrer"
              className="homeFooterSocialIcon"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            {/* <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="homeFooterSocialIcon"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="homeFooterSocialIcon"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a> */}
          </div>
        </div>

        {/* Footer Menu */}
        <div className="homeFooterColumn">
          <h3 className="homeFooterColumnTitle">Quick Menu</h3>
          <ul className="homeFooterLinks">
            {footerMenu.map((link, index) => (
              <li key={index}>
                <Link to={link.to} className="homeFooterLink">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + Newsletter */}
        <div className="homeFooterColumn">
          <h3 className="homeFooterColumnTitle">Contact Us</h3>
          <ul className="homeFooterContactList">
            <li className="homeFooterContactItem">
              <Mail size={16} />
              <span>lomenfashionclub@gmail.com</span>
            </li>
            <li className="homeFooterContactItem">
              <Phone size={16} />
              <span>+91 93609 59528</span>
            </li>
            <li className="homeFooterContactItem items-start mt-1">
              <MapPin size={16} className="mt-1 flex-shrink-0" />
              <span className="leading-tight">74, Collector Sivakumar St, Saibaba Colony, Coimbatore, Tamil Nadu 641038</span>
            </li>
          </ul>

          <div className="homeFooterNewsletter">
            <h4 className="homeFooterNewsletterTitle">Newsletter</h4>
            <form
              className="homeFooterNewsletterForm"
              onSubmit={handleSubscribe}
            >
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="homeFooterNewsletterInput"
                required
              />
              <button
                type="submit"
                className="homeFooterNewsletterBtn"
                aria-label="Subscribe"
              >
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="homeFooterPayment">
        <div className="homeFooterPaymentInner">
          <span className="homeFooterPaymentLabel">We Accept:</span>
          <div className="homeFooterPaymentIcons">
            <span className="homeFooterPaymentBadge">Visa</span>
            <span className="homeFooterPaymentBadge">Mastercard</span>
            <span className="homeFooterPaymentBadge">UPI</span>
            <span className="homeFooterPaymentBadge">COD</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="homeFooterBottom">
        <p className="homeFooterCopyright">
          © {new Date().getFullYear()} <span className="homeFooterCopyrightBrand">LoMen Mens Collection</span>. All rights reserved. <span className="hidden sm:inline">|</span> <br className="sm:hidden" />
          <span className="sm:ml-1 mt-2 sm:mt-0 inline-block">
            Designed & Developed by <a href="https://groinnovative.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-500 transition font-medium text-gray-300">GroInnovative</a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
