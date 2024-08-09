import React, { useState, useEffect } from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';
import { getUrlString } from './utils'; 

const TransactionTable = ({wallet}) => {
  const [transactions, setTransactions] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const baseImageUrl = '/node_modules/cryptocurrency-icons/svg/color/'; 

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const url = getUrlString(wallet.Network,'getAddressHistory', wallet.Address);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();

        setTransactions(json.operations);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [wallet.Address, wallet.Network]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return (
      <>
        <div>{date.toLocaleDateString()}</div>
        <div>{date.toLocaleTimeString()}</div>
      </>
    );
  };

  const generateTableRow = (item, index) => {
    const tokenDecimals = item.tokenInfo.decimals;
    const tokenValue = (item.value / Math.pow(10, tokenDecimals)).toFixed(2);
    const tokenSymbol = item.tokenInfo.symbol.toLowerCase();
    const tokenImage = `${baseImageUrl}${tokenSymbol}.svg`;
  
    return (
      
      <tr key={index}>
        <td className="px-6 py-4 text-center whitespace-nowrap">
          <div className="text-lg text-gray-900 dark:text-white">{formatDate(item.timestamp)}</div>
        </td>
        <td className="px-6 py-4 text-center whitespace-nowrap">
          <Tooltip title={item.transactionHash} position="top" trigger="click" arrow={true}>
            <div className="text-lg text-gray-900 dark:text-white cursor-pointer">
              {item.transactionHash ? `${item.transactionHash.substring(0, 5)}...` : 'N/A'}
            </div>
          </Tooltip>
        </td>
        <td className="px-6 py-4 text-center whitespace-nowrap">
          <Tooltip title={item.from} position="top" trigger="click" arrow={true}>
            <div className="text-lg text-gray-900 dark:text-white cursor-pointer">
              {item.from ? `${item.from.substring(0, 6)}...${item.from.slice(-4)}` : 'N/A'}
            </div>
          </Tooltip>
        </td>
        <td className="px-6 py-4 text-center whitespace-nowrap">
          <Tooltip title={item.to} position="top" trigger="click" arrow={true}>
            <div className="text-lg text-gray-900 dark:text-white cursor-pointer">
              {item.to ? `${item.to.substring(0, 6)}...${item.to.slice(-4)}` : 'N/A'}
            </div>
          </Tooltip>
        </td>
        <td className="px-6 py-4 text-center whitespace-nowrap">
          <div className="text-lg text-gray-900 dark:text-white">{tokenValue}</div>
        </td>
        <td className="px-6 py-4 text-center whitespace-nowrap">
          <div className="text-lg text-gray-900 dark:text-white">{item.type}</div>
        </td>
        <td className="px-6 py-4 text-center whitespace-nowrap">
          <div className="flex items-center justify-center">
            <div className="text-lg text-gray-900 dark:text-white">{item.tokenInfo.name}</div>
          </div>
        </td>
      </tr>
    );
  };
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div id="TransactionTable" className="w-full overflow-x-auto rounded-3xl border-slate-400 dark:border-slate-700 p-4">
      <table className="min-w-full bg-gray-100 dark:bg-gray-800 rounded-lg">
        <thead>
          <tr>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date & Time</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Tx Hash</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">From</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">To</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Token</th>
          </tr>
        </thead>
        <tbody id="cryptoTableBody" className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
          {transactions && transactions.map((transaction, index) => generateTableRow(transaction, index))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
