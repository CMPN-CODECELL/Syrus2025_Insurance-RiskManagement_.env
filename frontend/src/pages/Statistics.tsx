import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

function StatisticsPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Statistics</h1>
      
      {/* Insurance Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-600 mb-2">Total Policies</h3>
          <div className="text-3xl font-bold">7,069</div>
          <div className="flex items-center text-green-500 mt-2">
            <TrendingUp size={16} />
            <span className="ml-1">12.5%</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-600 mb-2">Active Claims</h3>
          <div className="text-3xl font-bold">245</div>
          <div className="flex items-center text-red-500 mt-2">
            <TrendingDown size={16} />
            <span className="ml-1">3.2%</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-600 mb-2">Monthly Revenue</h3>
          <div className="text-3xl font-bold">$191,578</div>
          <div className="flex items-center text-green-500 mt-2">
            <TrendingUp size={16} />
            <span className="ml-1">8.7%</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-gray-600 mb-2">Customer Satisfaction</h3>
          <div className="text-3xl font-bold">94.8%</div>
          <div className="flex items-center text-green-500 mt-2">
            <TrendingUp size={16} />
            <span className="ml-1">2.1%</span>
          </div>
        </div>
      </div>

      {/* Main Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Insurance Trends</h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#F28D1B]"></div>
              <span className="text-sm text-gray-600">Auto Insurance</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-blue-400"></div>
              <span className="text-sm text-gray-600">Health Insurance</span>
            </div>
            <select className="bg-black text-white px-4 py-1 rounded-full text-sm">
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>Last Year</option>
            </select>
          </div>
        </div>
        <div className="h-80 w-full bg-gradient-to-b from-orange-50 to-transparent"></div>
      </div>
    </div>
  );
}

export default StatisticsPage;