export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-2xl">🚧</span>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h1>
        <p className="text-gray-600 mb-6">
          We're working hard to bring you this feature. Please check back later!
        </p>
        <a
          href="/"
          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}