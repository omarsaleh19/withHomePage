import React, { useState } from 'react';

const BestPerformingTable = ({ tokens }) => {
    const [selectedFilter, setSelectedFilter] = useState('PNL_24h');

    const handleFilterChange = (event) => {
        setSelectedFilter(event.target.value);
    };

    const getValue = (item, filter) => {
        switch (filter) {
            case 'PNL_24h':
                return item.tokenInfo.price.diff || 0;
            case 'PNL_week':
                return item.tokenInfo.price.diff7d || 0;
            case 'PNL_month':
                return item.tokenInfo.price.diff30d || 0;
            default:
                return 0;
        }
    };

    // Sort the data based on the selected PNL filter
    const sortedData = [...tokens].sort((a, b) => {
        const aValue = getValue(a, selectedFilter);
        const bValue = getValue(b, selectedFilter);
        return bValue - aValue;
    });

    // Display only the top 10 items
    const topData = sortedData.slice(0, 10);

    return (
        <>
        <div className="flex items-center justify-center gap-4 max-w-lg mx-auto rounded-3xl bg-slate-600 border-slate-900 p-1">
            <div className="text-lg font-medium text-gray-900 dark:text-gray-100">Choose Criteria</div>
            <select
                value={selectedFilter}
                onChange={handleFilterChange}
                className="w-28 border rounded-full bg-gray-800 text-white dark:bg-gray-700 dark:text-white py-2 px-4">
                <option value="PNL_24h">24h PNL</option>
                <option value="PNL_week">7d PNL</option>
                <option value="PNL_month">30d PNL</option>
            </select>
        </div>


        <div className="w-full overflow-x-auto border rounded-3xl border-slate-400">
            <table className="min-w-full divide-gray-200">
                <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                        <th className="px-6 py-3 text-center text-2xl font-medium text-gray-500 dark:text-gray-400"></th>
                        <th className="px-6 py-3 text-left text-2xl font-medium text-gray-500 dark:text-gray-400">Name</th>
                        <th className="px-6 py-3 text-left text-2xl font-medium text-gray-500 dark:text-gray-400">Price</th>
                        <th className="flex gap-4 px-6 py-3 text-left text-2xl font-medium text-gray-500 dark:text-gray-400">PNL</th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-700 divide-y divide-gray-200 dark:divide-gray-600">
                    {topData.map((item, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap text-center dark:border-slate-700 p-4">
                                <div className="text-lg font-medium text-gray-900 dark:text-white">{index + 1}</div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap flex items-center">
                                <div>
                                    <div className="text-lg font-medium text-gray-900 dark:text-white">
                                        {item.tokenInfo.name}
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div className="text-lg text-gray-900 dark:text-white">
                                    {item.tokenInfo.price && item.tokenInfo.price.rate !== undefined
                                        ? `$${item.tokenInfo.price.rate.toFixed(2)}`
                                        : 'N/A'}
                                </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <div
                                    className={`text-lg ${
                                        getValue(item, selectedFilter) >= 0
                                            ? 'text-green-500 dark:text-green-400'
                                            : 'text-red-500 dark:text-red-400'
                                    }`}>
                                    {getValue(item, selectedFilter) !== undefined
                                        ? `${getValue(item, selectedFilter).toFixed(2)}%`
                                        : 'N/A'}
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    );
};

export default BestPerformingTable;
