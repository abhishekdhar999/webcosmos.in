import React from "react";

export const BlogSection = () => {
  return (
    <div className="bg-gray-900 py-16 lg:py-24">
      {/* Main container for the blog section */}
      <div className="relative px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          {/* Heading for the blog section */}
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Latest Articles
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg sm:text-xl text-gray-400 sm:mt-4">
            This is your life and it&apos;s ending one minute @ a time...
          </p>
          <button className="mt-6 text-lg sm:text-xl text-blue-500 hover:underline">
            View All Articles →
          </button>
        </div>

        {/* Blog articles container */}
        <div className="mt-12 grid gap-8 lg:gap-12 sm:grid-cols-2 md:grid-cols-3">
          {/* Individual blog article card */}
          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg shadow-red-200">
            <div className="flex-shrink-0">
              <img
                className="h-64 w-full object-cover"
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                alt="Article Cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-secondary p-8">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">New</p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-white">
                    Boost your conversion rate
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Second blog article card */}
          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg shadow-red-200">
            <div className="flex-shrink-0">
              <img
                className="h-64 w-full object-cover"
                src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                alt="Article Cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-secondary p-8">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">New</p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-white">
                    How to use search engine optimization to drive sales
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* Third blog article card */}
          <div className="flex flex-col overflow-hidden rounded-lg shadow-lg shadow-red-200">
            <div className="flex-shrink-0">
              <img
                className="h-64 w-full object-cover"
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                alt="Article Cover"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between bg-secondary p-8">
              <div className="flex-1">
                <p className="text-sm font-medium text-indigo-600">New</p>
                <a href="#" className="mt-2 block">
                  <p className="text-xl font-semibold text-white">
                    Improve your customer experience
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
