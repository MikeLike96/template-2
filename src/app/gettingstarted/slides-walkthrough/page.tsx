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
  { title: "Trusting Overview - How to trust users", description: "Learn how to trust with users on our platform." },
  { title: "Add Company Post - How to add company posts", description: "Discover the process of adding company posts to your profile." },
  { title: "Creating a Post - How to create a post using built-in AI", description: "Explore our AI-powered tools for effortless content creation." },
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
          <div className="flex flex-col items-center">
            {/* Slide content */}
            <div className="w-full max-w-2xl text-center mb-8">
              <h2 className="text-3xl font-extrabold text-white mb-4">
                {slides[currentSlide].title}
              </h2>
              <p className="text-lg text-gray-300">
                {slides[currentSlide].description}
              </p>
            </div>

            {/* Image placeholder */}
            <div className="w-full max-w-xl relative mb-8">
              <div className="bg-gray-700 rounded-lg flex items-center justify-center" style={{ aspectRatio: '16 / 9' }}>
                <p className="text-gray-400 text-lg">Slide {currentSlide + 1} Image</p>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between w-full max-w-xl">
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
                  onClick={() => router.push('/gettingstarted/success')}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  Finish
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}