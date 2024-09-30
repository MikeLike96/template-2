'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LinkedInSyncPage() {
  const router = useRouter();
  const [linkedinUrl, setLinkedinUrl] = useState('');

  const handleLinkedinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('LinkedIn URL submitted:', linkedinUrl);
    
    // Simulate API call with a timeout
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Redirect to the success page
    router.push('/gettingstarted/success');
  };

  return (
    <div className="flex min-h-screen bg-white">
      <div className="flex-1 flex flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Connect Your LinkedIn Profile!
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Paste your LinkedIn profile URL to sync your profile with our app.
          </p>
          <form onSubmit={handleLinkedinSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="linkedin-url" className="block text-sm font-medium text-gray-700">
                LinkedIn URL
              </label>
              <div className="mt-1">
                <input
                  id="linkedin-url"
                  type="url"
                  required
                  value={linkedinUrl}
                  onChange={(e) => setLinkedinUrl(e.target.value)}
                  placeholder="https://www.linkedin.com/in/yourprofile"
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Sync LinkedIn Profil
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <Image
          className="absolute inset-0 h-full w-full object-cover"
          src="/placeholder-image.jpg"
          alt="Placeholder"
          layout="fill"
        />
      </div>
    </div>
  );
}