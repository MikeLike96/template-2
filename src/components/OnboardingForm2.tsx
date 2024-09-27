'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export function OnboardingForm2() {
  // State variables for form fields
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [swarmName, setSwarmName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [swarmSize, setSwarmSize] = useState('');
  const router = useRouter();

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams({
      firstName,
      lastName,
      companyEmail,
      swarmName,
      companyName,
      swarmSize
    });
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
      <div className="flex-grow flex items-center justify-center px-4 py-12"> {/* Added vertical padding */}
        <div className="w-full max-w-6xl">
          <div className="flex">
            {/* Left side - Form */}
            <div className="w-1/2 pr-8">
              <div className="max-w-md w-full space-y-8">
                <div className="pt-8"> {/* Increased top padding */}
                  <div className="flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-orange-500 flex items-center justify-center">
                      <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                    Welcome to Content Swarm!
                  </h2>
                  <p className="mt-2 text-center text-sm text-gray-400">
                    Let's get started! Please enter your details below to set up your account.
                  </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                  <div className="rounded-md shadow-sm space-y-4">
                    <div>
                      <label htmlFor="firstName" className="sr-only">
                        First name
                      </label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="sr-only">
                        Last name
                      </label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
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
                    <div>
                      <label htmlFor="swarmName" className="sr-only">
                        Swarm name
                      </label>
                      <input
                        id="swarmName"
                        name="swarmName"
                        type="text"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                        placeholder="Swarm name"
                        value={swarmName}
                        onChange={(e) => setSwarmName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="companyName" className="sr-only">
                        Company name
                      </label>
                      <input
                        id="companyName"
                        name="companyName"
                        type="text"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                        placeholder="Company name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="swarmSize" className="block text-sm font-medium text-gray-300 mb-2">
                        Please select your swarm size:
                      </label>
                      <select
                        id="swarmSize"
                        name="swarmSize"
                        required
                        className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white bg-gray-800 focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                        value={swarmSize}
                        onChange={(e) => setSwarmSize(e.target.value)}
                      >
                        <option value="">Select swarm size</option>
                        <option value="10-24">10 - 24 users</option>
                        <option value="25-49">25 - 49 users</option>
                        <option value="50-99">50 - 99 users</option>
                        <option value="100-250">100 - 250 users</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-4 pb-8"> {/* Added padding top and bottom */}
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
                <Image 
                  src="/cs piles 3.png" 
                  alt="Content Swarm Features" 
                  width={1000}
                  height={1000}
                  layout="responsive"
                  className="rounded-lg"
                />
                {/* Removed the gradient overlay div */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnboardingForm2;