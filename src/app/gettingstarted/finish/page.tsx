'use client';

import { useRouter } from 'next/navigation';

export default function SuccessPage() {
  const router = useRouter();

  const handleContinue = () => {
    // Redirect to the specified URL
    window.location.href = 'https://app.contentswarm.io/login';
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-extrabold mb-4">You're all set to go!</h1>
      <p className="text-xl mb-8">Click continue to enter the Content Swarm app and begin sharing your content!</p>
      <div className="space-y-4 flex flex-col items-center">
        <button
          onClick={handleContinue}
          className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors text-center"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
