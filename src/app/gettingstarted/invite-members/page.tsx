'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export default function InviteMembersPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [emails, setEmails] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [maxEmails, setMaxEmails] = useState(0);

  useEffect(() => {
    const swarmSize = searchParams.get('swarmSize');
    let limit = 0;
    switch (swarmSize) {
      case '10-24':
        limit = 24;
        break;
      case '25-49':
        limit = 49;
        break;
      case '50-99':
        limit = 99;
        break;
      case '100-250':
        limit = 250;
        break;
      default:
        limit = 24; // Default to 24 if no valid swarm size is found
    }
    setMaxEmails(limit);
  }, [searchParams]);

  const handleConfirm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call with a timeout
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would typically send the emails to your backend
    console.log('Emails to invite:', emails);
    
    // Redirect to the slides-walkthrough page
    router.push('/gettingstarted/slides-walkthrough');
  };

  const handleBack = () => {
    router.back();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    if (value.endsWith(',')) {
      addEmail(value.slice(0, -1));
    }
  };

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue) {
      e.preventDefault();
      addEmail(inputValue);
    }
  };

  const addEmail = (email: string) => {
    const trimmedEmail = email.trim();
    if (trimmedEmail && !emails.includes(trimmedEmail) && emails.length < maxEmails) {
      setEmails([...emails, trimmedEmail]);
      setInputValue('');
    }
  };

  const removeEmail = (emailToRemove: string) => {
    setEmails(emails.filter(email => email !== emailToRemove));
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
            {/* Left side - Invite Members */}
            <div className="w-full md:w-1/2">
              <div className="text-center md:text-left">
                <h2 className="mt-6 text-3xl font-extrabold text-white">
                  Invite Team Members
                </h2>
                <p className="mt-2 text-sm text-gray-400">
                  Enter email addresses to invite team members. You can invite up to {maxEmails} members.
                </p>
              </div>
              <div className="mt-8">
                <form onSubmit={handleConfirm} className="space-y-6">
                  <div>
                    <label htmlFor="emails" className="block text-sm font-medium text-gray-300">
                      Email Addresses ({emails.length}/{maxEmails})
                    </label>
                    <div className="mt-1 flex flex-wrap gap-2 p-2 rounded-md bg-gray-700 border border-gray-600">
                      {emails.map((email, index) => (
                        <div key={index} className="bg-gray-600 text-white px-2 py-1 rounded-md flex items-center">
                          {email}
                          <button
                            type="button"
                            onClick={() => removeEmail(email)}
                            className="ml-2 text-gray-300 hover:text-white"
                          >
                            &times;
                          </button>
                        </div>
                      ))}
                      <input
                        id="emails"
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeyDown}
                        className="flex-grow bg-transparent outline-none text-white"
                        placeholder={emails.length < maxEmails ? "Enter email and press Enter" : "Maximum emails reached"}
                        disabled={emails.length >= maxEmails}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-4">
                    <button
                      type="submit"
                      disabled={isLoading || emails.length === 0}
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
                    >
                      {isLoading ? 'Processing...' : 'Confirm and Continue'}
                    </button>
                    <Link
                      href="/gettingstarted/slides-walkthrough"
                      className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-300 bg-transparent hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                    >
                      Skip this step for now
                    </Link>
                  </div>
                </form>
              </div>
            </div>

            {/* Right side - Image Placeholder */}
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="w-full max-w-xl relative">
                <div className="bg-gray-700 rounded-lg flex items-center justify-center" style={{ aspectRatio: '1 / 1' }}>
                  <p className="text-gray-400 text-lg">Team collaboration illustration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}