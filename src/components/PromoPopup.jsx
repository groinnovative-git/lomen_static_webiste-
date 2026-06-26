import React, { useState, useEffect } from 'react';
import './PromoPopup.css';
import heroImg from '../assets/images/shop3.jpeg';

const PromoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const hasOptedOut = localStorage.getItem('promoPopupOptOut');
    if (hasOptedOut) {
      return;
    }

    // Show popup after 5 seconds on initial load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    
    if (dontShowAgain) {
      localStorage.setItem('promoPopupOptOut', 'true');
    } else {
      // If closed without opting out, show again after 3 minutes
      setTimeout(() => {
        const hasOptedOut = localStorage.getItem('promoPopupOptOut');
        if (!hasOptedOut) {
           setIsOpen(true);
        }
      }, 3 * 60 * 1000);
    }
  };

  const handleCollectionClick = () => {
    handleClose();
    window.location.href = 'https://mybillbook.in/store/lomen_fashion_club';
  };

  if (!isOpen) return null;

  return (
    <div className="promoPopupOverlay" onClick={handleClose}>
      <div className="promoPopupModal" onClick={(e) => e.stopPropagation()}>
        <button className="promoPopupCloseBtn" onClick={handleClose}>
          &times;
        </button>
        <div className="promoPopupContent">
          <div className="promoPopupLeft">
            <img src={heroImg} alt="Promo Collection" />
          </div>
          <div className="promoPopupRight">
            <p className="promoPopupSubtitle">Exclusive styles for the modern man</p>
            
            <div className="promoPopupOffer">
              <h2>20% OFF</h2>
              <p>LIMITED TIME OFFERS!</p>
            </div>

            <button className="promoPopupActionBtn" onClick={handleCollectionClick}>
              COLLECTION
            </button>
            
            <label className="promoPopupCheckbox">
              <input 
                type="checkbox" 
                checked={dontShowAgain}
                onChange={(e) => setDontShowAgain(e.target.checked)}
              />
              <span className="checkmark"></span>
              Don't show again
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoPopup;
