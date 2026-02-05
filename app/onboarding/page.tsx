// app/onboarding/page.tsx
"use client";

import { useState } from "react";
import ContactInput from "@/components/PhoneInput";
import { completeOnboarding } from "@/actions/onboarding";

export default function OnboardingPage() {
  const [phone, setPhone] = useState<string>("");

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Complete your profile</h1>
        <p className="text-gray-600 mb-6">We need your phone number to get started.</p>
        
        <form action={completeOnboarding} className="space- some-y-4">
          <ContactInput onChange={(val) => setPhone(val || "")} />
          <input type="hidden" name="phoneNumber" value={phone} />
          
          <button 
            type="submit"
            disabled={!phone}
            className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-300 transition-colors"
          >
            Finish Setup
          </button>
        </form>
      </div>
    </div>
  );
}
