import React from "react";

const LoadingTemplate = () => {
  return (
    <div className="p-4 grid grid-cols-3 gap-4 justify-between h-screen">
      <h1 className="col-span-3 text-3xl font-bold text-center mb-4">
        Loading Microseasons...
      </h1>
      <div className="col-span-3">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-gray-400 h-12 w-12"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-gray-400 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-gray-400 rounded"></div>
              <div className="h-4 bg-gray-400 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingTemplate;
