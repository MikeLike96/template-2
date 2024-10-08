'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useRouter } from 'next/navigation';

// Add type declaration if @types/canvas-confetti is not available
declare module 'canvas-confetti';

export default function SuccessPage() {
  const router = useRouter();

  useEffect(() => {
    // Trigger confetti effect when the component mounts
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const handleContinue = () => {
    router.push('/gettingstarted/invite-members');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-extrabold mb-4">Congratulations!</h1>
      <p className="text-xl mb-8">You have successfully created your swarm profile. Check your inbox for a verification email.</p>
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