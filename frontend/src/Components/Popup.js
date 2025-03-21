import React from 'react';

function Popup({ togglePopup }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-md p-6 rounded-lg shadow-lg relative">
        <button
          onClick={togglePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          ✖
        </button>
        <h2 className="text-xl font-bold mb-4">Buy Me a Coffee</h2>
        <p className="mb-4">
          If you enjoy my work, consider buying me a coffee to support me! 😊
        </p>
        <a
          href="https://buymeacoffee.com/prasadshass"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-500 text-black py-2 px-4 rounded shadow-md hover:bg-yellow-600"
        >
          Buy Me a Coffee
        </a>
      </div>
    </div>
  );
}

export default Popup;
