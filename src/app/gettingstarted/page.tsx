'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const GettingStarted: React.FC = () => {
  const searchParams = useSearchParams();
  const firstName = searchParams.get('firstName') || 'User';
  const [linkedinUrl, setLinkedinUrl] = useState('');

  const handleLinkedinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the linkedinUrl to your API
    console.log('LinkedIn URL submitted:', linkedinUrl);
    // Add your API call here
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
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-6xl">
          <div className="flex">
            {/* Left side - Welcome message and LinkedIn form */}
            <div className="w-1/2 pr-8">
              {/* Back button */}
              <Link href="/" className="inline-flex items-center mb-6 text-gray-300 hover:text-white transition-colors">
                <div className="bg-gray-700 p-1 rounded-lg border border-gray-600 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                </div>
                <span className="text-sm">Back</span>
              </Link>
              
              <h2 className="text-3xl font-extrabold text-white mb-6">
                Welcome, {firstName}!
              </h2>
              
              {/* LinkedIn URL section */}
              <div className="mt-8">
                <h3 className="text-xl font-bold text-white mb-2">
                  Connect Your LinkedIn Profile
                </h3>
                <p className="text-gray-400 mb-4">
                  Paste your LinkedIn profile URL to sync your profile with our app.
                </p>
                <form onSubmit={handleLinkedinSubmit}>
                  <div className="flex">
                    <input
                      type="url"
                      value={linkedinUrl}
                      onChange={(e) => setLinkedinUrl(e.target.value)}
                      placeholder="https://www.linkedin.com/in/yourprofile"
                      className="flex-grow px-3 py-2 bg-gray-800 text-white rounded-l-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      required
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-orange-600 text-white rounded-r-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      Sync
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
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;