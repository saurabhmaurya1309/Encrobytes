import React from 'react';

const NatureGlow = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
          Nature's Glow for Hair & Skin
        </h2>
        <p className="mt-4 text-base text-gray-500 text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do
        </p>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="bg-green-600 rounded-md py-4 px-6 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-green-200 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-base font-medium text-white">Glowing Skin</span>
          </div>
          <div className="bg-green-600 rounded-md py-4 px-6 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-green-200 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-base font-medium text-white">Shiny Hair</span>
          </div>
          <div className="bg-green-600 rounded-md py-4 px-6 flex items-center justify-center">
            <svg
              className="w-6 h-6 text-green-200 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-base font-medium text-white">Herbal Assurance</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureGlow;