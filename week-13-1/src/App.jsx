import React from "react";

function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-blue-900">
      <div className="text-center">
        {/* Logo & Title */}
        <h1 className="text-white text-2xl font-semibold mb-4">
          <span className="text-teal-400 mb-80">📹 Webinar</span>.gg
        </h1>

        {/* Heading */}
        <h2 className="text-white text-xl font-bold">Verify Your Age</h2>

        {/* Subtext */}
        <p className="text-gray-300 text-sm mt-2">
          Please confirm your birth year. This data will not be stored.
        </p>

        {/* Input Box */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="27 July 2002"
            className="w-64 h-12 text-white bg-gray-800 border border-gray-600 rounded-md text-center"
          />
        </div>

        {/* Continue Button */}
        <div className="mt-6">
          <button className="w-64 h-12 bg-teal-400 text-black font-semibold rounded-md hover:bg-teal-300">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
