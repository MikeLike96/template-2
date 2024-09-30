'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LinkedInSyncPage() {
  const router = useRouter();
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLinkedinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log('LinkedIn URL submitted:', linkedinUrl);
    
    // Simulate API call with a timeout
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirect to the LinkedIn review page
    router.push('/gettingstarted/linkedin-review');
  };

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
            {/* Left side - LinkedIn Form */}
            <div className="w-full md:w-1/2">
              <div className="text-center md:text-left">
                <h2 className="mt-6 text-3xl font-extrabold text-white">
                  Connect Your LinkedIn Profile
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  Paste your LinkedIn profile URL to sync your profile with our app.
                </p>
              </div>
              <div className="mt-8">
                <form onSubmit={handleLinkedinSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="linkedin-url" className="block text-sm font-medium text-gray-300">
                      LinkedIn URL
                    </label>
                    <input
                      id="linkedin-url"
                      type="url"
                      required
                      value={linkedinUrl}
                      onChange={(e) => setLinkedinUrl(e.target.value)}
                      placeholder="https://www.linkedin.com/in/yourprofile"
                      className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-orange-500 focus:ring-orange-500 py-3 px-4"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
                  >
                    {isLoading ? 'Processing...' : 'Sync LinkedIn Profile'}
                  </button>
                </form>
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