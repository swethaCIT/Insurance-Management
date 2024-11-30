import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="text-center text-white px-4 md:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Safeguard Today, Shine Tomorrow
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Flexible Insurance Plans for Every Stage of Life.
          </p>
          <p className="text-base md:text-lg mb-8">
            Providing peace of mind through tailored insurance solutions, we offer flexible plans, comprehensive coverage, and unmatched support to safeguard your future and ensure protection for what matters most.
          </p>
          <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-md hover:bg-yellow-400 transition duration-300">
            Pick Your Policy Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
