'use client';

import { useEffect } from 'react';
import { useCartStore } from '@/lib/cart-store';
import Link from 'next/link';

export default function SuccessPage() {
const {clear} = useCartStore();

  useEffect(() => {
    clear(); // ✅ clear cart when page loads
  }, [clear]);


  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="bg-green-100 p-6 rounded-full mb-6">
        <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Thank you for your purchase. We are processing your order and will contact you shortly.
      </p>
      <Link 
        href="/" 
        className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  )
}
