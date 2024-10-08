'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md'; // Import the email icon

const OnboardingForm: React.FC = () => {
  // State variable for email field
  const [companyEmail, setCompanyEmail] = useState('');
  const router = useRouter();

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({ companyEmail });
    router.push(`/gettingstarted?${params.toString()}`);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
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
      <div className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl">
          <div className="flex">
            {/* Left side - Form */}
            <div className="w-1/2 pr-8">
              <div className="max-w-md w-full space-y-8">
                <div className="pt-8">
                  <div className="flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center">
                      <MdEmail className="h-12 w-12 text-white" /> {/* Replace the SVG with MdEmail icon */}
                    </div>
                  </div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                    Enter your email
                  </h2>
                  <p className="mt-2 text-center text-sm text-gray-400">
                    Please enter your email to receive a confirmation and get started.
                  </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <div className="rounded-md shadow-sm space-y-4">
                    <div>
                      <label htmlFor="companyEmail" className="sr-only">
                        Company email
                      </label>
                      <input
                        id="companyEmail"
                        name="companyEmail"
                        type="email"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                        placeholder="Company email"
                        value={companyEmail}
                        onChange={(e) => setCompanyEmail(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="pt-4 pb-8">
                    <button
                      type="submit"
                      className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="w-1/2 pl-8 flex items-center justify-center">
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
};

export default OnboardingForm;