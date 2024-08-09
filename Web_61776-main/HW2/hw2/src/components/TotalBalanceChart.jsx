import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Register the required components and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function TotalBalanceChart({ tokens }) {
  // Process and filter token data
  // Filter out fake tokens (where tokenInfo.price is false)
  const validTokens = tokens.filter(token => token.tokenInfo.price);

  // Process the filtered tokens
  const processedTokens = validTokens.map(token => {
    const decimals = parseInt(token.tokenInfo.decimals, 10);
    const balance = parseFloat(token.balance) / Math.pow(10, decimals);
    return {
      label: token.tokenInfo.symbol || 'Unknown',
      balance: balance,
      price: token.tokenInfo.price.rate, // Assuming price is in USD
    };
  });

  // Sort tokens by balance in descending order
  const sortedTokens = processedTokens.sort((a, b) => b.balance - a.balance);

  // Select the top 4 tokens
  const topTokens = sortedTokens.slice(0, 4);

  // Calculate the sum of remaining tokens
  const othersBalance = sortedTokens.slice(4).reduce((sum, token) => sum + token.balance, 0);

  // Combine top tokens and "Others" data
  const chartData = {
    labels: [
      ...topTokens.map(token => token.label),
      'Others'
    ],
    datasets: [
      {
        label: 'Balance',
        data: [
          ...topTokens.map(token => token.balance),
          othersBalance
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Calculate total balance in dollars
  const totalBalance = processedTokens.reduce((sum, token) => sum + (token.balance * token.price), 0);
  const othersBalanceInDollars = othersBalance * (sortedTokens[0]?.price || 0);
  const totalBalanceInDollars = totalBalance + othersBalanceInDollars;

  const options = {
    cutout: '60%', // Adjust the size of the empty circle
    plugins: {
      datalabels: {
        color: '#0000FF',
        formatter: (value, context) => {
          const total = context.chart.data.datasets[0].data.reduce((sum, value) => sum + value, 0);
          const percentage = ((value / total) * 100).toFixed(2);
          return `${percentage}%`;
        },
        font: {
          weight: 'bold',
        },
        anchor: 'center',
        align: 'center',
      },
    },
  };

  return (
    <div className="glassmorphism p-6 rounded-3xl border-slate-400 dark:border-slate-700 flex bg-slate-400">
      <div className="w-full">
        <h2 className="text-xl font-semibold mb-4 text-center">Portfolio Distribution</h2>
        <div className="w-full h-64">
          <div className="h-64">
            <Doughnut data={chartData} options={options} />
          </div>
        </div>
      </div>
      <div className="ml-6 flex flex-col justify-center">
        <h3 className="text-lg font-semibold">Total Balance:</h3>
        <p className="text-xl font-bold">${totalBalanceInDollars.toFixed(2)}</p>
      </div>
    </div>
  );
}

export default TotalBalanceChart;
