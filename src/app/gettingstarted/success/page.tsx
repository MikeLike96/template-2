import Link from 'next/link';

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-extrabold mb-4">Congratulations!</h1>
      <p className="text-xl mb-8">You have successfully created your swarm profile.</p>
      <Link
        href="/app"
        className="px-6 py-3 bg-orange-600 text-white rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-colors"
      >
        Enter the App
      </Link>
    </div>
  );
}