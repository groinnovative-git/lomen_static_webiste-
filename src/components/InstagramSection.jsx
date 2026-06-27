const InstagramIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
  </svg>
);

const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=600&q=80",
    alt: "LoMen Fashion Club Instagram - Stylish Men's Outfit",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    alt: "LoMen Fashion Club - Modern Men's Casual Wear",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600&q=80",
    alt: "LoMen Fashion Club - Premium Men's Fashion Look",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?w=600&q=80",
    alt: "LoMen Fashion Club Instagram - Trending Menswear",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1516826957135-700dedea698c?w=600&q=80",
    alt: "LoMen Fashion Club - Men's Everyday Style Outfit",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
    alt: "LoMen Fashion Club - Smart Casual Men's Clothing",
  },
];

const InstagramSection = () => {
  return (
    <section className="homeInstagramSection">
      <div className="homeInstagramSectionInner">
        <div className="sectionHeader">
          <h2 className="sectionTitle">Follow us on Instagram</h2>
          <p className="sectionSubtitle homeInstagramHandle">
            @lomen_f_club
          </p>
        </div>

        <div className="homeInstagramGrid">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/lomen_f_club/"
              target="_blank"
              rel="noopener noreferrer"
              className="homeInstagramCard group"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="homeInstagramImage"
              />
              <div className="homeInstagramOverlay">
                <InstagramIcon size={28} />
                <span className="homeInstagramOverlayText">View Post</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
