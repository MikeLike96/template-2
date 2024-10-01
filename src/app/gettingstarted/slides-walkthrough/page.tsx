'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

// Add this line to explicitly import JSX
import type { JSX } from 'react';

// Define the structure of a slide
interface Slide {
  title: string;
  description: string;
}

// Updated array of slides
const slides: Slide[] = [
  { title: "How to trust users", description: "Find your trusted Swarm users. By trusting them, you consent to the app coordinating LinkedIn engagement between you and these users. This includes managing likes on each other's posts, promoting mutual support within the network and optimizing tours and your company's collective Linkedin presence." },
  { title: "How to add company posts", description: "As a company admin, amplify your LinkedIn Company Page content with ease. In the 'My post' section, you'll find a one-click solution to import company posts directly into your swarm. This seamless integration ensures your team stays aligned with official messaging, saves time, and empowers everyone to share company updates effortlessly. Expand your reach and maintain consistency across platforms with just a single click." },
  { title: "How to create a post using AI", description: "Boost your social presence with ease. Share content by pasting LinkedIn URLs or create new posts with our AI tool. Enhance your messages with images and emojis for added impact. Craft engaging content for your network in seconds, whether you're sharing existing ideas or generating fresh ones." },
];

export default function LinkedInSyncPage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      router.back();
    }
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
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            {/* Left column: Text content and buttons */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="text-left mb-8">
                <h2 className="text-3xl font-extrabold text-white mb-4">
                  {slides[currentSlide].title}
                </h2>
                <p className="text-lg text-gray-300">
                  {slides[currentSlide].description}
                </p>
              </div>

              {/* Navigation buttons */}
              <div className="flex space-x-4">
                <button
                  onClick={handleBack}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                >
                  Back
                </button>
                {currentSlide < slides.length - 1 ? (
                  <button
                    onClick={handleNext}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                  >
                    Next
                  </button>
                ) : (
                  <button
                    onClick={() => router.push('/gettingstarted/finish/')}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Finish
                  </button>
                )}
              </div>
            </div>

            {/* Right column: Image placeholder */}
            <div className="w-full md:w-1/2">
              <div className="bg-gray-700 rounded-lg flex items-center justify-center" style={{ aspectRatio: '16 / 9' }}>
                <p className="text-gray-400 text-lg">Slide {currentSlide + 1} Image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}