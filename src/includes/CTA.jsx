import React, { useState } from 'react';
import { X, ArrowRight, Bell, Gift, Sparkles } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>

      <div className="ctaBanner">
        <div className="ctaContent">
          {/* <Sparkles className="ctaIcon" size={20} /> */}
          <p className="ctaText">
            🎉 Special Offer: Get <span className="ctaHighlight">50% OFF</span> on all clothes!
          </p>
          {/* <button className="ctaButton">
            Claim Now
            <ArrowRight size={16} />
          </button> */}
        </div>
        <button 
          className="ctaCloseButton" 
          onClick={() => setIsVisible(false)}
          aria-label="Close banner"
        >
          <X size={18} />
        </button>
      </div>
    </>
  );
};

export default CTA;