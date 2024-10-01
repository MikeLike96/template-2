'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function CreditCardForm() {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Perform client-side validation
      if (!validateCreditCardDetails(name, cardNumber, expiry, cvc)) {
        throw new Error('Invalid credit card details');
      }

      // Simulate API call with a timeout
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Form submitted:', { name, cardNumber, expiry, cvc });
      // Change this line to route to the correct path
      router.push('/onboarding2');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">
            Name on Card
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 py-3 px-4"
            placeholder="John Doe"
          />
        </div>
        <div>
          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-300">
            Card Number
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 py-3 px-4"
            placeholder="1234 5678 9012 3456"
          />
        </div>
        <div className="flex space-x-4">
          <div className="flex-1">
            <label htmlFor="expiry" className="block text-sm font-medium text-gray-300">
              Expiration Date
            </label>
            <input
              type="text"
              id="expiry"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 py-3 px-4"
              placeholder="MM / YY"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="cvc" className="block text-sm font-medium text-gray-300">
              CVC
            </label>
            <input
              type="text"
              id="cvc"
              value={cvc}
              onChange={(e) => setCvc(e.target.value)}
              required
              className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 py-3 px-4"
              placeholder="123"
            />
          </div>
        </div>
        {error && (
          <p className="text-red-500 text-sm">{error}</p>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
        >
          {isLoading ? 'Processing...' : 'Start Free Trial'}
        </button>
        <p className="text-sm text-gray-400 text-center mt-2">
          Your card won&apos;t be charged during the 14-day free trial.
        </p>
      </form>
      <div className="mt-4 flex justify-center">
        <Image
          src="/poweredbystripe.png"
          alt="Powered by Stripe"
          width={120}
          height={30}
        />
      </div>
    </div>
  );
}

// Helper function for credit card validation (implement according to your needs)
function validateCreditCardDetails(name: string, cardNumber: string, expiry: string, cvc: string): boolean {
  // Implement your validation logic here
  return true; // Placeholder return
}

export function CreditCard() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="w-full bg-white shadow-[0_4px_8px_rgba(0,0,0,0.1)]">
        <div className="max-w-6xl mx-auto py-4 px-4 flex justify-between items-center">
          <div className="flex-grow flex justify-center">
            <Image 
              src="/content-swarm-logo.png" 
              alt="Content Swarm Logo" 
              width={150}
              height={40}
            />
          </div>
          <a 
            href="https://contentswarm.io" 
            className="text-gray-700 hover:text-gray-900 transition-colors relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gray-300"></span>
            <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-orange-500 transition-all group-hover:w-full"></span>
          </a>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          {/* Back button */}
          <button
            onClick={handleBack}
            className="inline-flex items-center mb-6 text-gray-300 hover:text-white transition-colors"
          >
            <div className="bg-gray-700 p-1 rounded-lg border border-gray-600 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span className="text-sm">Back</span>
          </button>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - Credit Card Form */}
            <div className="w-full md:w-1/2">
              <div className="text-center md:text-left">
                <h2 className="mt-6 text-3xl font-extrabold text-white">
                  Enter Payment Details
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  Please provide your credit card information to start your free trial.
                </p>
              </div>
              <div className="mt-8">
                <CreditCardForm />
              </div>
            </div>

            {/* Right side - Image Placeholder */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="w-full max-w-xl relative">
                <div className="bg-gray-700 rounded-lg flex items-center justify-center" style={{ aspectRatio: '1 / 1' }}>
                  <p className="text-gray-400 text-lg">Image placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}