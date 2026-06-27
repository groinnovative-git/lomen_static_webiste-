import React, { useState } from "react";
import { Mail, Phone, MapPin, ShoppingBag, Send, CheckCircle2 } from "lucide-react";
import shop2 from "../assets/images/shop2.jpeg";

const ContactPage = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <section className="bg-[#0e0906] text-white py-16 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="relative max-w-xl mx-auto z-10">
          <h1 className="text-3xl md:text-5xl font-light tracking-tight mb-4">
            Get In <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200">Touch</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-base font-light">
            Have questions about sizes, customizations, or shipping? Contact our design concierge team.
          </p>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Address */}
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-5 transition duration-300">
              <MapPin className="text-amber-500" size={28} strokeWidth={1.5} />
            </div>
            <p className="text-gray-800 text-[15px] mb-1.5 font-medium">LOMEN FASHION CLUB</p>
            <p className="text-gray-500 text-[14px]">Coimbatore, Tamil Nadu</p>
          </div>

          {/* Card 2: Phone */}
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-5 transition duration-300">
              <Phone className="text-amber-500" size={28} strokeWidth={1.5} />
            </div>
            <p className="text-gray-800 text-[15px] mb-1.5 font-medium">Phone</p>
            <p className="text-gray-500 text-[14px]">+91 93609 59528</p>
          </div>

          {/* Card 3: Email */}
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-5 transition duration-300">
              <Mail className="text-amber-500" size={28} strokeWidth={1.5} />
            </div>
            <p className="text-gray-800 text-[15px] mb-1.5 font-medium">Email</p>
            <p className="text-gray-500 text-[14px]">lomenfashionclub@gmail.com</p>
          </div>

          {/* Card 4: Store */}
          <div className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-5 transition duration-300">
              <ShoppingBag className="text-amber-500" size={28} strokeWidth={1.5} />
            </div>
            <p className="text-gray-800 text-[15px] mb-1.5 font-medium">Online Store</p>
            <a href="https://mybillbook.in/store/lomen_fashion_club" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-[14px] hover:text-amber-500 transition">lomen_fashion_club</a>
          </div>
        </div>
      </section>

      {/* Main Form Area */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Side */}
          <div className="w-full h-[450px] lg:h-[650px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] order-2 lg:order-1">
            <img src={shop2} alt="Lomen Store" className="w-full h-full object-cover object-center" />
          </div>

          {/* Form Side */}
          <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden order-1 lg:order-2 flex flex-col justify-center">
            <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0e0906] mb-3">
              Send Us a Message
            </h2>
            <p className="text-gray-500 text-sm">
              We pride ourselves on providing a bespoke service experience. Drop us a message below.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-10 px-4">
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mx-auto mb-6 animate-bounce">
                <CheckCircle2 size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-semibold text-[#0e0906] mb-3">
                Message Sent Successfully
              </h3>
              <p className="text-gray-500 max-w-sm mx-auto mb-8 text-sm leading-relaxed">
                Thank you for reaching out. A LoMen support representative has received your request and will follow up shortly.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3.5 bg-[#0e0906] text-white rounded-full font-medium hover:bg-neutral-800 transition shadow-lg shadow-black/10 text-sm tracking-wide uppercase"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-5 py-3.5 bg-[#fcfcfc] border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0e0906] focus:ring-1 focus:ring-[#0e0906] transition"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-5 py-3.5 bg-[#fcfcfc] border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0e0906] focus:ring-1 focus:ring-[#0e0906] transition"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  required
                  value={formState.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Size Exchange Enquiries"
                  className="w-full px-5 py-3.5 bg-[#fcfcfc] border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0e0906] focus:ring-1 focus:ring-[#0e0906] transition"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Detail your request here..."
                  className="w-full px-5 py-3.5 bg-[#fcfcfc] border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0e0906] focus:ring-1 focus:ring-[#0e0906] transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#0e0906] hover:bg-neutral-800 text-white rounded-xl font-semibold transition flex items-center justify-center gap-2 text-sm uppercase tracking-wider disabled:opacity-75 shadow-lg shadow-black/10"
                >
                  {loading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    <>
                      Send Message <Send size={18} strokeWidth={2} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[450px] bg-gray-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1958.081153684956!2d76.94116618484257!3d11.02644643298679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85900567e895b%3A0x4edcb090a31fd849!2sLOMEN%20FASHION%20CLUB!5e0!3m2!1sen!2sin!4v1782498928430!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Google Map location for Lomen Fashion Club"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;
