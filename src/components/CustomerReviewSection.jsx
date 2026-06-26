import React from "react";
import { Star, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Arjun Kumar",
    initials: "AK",
    time: "2 months ago",
    rating: 5,
    text: "The fit and quality are excellent. It looks premium and feels comfortable for daily wear.",
    verified: true,
  },
  {
    id: 2,
    name: "Rahul Menon",
    initials: "RM",
    time: "4 months ago",
    rating: 5,
    text: "Perfect shirt for office and casual outings. Fabric quality is much better than expected.",
    verified: true,
  },
  {
    id: 3,
    name: "Kavin Raj",
    initials: "KR",
    time: "5 months ago",
    rating: 5,
    text: "Very stylish and clean finish. Got many compliments when I wore it.",
    verified: true,
  },
  {
    id: 4,
    name: "Sanjay V",
    initials: "SV",
    time: "6 months ago",
    rating: 5,
    text: "Great experience shopping here. The delivery was fast and the clothes fit perfectly.",
    verified: true,
  },
  {
    id: 5,
    name: "Manoj D",
    initials: "MD",
    time: "8 months ago",
    rating: 5,
    text: "Premium fabric at a very reasonable price. Highly recommended for anyone looking for quality menswear.",
    verified: true,
  },
  {
    id: 6,
    name: "Vishal P",
    initials: "VP",
    time: "10 months ago",
    rating: 5,
    text: "The custom fit option is amazing. I will definitely be buying from here again.",
    verified: true,
  },
];

const CustomerReviewSection = () => {
  // Double the array for seamless marquee loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className="googleReviewSection">
      <div className="googleReviewSectionInner">
        
        {/* Google Reviews Header */}
        <div className="googleReviewHeader">
          <div className="googleReviewHeaderLeft">
            <h2 className="googleReviewTitle">
              <span style={{ color: "#4285F4" }}>G</span>
              <span style={{ color: "#EA4335" }}>o</span>
              <span style={{ color: "#FBBC05" }}>o</span>
              <span style={{ color: "#4285F4" }}>g</span>
              <span style={{ color: "#34A853" }}>l</span>
              <span style={{ color: "#EA4335" }}>e</span>
              {" "}Reviews
            </h2>
            <div className="googleReviewRatingMeta">
              <span className="googleReviewScore">5.0</span>
              <div className="googleReviewHeaderStars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#FBBC05" color="#FBBC05" />
                ))}
              </div>
              <span className="googleReviewCount">({reviews.length})</span>
            </div>
          </div>
          <div className="googleReviewHeaderRight">
            <a 
              href="#"
              className="googleReviewBtn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Review us on Google
            </a>
          </div>
        </div>

        {/* Marquee Track */}
        <div className="googleReviewMarquee">
          <div className="googleReviewTrack">
            {duplicatedReviews.map((review, index) => (
              <div key={`${review.id}-${index}`} className="googleReviewCard">
                <div className="googleReviewTop">
                  <div className="googleReviewAvatarWrapper">
                    <div className="googleReviewAvatar">
                      <span>{review.initials}</span>
                    </div>
                    {/* Google G Badge Overlay */}
                    <div className="googleReviewBadge">
                      <svg width="12" height="12" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                      </svg>
                    </div>
                  </div>
                  <div className="googleReviewMeta">
                    <div className="googleReviewNameRow">
                      <h4 className="googleReviewName">{review.name}</h4>
                      {review.verified && (
                        <CheckCircle2 size={14} fill="#4285F4" color="white" className="googleReviewVerified" />
                      )}
                    </div>
                    <p className="googleReviewTime">
                      {review.time}
                    </p>
                  </div>
                </div>

                <div className="googleReviewStars">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill="#FBBC05"
                      color="#FBBC05"
                    />
                  ))}
                </div>
                
                <p className="googleReviewText">{review.text}</p>
                <button className="googleReviewReadMore">Read more</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviewSection;
