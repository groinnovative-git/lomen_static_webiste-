import React from "react";
import { Package, Clock, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OrdersPage = () => {
  const mockOrders = [
    {
      id: "LM-892401",
      date: "May 14, 2026",
      status: "Delivered",
      total: 189.98,
      items: [
        { name: "Classic Oxford Shirt", quantity: 1, price: 89.99, size: "M" },
        { name: "Tailored Dress Shirt", quantity: 1, price: 99.99, size: "L" }
      ]
    },
    {
      id: "LM-348102",
      date: "April 02, 2026",
      status: "Delivered",
      total: 79.99,
      items: [
        { name: "Slim Fit Chinos", quantity: 1, price: 79.99, size: "32" }
      ]
    }
  ];

  return (
    <div className="bg-white min-h-screen py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-light text-gray-900 mb-12">
          Your Order <span className="font-semibold">History</span>
        </h1>

        {mockOrders.length === 0 ? (
          <div className="text-center py-16 border border-dashed border-gray-200 rounded-2xl">
            <Package size={36} className="text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-sm mb-6">You haven't placed any orders yet.</p>
            <Link to="/product" className="px-6 py-2.5 bg-black text-white rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-neutral-800 transition">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            {mockOrders.map((order) => (
              <div key={order.id} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                {/* Order Header */}
                <div className="bg-gray-50 px-6 py-4 flex flex-wrap justify-between items-center gap-4 border-b border-gray-100 text-sm">
                  <div className="flex gap-8">
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Order Placed</p>
                      <p className="text-gray-700 font-medium mt-1">{order.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Reference ID</p>
                      <p className="text-gray-700 font-mono mt-1">{order.id}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-semibold">
                    <ShieldCheck size={14} /> {order.status}
                  </span>
                </div>

                {/* Order Items */}
                <div className="p-6 divide-y divide-gray-50">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="py-4 first:pt-0 last:pb-0">
                      <h4 className="font-semibold text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">Size: {item.size} • Qty: {item.quantity}</p>
                    </div>
                  ))}
                </div>

                {/* Order Footer */}
                <div className="px-6 py-4 bg-white border-t border-gray-50 flex justify-end">
                  <Link to="/product" className="text-xs font-semibold text-[#0e0906] hover:underline flex items-center gap-1">
                    Buy it again <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
