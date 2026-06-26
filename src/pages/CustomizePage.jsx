import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Scissors, Check, Sparkles, ShoppingCart } from "lucide-react";

const CustomizePage = () => {
  const { addToCart } = useCart();
  const [successMsg, setSuccessMsg] = useState(false);

  const [customization, setCustomization] = useState({
    fabric: "Classic White",
    collar: "Spread Collar",
    cuff: "French Cuff",
    monogram: "",
    fit: "Tailored Fit",
  });

  const fabrics = [
    { name: "Classic White", color: "#fcfcfc", border: "#e5e5e5", price: 129.99, image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600&q=80" },
    { name: "Deep Charcoal", color: "#2d2a29", border: "#1a1918", price: 139.99, image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=600&q=80" },
    { name: "Royal Navy", color: "#14213d", border: "#0b132b", price: 134.99, image: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=600&q=80" },
    { name: "Soft Sand", color: "#e3d5ca", border: "#d5bdaf", price: 129.99, image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600&q=80" }
  ];

  const collars = [
    { name: "Spread Collar", description: "Modern and versatile, perfect for ties or open collar wear." },
    { name: "Button-Down Collar", description: "Classic preppy heritage look. Stays secured cleanly." },
    { name: "Band Collar", description: "Minimalist collar-free modern styling for relaxed elegance." }
  ];

  const cuffs = [
    { name: "French Cuff", description: "Formal choice requiring cufflinks. Elegant fold-back style." },
    { name: "Single Button", description: "Clean standard cuff. Simple and functional for daily wear." },
    { name: "Double Button", description: "Sophisticated barrel cuff with two stacked adjustment buttons." }
  ];

  const fits = ["Super Slim Fit", "Tailored Fit", "Classic Regular Fit"];

  const activeFabric = fabrics.find(f => f.name === customization.fabric) || fabrics[0];

  const handleSelect = (key, value) => {
    setCustomization(prev => ({ ...prev, [key]: value }));
  };

  const handleAddToCart = () => {
    const customProduct = {
      id: 999 + Math.floor(Math.random() * 1000), // Unique ID for custom shirts
      name: `Custom Tailored Shirt (${customization.fabric})`,
      category: "Customize",
      price: activeFabric.price,
      image: activeFabric.image,
      description: `Bespoke tailored shirt. Customization settings: ${customization.fit}, ${customization.collar}, ${customization.cuff}. Monogram: "${customization.monogram || "None"}". Sourced from highest grade thread.`,
      isCustom: true,
      customDetails: customization
    };

    addToCart(customProduct, 1, "Tailored");
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
    }, 3000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Intro Banner */}
      <section className="bg-[#0e0906] text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="relative max-w-xl mx-auto z-10">
          <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 bg-white/10 px-3 py-1 rounded-full mb-4">
            <Sparkles size={12} />
            <span>Atelier Bespoke Service</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-4">
            Tailor Your <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Own Shirt</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-light">
            Specify collar, cuff, fit, fabric, and monogramming. Handcrafted to order by our expert sartorial tailors.
          </p>
        </div>
      </section>

      {/* Customizer workspace */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Visualizer Panel (5 Columns) */}
          <div className="lg:col-span-5 lg:sticky lg:top-8 self-start">
            <div className="border border-gray-100 rounded-2xl bg-gray-50 p-6 shadow-sm overflow-hidden flex flex-col items-center">
              <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mb-4">Live Preview Reference</span>
              
              <div className="w-full aspect-[3/4] rounded-xl overflow-hidden shadow-inner bg-white relative flex items-center justify-center">
                <img
                  src={activeFabric.image}
                  alt={customization.fabric}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow border border-gray-100 text-xs space-y-1">
                  <p className="font-semibold text-gray-800 text-sm">{customization.fabric} Shirt</p>
                  <p className="text-gray-500">Collar: <span className="text-gray-800 font-medium">{customization.collar}</span></p>
                  <p className="text-gray-500">Cuffs: <span className="text-gray-800 font-medium">{customization.cuff}</span></p>
                  <p className="text-gray-500">Monogram: <span className="text-gray-800 font-medium font-serif italic">{customization.monogram || "None"}</span></p>
                  <p className="text-gray-500">Silhouette: <span className="text-gray-800 font-medium">{customization.fit}</span></p>
                </div>
              </div>
              
              <div className="w-full mt-6 flex justify-center items-center bg-[#0e0906] text-white p-4 rounded-xl">
                <span className="text-xs text-amber-400 font-semibold uppercase tracking-wider flex items-center gap-1">
                  <Scissors size={14} /> Bespoke Order
                </span>
              </div>
            </div>
          </div>

          {/* Configuration Panel (7 Columns) */}
          <div className="lg:col-span-7 space-y-10">
            {/* Step 1: Fabric */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-[#0e0906] text-white rounded-full flex items-center justify-center text-xs">1</span>
                Select Fabric & Color
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {fabrics.map((f) => (
                  <button
                    key={f.name}
                    onClick={() => handleSelect("fabric", f.name)}
                    className={`flex flex-col items-center p-4 border rounded-xl transition duration-200 ${
                      customization.fabric === f.name
                        ? "border-[#0e0906] bg-neutral-50 shadow-sm"
                        : "border-gray-100 hover:border-gray-300"
                    }`}
                  >
                    <div
                      className="w-10 h-10 rounded-full border shadow-inner mb-3"
                      style={{ backgroundColor: f.color, borderColor: f.border }}
                    ></div>
                    <span className="text-xs font-semibold text-gray-900">{f.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Fit */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-[#0e0906] text-white rounded-full flex items-center justify-center text-xs">2</span>
                Choose Fit Silhouette
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {fits.map((fit) => (
                  <button
                    key={fit}
                    onClick={() => handleSelect("fit", fit)}
                    className={`p-4 border rounded-xl text-center text-sm font-semibold transition ${
                      customization.fit === fit
                        ? "border-[#0e0906] bg-neutral-50"
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    {fit}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Collar */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-[#0e0906] text-white rounded-full flex items-center justify-center text-xs">3</span>
                Select Collar Type
              </h3>
              <div className="space-y-3">
                {collars.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => handleSelect("collar", c.name)}
                    className={`w-full p-4 border rounded-xl text-left flex justify-between items-center transition ${
                      customization.collar === c.name
                        ? "border-[#0e0906] bg-neutral-50"
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <div className="pr-4">
                      <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{c.description}</p>
                    </div>
                    {customization.collar === c.name && (
                      <div className="w-5 h-5 bg-[#0e0906] text-white rounded-full flex items-center justify-center shrink-0">
                        <Check size={12} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Cuff */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-[#0e0906] text-white rounded-full flex items-center justify-center text-xs">4</span>
                Select Cuff Style
              </h3>
              <div className="space-y-3">
                {cuffs.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => handleSelect("cuff", c.name)}
                    className={`w-full p-4 border rounded-xl text-left flex justify-between items-center transition ${
                      customization.cuff === c.name
                        ? "border-[#0e0906] bg-neutral-50"
                        : "border-gray-100 hover:border-gray-200"
                    }`}
                  >
                    <div className="pr-4">
                      <p className="font-semibold text-gray-900 text-sm">{c.name}</p>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">{c.description}</p>
                    </div>
                    {customization.cuff === c.name && (
                      <div className="w-5 h-5 bg-[#0e0906] text-white rounded-full flex items-center justify-center shrink-0">
                        <Check size={12} />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Monogram */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-[#0e0906] text-white rounded-full flex items-center justify-center text-xs">5</span>
                Custom Monogramming (Optional)
              </h3>
              <div className="border border-gray-100 p-6 rounded-xl bg-gray-50 space-y-4">
                <label htmlFor="monogram" className="block text-xs font-semibold uppercase tracking-wider text-gray-700">
                  Initials (Up to 3 letters)
                </label>
                <input
                  type="text"
                  maxLength={3}
                  id="monogram"
                  value={customization.monogram}
                  onChange={(e) => handleSelect("monogram", e.target.value.toUpperCase())}
                  placeholder="e.g. JDO"
                  className="w-full md:w-48 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm font-semibold tracking-widest focus:outline-none focus:border-[#0e0906] transition"
                />
                <p className="text-xs text-gray-400">
                  Stitched onto the left sleeve cuff in elegant champagne silk thread. Leave blank for no monogram.
                </p>
              </div>
            </div>

            {/* Add to Cart CTA */}
            <div className="pt-4 space-y-4">
              {successMsg && (
                <div className="p-4 bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-semibold rounded-xl flex items-center gap-2 animate-fade-in">
                  <Check size={16} /> Added custom tailored shirt configuration to your cart!
                </div>
              )}
              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-[#0e0906] hover:bg-neutral-800 text-white rounded-full font-semibold transition flex items-center justify-center gap-2 text-sm uppercase tracking-wider shadow-md hover:shadow-lg"
              >
                Add Custom Shirt to Cart <ShoppingCart size={18} />
              </button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomizePage;
