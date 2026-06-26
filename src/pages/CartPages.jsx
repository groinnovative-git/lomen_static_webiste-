import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight, CheckCircle2, MessageSquare, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CartPages = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);

  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 9.99;
  const tax = subtotal * 0.08; // 8% tax
  const discount = promoApplied ? subtotal * 0.1 : 0; // 10% promo discount
  const grandTotal = subtotal + shipping + tax - discount;

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.toUpperCase() === "LOMEN10") {
      setPromoApplied(true);
      setDiscountAmount(subtotal * 0.1);
    } else {
      alert("Invalid promo code! Try 'LOMEN10'");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppCheckout = (e) => {
    e.preventDefault();
    const randomId = "LM-" + Math.floor(100000 + Math.random() * 900000);
    setOrderId(randomId);

    // Format products list for WhatsApp
    const itemsText = cartItems
      .map(
        (item) =>
          `• ${item.product.name} (Size: ${item.size}) x ${item.quantity} - $${(
            item.product.price * item.quantity
          ).toFixed(2)}`
      )
      .join("\n");

    // Construct structured WhatsApp Message text
    const message = 
      `*LoMen Menswear - New Order Received* 🛍️\n\n` +
      `*Order ID:* ${randomId}\n` +
      `*Status:* Pending WhatsApp Confirmation\n\n` +
      `*Customer details:*\n` +
      `👤 *Name:* ${customerInfo.name}\n` +
      `📞 *Phone:* ${customerInfo.phone}\n` +
      `📍 *Address:* ${customerInfo.address}\n\n` +
      `*Products Ordered:*\n${itemsText}\n\n` +
      `*Price Breakdown:*\n` +
      `- Subtotal: $${subtotal.toFixed(2)}\n` +
      (promoApplied ? `- Discount (10%): -$${discount.toFixed(2)}\n` : "") +
      `- Shipping: ${shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}\n` +
      `- Estimated Tax (8%): $${tax.toFixed(2)}\n` +
      `*Grand Total: $${grandTotal.toFixed(2)}*\n\n` +
      `Please process my custom tailoring request. Thank you!`;

    // Encode text and open WhatsApp Link
    const encodedText = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919791244408?text=${encodedText}`;
    
    window.open(whatsappUrl, "_blank");

    // Finalize state
    setCheckoutComplete(true);
    setIsCheckingOut(false);
    clearCart();
  };

  if (checkoutComplete) {
    return (
      <div className="bg-white min-h-[70vh] flex items-center justify-center py-20 px-6">
        <div className="text-center max-w-md mx-auto">
          <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mx-auto mb-8 animate-bounce">
            <CheckCircle2 size={48} />
          </div>
          <h2 className="text-3xl font-normal text-gray-900 mb-4">Order Forwarded</h2>
          <p className="text-gray-600 mb-2 font-medium font-sans">Message Sent to WhatsApp Concierge!</p>
          <p className="text-sm text-gray-500 mb-8 leading-relaxed">
            Your order details have been successfully generated and redirected to WhatsApp. <br />
            Order Reference ID: <span className="font-bold text-gray-900">{orderId}</span>
          </p>
          <Link
            to="/product"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#0e0906] hover:bg-neutral-800 text-white rounded-full font-semibold transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="bg-white min-h-[70vh] flex items-center justify-center py-20 px-6">
        <div className="text-center max-w-sm mx-auto">
          <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-6">
            <ShoppingBag size={28} />
          </div>
          <h2 className="text-2xl font-normal text-gray-900 mb-3">Your Cart is Empty</h2>
          <p className="text-gray-500 text-sm mb-8 leading-relaxed">
            Looks like you haven't added anything to your cart yet. Explore our bespoke shirts and classic menswear items.
          </p>
          <Link
            to="/product"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-[#0e0906] hover:bg-neutral-800 text-white rounded-full font-semibold transition w-full"
          >
            Shop Collection
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-light text-gray-900 mb-12">
          Your Shopping <span className="font-semibold">Bag</span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Panel: Swaps between Products List and Checkout Form */}
          <div className="lg:col-span-7">
            {!isCheckingOut ? (
              // Products List view
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4 hidden md:flex justify-between text-xs font-semibold uppercase tracking-wider text-gray-400">
                  <span>Product Details</span>
                  <span className="mr-12">Quantity</span>
                </div>

                {cartItems.map((item, index) => (
                  <div
                    key={`${item.product.id}-${item.size}-${index}`}
                    className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-gray-100 gap-6"
                  >
                    {/* Product Detail info */}
                    <div className="flex gap-4 md:gap-6">
                      <div className="w-20 h-24 bg-gray-50 rounded-lg overflow-hidden shrink-0 border border-gray-100">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-900 text-base leading-snug">
                            {item.product.name}
                          </h3>
                          <p className="text-gray-500 text-xs mt-1">
                            Category: {item.product.category}
                          </p>
                          <p className="inline-block mt-2 px-2.5 py-0.5 bg-gray-100 text-gray-700 font-semibold rounded text-[10px] uppercase tracking-wider">
                            Size: {item.size}
                          </p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.product.id, item.size)}
                          className="text-red-500 hover:text-red-700 transition flex items-center gap-1 text-xs mt-3 w-fit"
                        >
                          <Trash2 size={14} /> Remove
                        </button>
                      </div>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center justify-end mt-2 md:mt-0">
                      <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                          className="p-2 text-gray-500 hover:text-black transition"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="px-3 text-sm font-semibold text-gray-800 min-w-[20px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                          className="p-2 text-gray-500 hover:text-black transition"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // Checkout Form view
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 shadow-sm">
                <div className="mb-6 flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Shipping & Customer Details</h2>
                    <p className="text-xs text-gray-500 mt-1">Complete your info to initiate the WhatsApp order.</p>
                  </div>
                  <button
                    onClick={() => setIsCheckingOut(false)}
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-black transition font-semibold"
                  >
                    <ArrowLeft size={14} /> Back to Bag
                  </button>
                </div>

                <form onSubmit={handleWhatsAppCheckout} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="checkout-name" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="checkout-name"
                      required
                      value={customerInfo.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Priyan Sam"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black transition"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="checkout-phone" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Contact Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      id="checkout-phone"
                      required
                      value={customerInfo.phone}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black transition"
                    />
                  </div>

                  {/* Address */}
                  <div>
                    <label htmlFor="checkout-address" className="block text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
                      Delivery Address
                    </label>
                    <textarea
                      name="address"
                      id="checkout-address"
                      rows={4}
                      required
                      value={customerInfo.address}
                      onChange={handleInputChange}
                      placeholder="Write your complete shipping address..."
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-black transition resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-semibold transition flex items-center justify-center gap-2 text-sm uppercase tracking-wider shadow-md"
                  >
                    Place Order via WhatsApp <MessageSquare size={18} />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right Panel: Summary Box */}
          <div className="lg:col-span-5">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wider pb-4 border-b border-gray-200">
                Order Summary
              </h3>

              <div className="mb-6">
                <p className="text-sm text-gray-500">{cartItems.length} item{cartItems.length > 1 ? "s" : ""} in your bag</p>
              </div>

              {/* Checkout CTA */}
              {!isCheckingOut ? (
                <button
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full py-4 bg-[#0e0906] hover:bg-neutral-800 text-white rounded-full font-semibold transition flex items-center justify-center gap-2 text-sm uppercase tracking-wider shadow-md"
                >
                  Proceed to Checkout <ArrowRight size={16} />
                </button>
              ) : (
                <div className="text-center text-xs text-gray-400 font-semibold border-t border-dashed border-gray-200 pt-4">
                  Please complete customer form on the left to submit.
                </div>
              )}

              <div className="mt-6 text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
                <Ticket size={12} className="text-amber-500" /> Use promo code <span className="font-bold text-gray-600">LOMEN10</span> for 10% off.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPages;
