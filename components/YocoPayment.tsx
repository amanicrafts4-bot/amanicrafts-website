'use client';

import { createCheckout } from "@/app/actions/payment";
import { useCartStore } from "@/lib/cart-store";
// import { processPayment } from "@/app/actions/payment";


export default function YocoPayment() {
  const { items, totalAmount, clear } = useCartStore();
  

  const handlePayment = async () => {
  if (items.length === 0) return alert("Your cart is empty!");

  const amountInCents = Math.round(totalAmount * 100);

  const res = await createCheckout(amountInCents);

  if (res.success) {
    window.location.href = res.url; // 🔥 redirect to Yoco checkout
  } else {
    alert(res.error);
  }
};

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-lg font-bold border-b pb-2">
        <span>Total:</span>
        <span>R {totalAmount.toFixed(2)}</span>
      </div>
      <button 
        onClick={handlePayment}
        disabled={items.length === 0}
        className="w-full bg-black text-white py-4 rounded-md font-bold hover:bg-gray-800 disabled:bg-gray-400"
      >
        {items.length === 0 ? "Cart Empty" : `Pay R ${totalAmount.toFixed(2)}`}
      </button>
    </div>
  );
}
