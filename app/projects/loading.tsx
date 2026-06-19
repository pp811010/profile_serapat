'use client';

export default function Loading() {
  const Shimmer = ({ className = "" }: { className?: string }) => (
    <div
      className={`bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded ${className}`}
    />
  );

  return (
    <main className="p-6 md:p-10 lg:p-14 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Header Section */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            <div className="flex flex-col">
              {/* Title & Author */}
              <div className="flex items-center gap-3 mb-6">
                <Shimmer className="w-12 h-12 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <Shimmer className="h-6 w-48 mb-2" />
                  <Shimmer className="h-4 w-32" />
                </div>
              </div>

              {/* Role, Status, Platform */}
              <div className="space-y-3 mb-8">
                <Shimmer className="h-4 w-64" />
                <Shimmer className="h-4 w-56" />
                <Shimmer className="h-4 w-72" />
              </div>

              {/* Tech Stack */}
              <div>
                <Shimmer className="h-5 w-28 mb-4" />
                <div className="flex flex-wrap gap-2">
                  <Shimmer className="h-10 w-20 rounded-lg" />
                  <Shimmer className="h-10 w-24 rounded-lg" />
                  <Shimmer className="h-10 w-16 rounded-lg" />
                  <Shimmer className="h-10 w-28 rounded-lg" />
                  <Shimmer className="h-10 w-20 rounded-lg" />
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <Shimmer className="h-80 lg:h-96 rounded-2xl" />
          </div>
        </div>

        {/* Description + Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <Shimmer className="h-6 w-32 mb-4" />
            <div className="space-y-3">
              <Shimmer className="h-4 w-full" />
              <Shimmer className="h-4 w-11/12" />
              <Shimmer className="h-4 w-10/12" />
              <Shimmer className="h-4 w-9/12" />
            </div>
          </div>

          {/* Highlights Sidebar */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 h-fit">
            <div className="flex justify-end mb-4">
              <Shimmer className="h-8 w-24 rounded-lg" />
            </div>
            <Shimmer className="h-5 w-40 mb-4" />
            <div className="space-y-3">
              <div className="flex gap-2">
                <Shimmer className="h-4 w-4 rounded-full flex-shrink-0 mt-0.5" />
                <Shimmer className="h-4 w-full" />
              </div>
              <div className="flex gap-2">
                <Shimmer className="h-4 w-4 rounded-full flex-shrink-0 mt-0.5" />
                <Shimmer className="h-4 w-11/12" />
              </div>
              <div className="flex gap-2">
                <Shimmer className="h-4 w-4 rounded-full flex-shrink-0 mt-0.5" />
                <Shimmer className="h-4 w-10/12" />
              </div>
              <div className="flex gap-2">
                <Shimmer className="h-4 w-4 rounded-full flex-shrink-0 mt-0.5" />
                <Shimmer className="h-4 w-9/12" />
              </div>
            </div>
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mb-12">
          <Shimmer className="h-6 w-40 mb-4" />
          <div className="space-y-3">
            <div className="flex gap-2">
              <Shimmer className="h-4 w-4 rounded-full flex-shrink-0 mt-0.5" />
              <Shimmer className="h-4 w-full" />
            </div>
            <div className="flex gap-2">
              <Shimmer className="h-4 w-4 rounded-full flex-shrink-0 mt-0.5" />
              <Shimmer className="h-4 w-11/12" />
            </div>
            <div className="flex gap-2">
              <Shimmer className="h-4 w-4 rounded-full flex-shrink-0 mt-0.5" />
              <Shimmer className="h-4 w-10/12" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <Shimmer className="h-6 w-56 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <div className="flex justify-between items-center mb-3">
                  <Shimmer className="h-3 w-20" />
                  <Shimmer className="h-6 w-16 rounded-lg" />
                </div>
                <Shimmer className="h-5 w-3/4 mb-3" />
                <Shimmer className="h-4 w-full mb-2" />
                <Shimmer className="h-4 w-11/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Actors */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Shimmer className="w-10 h-10 rounded-xl flex-shrink-0" />
            <div>
              <Shimmer className="h-5 w-24 mb-1" />
              <Shimmer className="h-3 w-40" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="flex flex-col items-center text-center">
                  <Shimmer className="w-16 h-16 rounded-2xl mb-4" />
                  <Shimmer className="h-5 w-28 mb-3" />
                  <Shimmer className="h-4 w-full mb-2" />
                  <Shimmer className="h-4 w-10/12" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div className="mb-12">
          <Shimmer className="h-6 w-32 mb-6" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="overflow-hidden rounded-2xl border border-gray-200">
                <Shimmer className="w-full aspect-video" />
                <div className="p-4 bg-white border-t border-gray-200">
                  <Shimmer className="h-4 w-24 mx-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}