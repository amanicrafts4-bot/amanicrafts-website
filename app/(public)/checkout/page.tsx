'use client';

import { useCartStore } from '@/lib/cart-store';
import { createCheckout } from '@/app/actions/payment';
import { useState } from 'react';
import Image from 'next/image';

export default function CheckoutPage() {
  const { items, totalAmount } = useCartStore();
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (items.length === 0) return;

    setLoading(true);

    const amountInCents = Math.round(totalAmount * 100);
    const res = await createCheckout(amountInCents);

    if (res.success) {
      window.location.href = res.url;
    } else {
      alert(res.error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32">

      {/* 🔝 Header */}
      <div className="mt-20 bg-white border-b px-4 py-3 flex items-center justify-center">
        <h1 className="text-lg font-semibold">Checkout</h1>
       
      </div>

      <div className="max-w-6xl mx-auto">
        {/* 🛒 Items */}
        <div className="p-4 space-y-4">
            {items.map((item) => (
            <div
                key={item.id}
                className="flex gap-4 bg-white p-3 items-center rounded-xl shadow-sm"
            >
                {/* 🖼 Product Image */}
                {item.image && <div className="w-10 h-10 sm:w-16 sm:h-16 bg-muted flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        sizes="96px"
                        loading="lazy"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
}
                {/* 📦 Info */}
                <div className="flex-1">
                <p className="font-medium text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">
                    Qty: {item.quantity}
                </p>
                </div>

                {/* 💰 Price */}
                <div className="text-sm font-semibold">
                R {(item.price * item.quantity).toFixed(2)}
                </div>
            </div>
            ))}
        </div>

        {/* 📍 Delivery / Info */}
        <div className="px-4 space-y-4">
            <div className="bg-white p-4 rounded-xl shadow-sm space-y-2">
            <p className="text-sm font-medium">Delivery</p>
            <p className="text-xs text-gray-500">
                Standard delivery (2–4 days)
            </p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow-sm space-y-2">
            <p className="text-sm font-medium">Payment</p>
            <p className="text-xs text-gray-500">
                Secure payment via Yoco
            </p>
            </div>
        </div>

        {/* 💰 Summary */}
        <div className="p-4 space-y-2 text-sm">
            <div className="flex justify-between">
            <span>Subtotal</span>
            <span>R {totalAmount.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-500">
            <span>Delivery</span>
            <span>Free</span>
            </div>
        </div>

        {/* 🔒 Trust Signals */}
        <div className="px-4 text-xs text-gray-500 flex items-center gap-2">
            <span>🔒</span>
            <span>Secure checkout • SSL encrypted</span>
        </div>
      </div>

    {/* 💳 Sticky Pay Bar */}
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
        <div className="flex items-center justify-between mb-3 max-w-6xl mx-auto px-2">
            <span className="text-sm text-gray-600">Total</span>
            <span className="text-lg font-bold">
                R {totalAmount.toFixed(2)}
            </span>
        </div>

        <button
        onClick={handleCheckout}
        disabled={items.length === 0 || loading}
        className="w-full bg-black text-white py-4 rounded-xl font-semibold text-lg active:scale-[0.98] transition disabled:bg-gray-400"
        >
        {loading ? "Processing..." : `Pay Now`}
        </button>
    </div>
    </div>
  );
}