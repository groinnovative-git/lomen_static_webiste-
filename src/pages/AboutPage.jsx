import React from "react";
import { Link } from "react-router-dom";
import shop1 from "../assets/images/shop1.jpeg";
import shop2 from "../assets/images/shop2.jpeg";
import shop3 from "../assets/images/shop3.jpeg";
import shop4 from "../assets/images/shop4.jpeg";
import shop5 from "../assets/images/shop5.jpeg";
import shop6 from "../assets/images/shop6.jpeg";
import image1 from "../assets/images/image1.jpeg";
import image2 from "../assets/images/image2.jpeg";
import {
  ArrowRight,
  Zap,
  Gem,
  Ruler,
  Palette,
  Star,
  CheckCircle,
  ShoppingBag,
  Truck,
  RefreshCw,
  Headphones,
  ShieldCheck,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const collections = [
  {
    label: "Shirts",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80",
    desc: "Clean shirts for smart casual and everyday confidence.",
    link: "/shirts",
  },
  {
    label: "T-Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
    desc: "Comfortable tees with a modern streetwear feel.",
    link: "/tshirts",
  },
  {
    label: "Pants",
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80",
    desc: "Sharp pants designed for movement, comfort, and fit.",
    link: "/pants",
  },
  {
    label: "Custom Wear",
    image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80",
    desc: "Personalized styles made to match your look.",
    link: "/customize",
  },
];

const whyCards = [
  {
    icon: <Zap size={22} />,
    title: "Trend-Ready Styles",
    desc: "Fresh drops every season — from streetwear to smart casual, we stay ahead of the curve.",
  },
  {
    icon: <Gem size={22} />,
    title: "Premium Fabric",
    desc: "Every piece is crafted from breathable, durable, skin-friendly fabrics.",
  },
  {
    icon: <Ruler size={22} />,
    title: "Perfect Everyday Fit",
    desc: "Slim, regular, and relaxed cuts — designed to move with you.",
  },
  {
    icon: <Palette size={22} />,
    title: "Customization Support",
    desc: "Build your own shirt — choose fabric, collar, cuff, and fit. Your rules.",
  },
];

const shopImages = [
  shop1,
  shop2,
  shop3,
  shop4,
  shop5,
  shop6,
];

const onlinePerks = [
  { icon: <Truck size={22} />, title: "Fast Delivery", desc: "Order today, at your door in 3–5 days." },
  { icon: <RefreshCw size={22} />, title: "Easy Returns", desc: "Hassle-free returns within 7 days." },
  { icon: <ShoppingBag size={22} />, title: "Secure Shopping", desc: "100% safe & encrypted checkout." },
  { icon: <Headphones size={22} />, title: "24/7 Support", desc: "We're always here to help you." },
];

// ── Page ──────────────────────────────────────────────────────────────────────

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden" style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[88vh] flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col justify-center px-8 md:px-16 py-20 bg-white relative z-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-200 px-4 py-1.5 rounded-full w-fit mb-6">
            <Star size={12} fill="#d97706" /> About LoMen
          </span>

          <h1 className="heroTitle mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            Built for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">
              New Generation
            </span>{" "}
            of Men
          </h1>

          <p className="text-gray-500 text-lg leading-relaxed max-w-lg mb-8" style={{ fontFamily: "'Poppins', sans-serif" }}>
            LoMen Fashion Club creates modern menswear for young men who want
            style, comfort, and confidence in every outfit. From everyday
            casuals to smart fits, our collections are designed to match your lifestyle.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link to="/product" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#0e0906] text-white rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-neutral-800 transition">
              Explore Collection <ArrowRight size={16} />
            </Link>
            <Link to="/customize" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-[#0e0906] text-[#0e0906] rounded-full font-semibold text-sm uppercase tracking-wider hover:bg-gray-50 transition">
              Customize Your Fit
            </Link>
          </div>

          <div className="flex gap-8 pt-8 border-t border-gray-100">
            {[{ value: "10k+", label: "Happy Customers" }, { value: "100%", label: "Premium Fabrics" }, { value: "4+", label: "Collections" }].map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-[#0e0906]">{s.value}</p>
                <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative min-h-[400px] lg:min-h-full">
          <img src={image1} alt="LoMen Fashion" className="w-full h-full object-cover object-center" />
          <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl px-5 py-4 shadow-xl">
            <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Our Promise</p>
            <p className="text-sm font-bold text-[#0e0906]">Style. Comfort. Confidence.</p>
          </div>
        </div>
      </section>

      {/* ── 2. BRAND STORY ──────────────────────────────────────────────────── */}
      <section className="bg-[#faf9f7] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-3 bg-gradient-to-tr from-amber-100 to-amber-50 rounded-3xl -z-10"></div>
            <img src={image2} alt="LoMen Store" className="w-full h-[480px] object-cover rounded-2xl shadow-lg" />
            <div className="absolute -bottom-6 -right-6 bg-[#0e0906] text-white rounded-2xl px-6 py-4 shadow-xl hidden md:block">
              <p className="text-3xl font-bold text-amber-400">10k+</p>
              <p className="text-xs text-gray-300 mt-1">Young Men Styled</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-4 block">Our Story</span>
            <h2 className="sectionTitle mb-6 leading-tight text-left">
              We Started With a Simple Idea
            </h2>
            <p className="text-gray-500 leading-relaxed mb-5">
              LoMen started with a simple idea — menswear should feel stylish, comfortable, and personal.
              We wanted to create fashion that young men can wear to college, work, events, hangouts,
              and weekends without compromising comfort or confidence.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              We're not just a clothing brand. We're a style movement built for the modern young man
              who refuses to choose between looking sharp and feeling free.
            </p>
            <ul className="space-y-3">
              {["Designed for real life moments", "Made with quality-first fabrics", "Built for every body type and style"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                  <CheckCircle size={18} className="text-amber-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── 3. COLLECTION SHOWCASE ──────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3 block">Collections</span>
            <h2 className="sectionTitle">
              Style Made for Every Moment
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {collections.map((item) => (
              <div key={item.label} className="group relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition duration-300">
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={item.image} alt={item.label} className="w-full h-full object-cover object-center group-hover:scale-105 transition duration-500" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-1">{item.label}</span>
                  <p className="text-white text-sm leading-snug mb-3">{item.desc}</p>
                  <a href="https://mybillbook.in/store/lomen_fashion_club" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/15 hover:bg-amber-500 px-3 py-1.5 rounded-full transition duration-200 w-fit">
                    Shop Now <ArrowRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SHOP IMAGE AUTO SCROLL ───────────────────────────────────────── */}
      <section className="py-20 bg-[#0e0906] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 block">Our Store</span>
          <h2 className="sectionTitle" style={{ color: "white" }}>
            Inside LoMen Fashion Club
          </h2>
          <p className="text-gray-400 mt-3 text-sm max-w-md mx-auto">
            Step into the world of LoMen — where every corner is styled for the modern man.
          </p>
        </div>

        {/* Marquee track */}
        <div className="aboutShopMarquee">
          <div className="aboutShopTrack">
            {[...shopImages, ...shopImages].map((src, i) => (
              <div key={i} className="aboutShopCard">
                <img src={src} alt={`Shop ${(i % 6) + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MISSION & VISION ─────────────────────────────────────────────── */}
      <section className="bg-[#faf9f7] py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3 block">What Drives Us</span>
            <h2 className="sectionTitle">
              Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-[#0e0906] border border-white/10 rounded-2xl p-5 md:p-6 hover:border-amber-500/40 transition duration-300 flex flex-col">
              <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                <Zap size={22} className="text-amber-400" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 block">Mission</span>
              <p className="text-white text-sm leading-relaxed font-light flex-1">
                To create menswear that helps young men express confidence through clean design,
                comfort, and quality — one outfit at a time.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#0e0906] border border-white/10 rounded-2xl p-5 md:p-6 hover:border-amber-500/40 transition duration-300 flex flex-col">
              <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                <Star size={22} className="text-amber-400" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 block">Vision</span>
              <p className="text-white text-sm leading-relaxed font-light flex-1">
                To become the most trusted men's fashion brand for modern, stylish, and everyday
                wear among young men across India.
              </p>
            </div>

            {/* Promise */}
            <div className="bg-[#0e0906] border border-white/10 rounded-2xl p-5 md:p-6 hover:border-amber-500/40 transition duration-300 flex flex-col">
              <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheck size={22} className="text-amber-400" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-3 block">Promise</span>
              <p className="text-white text-sm leading-relaxed font-light flex-1">
                To deliver trend-ready, comfortable, and premium menswear that helps every young
                man look sharp, feel confident, and express his own style — every day.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. WHY CHOOSE US ────────────────────────────────────────────────── */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-3 block">Why LoMen</span>
            <h2 className="sectionTitle">
              Why Young Men Choose LoMen
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((card) => (
              <div key={card.title} className="bg-[#faf9f7] rounded-2xl p-7 border border-gray-100 hover:shadow-md hover:-translate-y-1 transition duration-300 group">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-5 group-hover:bg-[#0e0906] group-hover:text-white transition duration-300">
                  {card.icon}
                </div>
                <h3 className="text-base font-bold text-[#0e0906] mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. ONLINE STORE SECTION ─────────────────────────────────────────── */}
      <section className="relative py-24 px-6 md:px-12 overflow-hidden bg-[#0e0906]">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">

          {/* Left Content */}
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-4 py-1.5 rounded-full w-fit mb-6">
              <ShoppingBag size={12} /> Now Available Online
            </span>
            <h2 className="sectionTitle leading-tight mb-6" style={{ color: "white" }}>
              Shop LoMen{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Anytime, Anywhere
              </span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8 max-w-md text-lg">
              Our full collection is now live online. Browse shirts, t-shirts, pants,
              and custom wear from the comfort of your home. Fast delivery. Easy returns.
              Premium quality — delivered to your door.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://mybillbook.in/store/lomen_fashion_club" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 bg-amber-500 hover:bg-amber-600 text-white rounded-full font-semibold text-sm uppercase tracking-wider transition">
                Shop Online Now <ArrowRight size={16} />
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white rounded-full font-semibold text-sm uppercase tracking-wider hover:border-white/50 transition">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Perks Grid */}
          <div className="grid grid-cols-2 gap-4">
            {onlinePerks.map((perk) => (
              <div key={perk.title} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-amber-500/30 hover:bg-white/8 transition duration-300">
                <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 mb-4">
                  {perk.icon}
                </div>
                <h4 className="text-white font-bold text-sm mb-1">{perk.title}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 mb-4 block">Get Started</span>
          <h2 className="sectionTitle mb-6 leading-tight">
            Ready to Upgrade Your Wardrobe?
          </h2>
          <p className="text-gray-500 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Explore our latest shirts, t-shirts, pants, and custom wear made for young men
            who want comfort and confidence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/product" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#0e0906] text-white rounded-full font-semibold hover:bg-neutral-800 transition text-sm uppercase tracking-wider">
              Shop Collection <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#0e0906] text-[#0e0906] rounded-full font-semibold hover:bg-gray-50 transition text-sm uppercase tracking-wider">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
