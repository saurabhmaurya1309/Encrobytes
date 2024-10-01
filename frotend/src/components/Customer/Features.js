import React from 'react';

const Features = () => {
  const featureData = [
    { icon: '✔️', title: 'Highest Quality', text: 'Integer quis tempor orci. Suspendisse potenti potenti.' },
    { icon: '🌿', title: 'No Sideeffect', text: 'Integer quis tempor orci. Suspendisse potenti potenti.' },
    { icon: '□△', title: 'Diverse Selection', text: 'Integer quis tempor orci. Suspendisse potenti potenti.' },
    { icon: '🎁', title: 'Eco Package', text: 'Integer quis tempor orci. Suspendisse potenti potenti.' },
    { icon: '🌱', title: 'Natural Ingredients', text: 'Integer quis tempor orci. Suspendisse potenti potenti.' },
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-green-600">Herbal</span> Beauty Expert
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Integer quis tempor orci. Suspendisse potenti. Interdum et malesuada fames ac ante ipsum 
          primis in faucibus. Quisque gravida
        </p>
      </div>
      <div className="mt-12">
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {featureData.map((feature, index) => (
            <li key={index} className="text-center">
              <div className="flex items-center justify-center w-24 h-24 mx-auto bg-green-100 rounded-full">
                <span className="text-3xl text-green-600">{feature.icon}</span>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-500">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;