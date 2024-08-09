
import React, { useState } from 'react';

const TabButtons = ({ setActiveTab }) => {
  const [activeButton, setActiveButton] = useState('');
  const [tabOpen, setTabOpen] = useState({
    assets: false,
    transactions: false,
    BestPerforming: false,
  });

  const handleClick = (tab) => {
    // Set all tabs to closed initially
    const allTabsClosed = {
      assets: false,
      transactions: false,
      BestPerforming: false,
    };

    if (tabOpen[tab]) {
      // If the tab is already open, close it
      setActiveTab(''); // Close the tab
      setActiveButton(''); // Turn off active button
      setTabOpen(allTabsClosed); // Close all tabs
    } else {
      // If the tab is closed, open it
      setActiveTab(tab); // Set active tab
      setActiveButton(tab); // Set active button for styling
      setTabOpen({
        ...allTabsClosed,
        [tab]: true, // Open the selected tab
      });
    }
  };

  return (
    <div className="w-full flex items-center justify-center space-x-4 mb-4">
      <button
        onClick={() => handleClick('assets')}
        className={`tab-btn px-4 py-2 text-lg font-bold border-b-4 
          ${activeButton === 'assets' ? 'text-yellow-400 border-yellow-400' : 'border-transparent'}
          hover:text-yellow-400 hover:border-yellow-400 transition duration-300`}
      >
        Assets
      </button>
      <button
        onClick={() => handleClick('transactions')}
        className={`tab-btn px-4 py-2 text-lg font-bold border-b-4 
          ${activeButton === 'transactions' ? 'text-yellow-400 border-yellow-400' : 'border-transparent'}
          hover:text-yellow-400 hover:border-yellow-400 transition duration-300`}
      >
        Transactions
      </button>
      <button
        onClick={() => handleClick('BestPerforming')}
        className={`tab-btn px-4 py-2 text-lg font-bold border-b-4 
          ${activeButton === 'BestPerforming' ? 'text-yellow-400 border-yellow-400' : 'border-transparent'}
          hover:text-yellow-400 hover:border-yellow-400 transition duration-300`}
      >
        BestPerforming
      </button>
    </div>
  );
};

export default TabButtons;