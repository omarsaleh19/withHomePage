import React from 'react';

function PortfolioDistribution() {
    return (
        <div className="glassmorphism p-6 border rounded-3xl border-slate-400 dark:border-slate-700">
                <h2 className="text-xl font-semibold mb-4">Portfolio Distribution</h2>
                <div className="w-full h-64">
                  <canvas id="distributionChart"></canvas>
                </div>
        </div>
    )
}

export default PortfolioDistribution;