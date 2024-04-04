import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar for Desktop */}
      <div className={`hidden md:block bg-gray-900 text-white w-64 ${isOpen ? 'block' : 'hidden'}`}>
        {/* Sidebar Content */}
        <div className="p-4">
          <h2 className="text-2xl font-bold">Sidebar</h2>
          {/* Add more sidebar content here */}
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <button className="md:hidden" onClick={toggleSidebar}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-white">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          )}
        </svg>
      </button>

      {/* Sidebar for Mobile */}
      <div className={`md:hidden bg-gray-900 text-white fixed top-0 left-0 h-full w-full z-50 overflow-y-auto ${isOpen ? 'block' : 'hidden'}`}>
        <div className="p-4">
          <h2 className="text-2xl font-bold">Sidebar</h2>
          {/* Add more sidebar content here */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
