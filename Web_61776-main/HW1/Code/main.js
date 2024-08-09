document.addEventListener('DOMContentLoaded', function () {
  // Event listener for theme button
    document.getElementById("btnTheme").addEventListener("click",function (){
        document.documentElement.classList.toggle("dark")
    });
    // Distribution Chart
    const distributionCtx = document.getElementById('distributionChart').getContext('2d');
    new Chart(distributionCtx, {
      type: 'doughnut',
      data: {
        labels: ['Ethereum', 'Bitcoin', 'XRP', 'Other'],
        datasets: [{
          data: [10, 15, 20, 55],
          backgroundColor: ['#627eea', '#f2931a', '#345d9d', '#2775fa'],
          borderWidth: 0,
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          }
        }
      }
    });
  

  
    // Top Assets
    const assets = [
      { name: 'Ethereum', symbol: 'ETH', amount: '10', value: '$2,000', change: '+50.5%' },
      { name: 'Bitcoin', symbol: 'BTC', amount: '2', value: '$58,000', change: '-1.2%' },
      { name: 'XRP', symbol: 'XRP', amount: '5OOO', value: '$0.50', change: '+0.1%' }
    ];
    const topAssetsContainer = document.getElementById('topAssets');
    assets.forEach(asset => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="flex items-center justify-between">
          <div class="text-lg font-semibold">${asset.name} (${asset.symbol})</div>
          <div class="text-right">
            <div class="text-xl font-bold">${asset.amount}</div>
            <div class="text-sm text-gray-400">${asset.value}</div>
            <div class="${asset.change.includes('-') ? 'text-red-400' : 'text-green-400'}">${asset.change}</div>
          </div>
        </div>
      `;
      topAssetsContainer.appendChild(li);
    });
  
    // Price Updates
    const priceUpdates = [
      { name: 'Ethereum', symbol: 'ETH', price: 2000, change: 1.5 },
      { name: 'Bitcoin', symbol: 'BTC', price: 30000, change: -0.8 },
      { name: 'Litecoin', symbol: 'LTC', price: 150, change: 2.3 },
      { name: 'Cardano', symbol: 'ADA', price: 1.2, change: 5.0 },
    ];
    const priceUpdatesContainer = document.getElementById('priceUpdates');
    priceUpdates.forEach(update => {
      const div = document.createElement('div');
      div.className = 'glassmorphism p-4';
      div.innerHTML = `
        <div class="flex items-center justify-between">
          <span class="font-semibold">${update.name}</span>
          <span class="text-gray-400">${update.symbol}</span>
        </div>
        <div class="mt-2">
          <div class="text-xl font-bold">$${update.price.toFixed(2)}</div>
          <div class="${update.change < 0 ? 'text-red-400' : 'text-green-400'}">${update.change}%</div>
        </div>
      `;
      priceUpdatesContainer.appendChild(div);
    });
  
    // Performance Chart
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');
    new Chart(performanceCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: 'Portfolio Value',
          data: [60000, 62000, 58000, 61000, 64000, 66000, 70000],
          borderColor: '#FFA500',
          backgroundColor: 'rgba(255, 165, 0, 0.1)',
          borderWidth: 2,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          }
        },
        scales: {
          x: {
            grid: {
              display: false,
            }
          },
          y: {
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            }
          }
        }
      }
    });

    //Assets Table
    const cryptoData = [
        {
            name: 'USDT',
            fullName: 'TetherUS',
            balance: '897.5',
            holdingNetwork: 'Ethereum',
            averageCost: '$1',
            todaysPnl: '0%',
            coinPrice: '$1',
            logo: 'https://cryptologos.cc/logos/tether-usdt-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/825.svg'
        },
        {
            name: 'BTC',
            fullName: 'Bitcoin',
            balance: '2',
            holdingNetwork: 'Bitcoin',
            averageCost: '$30,000',
            todaysPnl: '5%',
            coinPrice: '$35,000',
            logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1.svg'
        },
        {
            name: 'ETH',
            fullName: 'Ethereum',
            balance: '10',
            holdingNetwork: 'Ethereum',
            averageCost: '$2,000',
            todaysPnl: '3%',
            coinPrice: '$2,200',
            logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1027.svg'
        },
        {
            name: 'BNB',
            fullName: 'Binance Coin',
            balance: '20',
            holdingNetwork: 'BEP20',
            averageCost: '$300',
            todaysPnl: '2%',
            coinPrice: '$320',
            logo: 'https://cryptologos.cc/logos/binance-coin-bnb-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/1839.svg'
        },
        {
            name: 'USDC',
            fullName: 'USD Coin',
            balance: '1500',
            holdingNetwork: 'Ethereum',
            averageCost: '$1',
            todaysPnl: '0%',
            coinPrice: '$1',
            logo: 'https://cryptologos.cc/logos/usd-coin-usdc-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/3408.svg'
        },
        {
            name: 'XRP',
            fullName: 'XRP',
            balance: '5000',
            holdingNetwork: 'Ripple',
            averageCost: '$0.5',
            todaysPnl: '1%',
            coinPrice: '$0.52',
            logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/52.svg'
        },
        {
            name: 'ADA',
            fullName: 'Cardano',
            balance: '8000',
            holdingNetwork: 'Cardano',
            averageCost: '$0.4',
            todaysPnl: '4%',
            coinPrice: '$0.42',
            logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/2010.svg'
        },
        {
            name: 'SOL',
            fullName: 'Solana',
            balance: '300',
            holdingNetwork: 'Solana',
            averageCost: '$40',
            todaysPnl: '6%',
            coinPrice: '$45',
            logo: 'https://cryptologos.cc/logos/solana-sol-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/5426.svg'
        },
        {
            name: 'DOGE',
            fullName: 'Dogecoin',
            balance: '10000',
            holdingNetwork: 'Ethereum',
            averageCost: '$0.1',
            todaysPnl: '5%',
            coinPrice: '$0.11',
            logo: 'https://cryptologos.cc/logos/dogecoin-doge-logo.png?v=022',
            sparkline: 'https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/74.svg'
        },
    ];
    

    function generateTableRow(data) {
        return `
            <tr>
                <td class="px-6 py-4 whitespace-nowrap flex items-center">
                    <img src="${data.logo}" alt="${data.name}" class="h-8 w-8 rounded-full mr-2">
                    <div>
                        <div class="text-lg font-medium text-gray-900 dark:text-white">${data.name}</div>
                        <div class="text-sm text-gray-500 dark:text-gray-400">${data.fullName}</div>
                    </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-lg text-gray-900 dark:text-white">${data.balance}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-lg text-gray-900 dark:text-white">${data.holdingNetwork}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-lg text-gray-900 dark:text-white">${data.averageCost}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-lg text-gray-500 dark:text-white">${data.todaysPnl}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-lg text-gray-500 dark:text-white">${data.coinPrice}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-lg text-gray-500 dark:text-white">
                     <img src="${data.sparkline}" alt="${data.name}-7d-price-graph" class="h-auto w-auto mr-auto">
                    </div>
                </td>
            </tr>
        `;
    }

    function populateTable() {
        document.getElementById('BestPerformingTable').classList.add('hidden');
        document.getElementById('TransactionsBody').classList.add('hidden');

        const tableBody = document.getElementById('cryptoTableBody');
        const assetTable = document.getElementById('AssetsTable');
        assetTable.classList.remove('hidden');
        tableBody.innerHTML = ''; 
        cryptoData.forEach(data => {
            tableBody.innerHTML += generateTableRow(data);
        });
    }
    // Fake data for best performing gainers
    function generateBestPerformingRow(data, index) {
      return `
          <tr>
              <td class="px-6 py-4 whitespace-nowrap text-center">
                  <div class="text-lg font-medium text-gray-900 dark:text-white">${index + 1}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap flex items-center">
                  <img src="${data.logo}" alt="${data.name}" class="h-8 w-8 rounded-full mr-2">
                  <div>
                      <div class="text-lg font-medium text-gray-900 dark:text-white">${data.name}</div>
                  </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-lg text-gray-900 dark:text-white">${data.price}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-lg text-gray-900 dark:text-white">${data.marketCap}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-lg text-green-500 dark:text-green-400">${data.PNL}</div>
              </td>
          </tr>
      `;
  }
  
  // Sample data
  const bestPerformingData = [
      {
          name: 'Dock',
          price: '$0.00910',
          marketCap: '$30.97M',
          logo: 'https://cdn.coinranking.com/8ofbvvVzu/dock.svg?size=30x30',
          PNL: '+80.12%'  
      },
      {
          name: 'jeo boden',
          price: '$1.20',
          marketCap: '$1.2B',
          logo:'https://cdn.coinranking.com/i1XDesZZs/29687.png?size=60x60' ,
          PNL:'+48.74%'
      },
      {
          name: 'VisionGame',
          price: '$2.00',
          marketCap: '$2B',
          logo: 'https://cdn.coinranking.com/fe_fASSvQ/OyT2pbVp_400x400.png?size=60x60',
          PNL:'+46.78%'
      },
      {
          name: 'MDX',
          price: '$0.80',
          marketCap: '$800M',
          logo: 'https://cdn.coinranking.com/UNw-hMsBS/mdc.png?size=30x30',
          PNL:'+33.60%'
      },
      {
          name: 'Beer',
          price: '$3.00',
          marketCap: '$3B',
          logo: 'https://cdn.coinranking.com/WnIQ8r11S/beer.png?size=30x30',
          PNL:'+30.58%'
      },
      {
          name: 'GHX',
          price: '$0.70',
          marketCap: '$700M',
          logo: 'https://cdn.coinranking.com/O0uOnSKN0/6554.png?size=30x30',
          PNL:'+22.09%'
      },
      {
          name: 'Horizon',
          price: '$1.50',
          marketCap: '$1.5B',
          logo: 'https://cdn.coinranking.com/r1dc3pGvX/zen.svg?size=30x30',
          PNL:'+21.25%'
      }
  ];
  

    function populateTable2() {
      document.getElementById('AssetsTable').classList.add('hidden');
      document.getElementById('TransactionsBody').classList.add('hidden');

      const tableBody = document.getElementById('bestPerformingBody');
      const bestPerformingTable = document.getElementById('BestPerformingTable');
      bestPerformingTable.classList.remove('hidden');
      tableBody.innerHTML = ''; // Clear the table body before populating
      let index=0;
      bestPerformingData.forEach(data => {
          tableBody.innerHTML += generateBestPerformingRow(data,index);
          index++;
      });
  }
  const tabButtons = document.querySelectorAll('.tab-btn');
      
  tabButtons.forEach(button => {
    button.addEventListener('click', function () {
      tabButtons.forEach(btn => {
        btn.classList.remove('text-yellow-400', 'border-yellow-400');
        btn.classList.add('border-transparent');
      });
      this.classList.add('text-yellow-400', 'border-yellow-400');
    });
  });

  
  function generateTableRowTransactions(data) {
    return `
      <tr>
        <td class="px-6 py-4 whitespace-nowrap text-left text-gray-900 dark:text-white">
          <div>${data.Type}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400">${data.Date}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-left text-gray-900 dark:text-white">
          <div>${data.Amount}</div>
          <div class="text-sm text-gray-500 dark:text-gray-400" >${data.Token}</div>
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-left text-gray-900 dark:text-white">
          ${data.Source}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-left text-gray-900 dark:text-white">
          ${data.Destination}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-left text-gray-900 dark:text-white">
          ${data.Fees}
        </td>
      </tr>
    `;
  }
// Sample output format:
const transactionsTableData = [
  {
    Type: 'Buy',
    Amount: '1000.00',
    Token: 'USDT',
    Source: '1A2b3__8r9S',
    Destination: '1B2__8s9T',
    Fees: '$2.00',
    Date: '2024-07-10 14:23'
  },
  {
    Type: 'Sell',
    Amount: '0.3',
    Token: 'ETH',
    Source: '1C2d3E4__S8t9U',
    Destination: '1D2e3__T8u9V',
    Fees: '$12.50',
    Date: '2024-07-10 14:25'
  },
  {
    Type: 'Transfer',
    Amount: '538.12',
    Token: 'XRP',
    Source: '1E2f3G__U8v9W',
    Destination: '1F2g3H4i5__V8w9X',
    Fees: '$0.02',
    Date: '2024-07-10 14:27'
  },
  {
    Type: 'Buy',
    Amount: '55.00',
    Token: 'SOL',
    Source: '1G2h3I4j__7W8x9Y',
    Destination: '1H2i3J4__X8y9Z',
    Fees: '$0.2',
    Date: '2024-07-10 14:29'
  },
  {
    Type: 'Sell',
    Amount: '1.00',
    Token: 'BNB',
    Source: '1I2j3K4__x7Y8z9A',
    Destination: '1J2k3__7Z8a9B',
    Fees: '$3.00',
    Date: '2024-07-10 14:31'
  }
];
function populateTable3() {
  document.getElementById('BestPerformingTable').classList.add('hidden');
  document.getElementById('AssetsTable').classList.add('hidden');
  const TransactionsBody = document.getElementById('TransactionsBody');
  const TransactionsTable = document.getElementById('TransactionsTable');

  TransactionsBody.classList.remove('hidden');
  TransactionsTable.innerHTML = ''; 
  transactionsTableData.forEach(data => {
    TransactionsTable.innerHTML += generateTableRowTransactions(data);
  }); 
}


    document.getElementById('assetsBtnTable').addEventListener('click', populateTable);
    document.getElementById('BestPerformingBtnTable').addEventListener('click', populateTable2);
    document.getElementById('TransactionsBtn').addEventListener('click', populateTable3);

  });
  



