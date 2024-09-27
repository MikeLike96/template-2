'use client';

import React, { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ClientComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const firstName = searchParams.get('firstName') || 'User';
  const [verificationCode, setVerificationCode] = useState('');

  const handleVerificationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Verification code submitted:', verificationCode);
    
    // Simulate API call with a timeout
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirect to the credit card page
    router.push('/gettingstarted/Stripe/CreditCard');
  };

  return (
    <>
      <h2 className="text-3xl font-extrabold text-white mb-2">
        Enter Verification Code
      </h2>
      
      {/* Verification section */}
      <div className="mt-2 max-w-md w-full space-y-4">
        <p className="text-gray-400">
          Please enter the 5-character verification code sent to your email inbox.
        </p>
        <form onSubmit={handleVerificationSubmit} className="space-y-6">
          <div className="flex justify-between mb-4">
            {[0, 1, 2, 3, 4].map((index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                className="w-14 h-12 text-center bg-gray-800 text-white rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
                pattern="[A-Za-z0-9]"
                value={verificationCode[index] || ''}
                onChange={(e) => {
                  const newValue = e.target.value;
                  setVerificationCode((prev) => {
                    const updated = prev.split('');
                    updated[index] = newValue;
                    return updated.join('');
                  });
                  if (newValue && e.target.nextElementSibling) {
                    (e.target.nextElementSibling as HTMLInputElement).focus();
                  }
                }}
              />
            ))}
          </div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}