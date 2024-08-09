import React from "react";
import Carousel from "./Carousel";
import { WalletConnectComponent } from './WalletConnectComponent';

function Banner({ isDarkMode }) {
  return (
    <div
      className={`bg-cover bg-center bg-no-repeat py-16 transition-colors duration-300 ${
        isDarkMode
          ? "bg-dark text-white bg-home-page-dark"
          : "bg-light text-black bg-home-page-light"
      }`}
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold font-montserrat mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-red-500">
            The Ultimate <span className="text-black">Crypto Portfolio Tracker</span>
          </h2>
        </div>
        
        <div className="w-full flex justify-center items-center mb-6">
          <Carousel />
        </div>
        
        <div className="max-w-4xl mx-auto mb-8">
          <h3
            className={`${
              isDarkMode ? "text-gray-300" : "text-gray-700"
            } text-xl md:text-2xl capitalize font-montserrat`}
          >
            Connect Your Hardware Wallet, Binance, Coinbase, MetaMask, Trust Wallet, And Any Other Crypto Platforms To CryptoTrack In Just A Few Clicks.
          </h3>
        </div>

        <div>
          <WalletConnectComponent />
        </div>
      </div>
    </div>
  );
}

export default Banner;
