export default function Loading() {
  return (
    <main className="p-6 md:p-10 lg:p-14 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 mb-12">
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
          <div className="h-96 bg-gray-200 rounded-2xl"></div>
        </div>
      </div>
    </main>
  );
}