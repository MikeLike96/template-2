'use client';

import React, { useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

export default function ClientComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const firstName = searchParams.get('firstName') || 'User';
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
    <>
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
    </>
  );
}