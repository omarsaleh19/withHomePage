import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { AppKitProvider } from './AppKitProvider';
import WalletData from './components/WalletData';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  const [wallet, setWallet] = useState({
    Address: '',
    Network: '',
    isConnected: false
  });

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleConnect = (address, network, isConnected) => {
    setWallet({
      Address: address,
      Network: network,
      isConnected: isConnected,
    });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <AppKitProvider>
      <BrowserRouter>
        <div className={`${isDarkMode ? 'dark' : ''}`}>
          <NavBar handleConnect={handleConnect} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route
              path="/"
              element={wallet.isConnected ? (
                <WalletData wallet={wallet} />
              ) : (
                <Banner />
              )}
            />
            <Route path="/wallet" element={<WalletData wallet={wallet} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppKitProvider>
  );
}

export default App;
