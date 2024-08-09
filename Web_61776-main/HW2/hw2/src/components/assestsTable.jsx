import React from 'react';

const AssetsTable = ({ tokens }) => {
  const baseImageUrl = '/node_modules/cryptocurrency-icons/svg/color/'; // Base URL for token images

  const handleImageError = (e) => {
    e.target.onerror = null;
    e.target.src = ''; // Remove the image source to hide the broken image icon
  };

  return (
    <div id="AssetsTable" className="w-full overflow-x-auto rounded-3xl border-slate-400 dark:border-slate-700 p-4">
      <table className="min-w-full bg-gray-100 dark:bg-gray-800 rounded-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Token Name</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">24h Change (%)</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price (USD)</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Avg Buy (USD)</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Total (USD)</th>
          </tr>
        </thead>
        <tbody id="cryptoTableBody" className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
          {tokens && tokens.map((token, index) => {
              const decimals = parseInt(token.tokenInfo.decimals);
              const price = token.tokenInfo.price.rate.toFixed(4);
              const balance = (parseFloat(token.balance) / Math.pow(10, decimals)).toFixed(5);
              const priceChange = token.tokenInfo.price.diff.toFixed(2); // 24h Change
              const avgBuy = token.tokenInfo.price.bid ? token.tokenInfo.price.bid.toFixed(4) : '0'; // Avg Buy Price
              const total = (parseFloat(price) * parseFloat(balance)).toFixed(2); // Total value in USD
              const tokenSymbol = token.tokenInfo.symbol.toLowerCase();
              const tokenImage = `${baseImageUrl}${tokenSymbol}.svg`;

              return (
                <tr key={index}>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div className="flex gap-3 text-lg text-gray-900 dark:text-white">
                      <img src={tokenImage} alt={token.tokenInfo.name} width="24" height="24" onError={handleImageError} />
                      <div className="flex flex-col items-center">
                        <div className="text-lg text-gray-900 dark:text-white">
                          {token.tokenInfo.symbol}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {token.tokenInfo.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div className="text-lg text-gray-900 dark:text-white">{balance}</div>
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div className="text-lg text-gray-900 dark:text-white">{priceChange}%</div>
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div className="text-lg text-gray-900 dark:text-white">{price}$</div>
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div className="text-lg text-gray-900 dark:text-white">{avgBuy}$</div>
                  </td>
                  <td className="px-6 py-4 text-center whitespace-nowrap">
                    <div className="text-lg text-gray-900 dark:text-white">{total}$</div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default AssetsTable;
