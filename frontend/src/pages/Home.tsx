import React, { useState, useEffect } from "react";
import { TrendingUp, TrendingDown, AlertCircle, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function InsuranceCard({ type, count, amount, trend, trendAmount, isDark = false }) {
  return (
    <div className={`p-6 rounded-xl ${isDark ? 'bg-black text-white' : 'bg-white'}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className={`text-lg ${isDark ? 'text-white' : 'text-gray-600'}`}>{type}</h3>
          <p className="text-sm text-gray-400">{count}</p>
        </div>
      </div>
      <div className="flex items-end gap-4">
        <div className="text-3xl font-bold">${amount.toLocaleString()}</div>
        <div className={`flex items-center ${trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
          {trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
          <span className="ml-1">{trendAmount} USD</span>
        </div>
      </div>
    </div>
  );
}

function LiveRiskMonitoring({ alerts }) {
  return (
    <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-6">
      <h2 className="text-lg font-bold mb-2 flex items-center">
        <AlertCircle className="mr-2" /> Live Risk Monitoring
      </h2>
      <ul>
        {alerts.length > 0 ? (
          alerts.map((alert, index) => (
            <li key={index}>⚠️ {alert.event} – Risk adjustments applied!</li>
          ))
        ) : (
          <li>No active alerts</li>
        )}
      </ul>
    </div>
  );
}

// function PricingAdjustmentsTable({ alerts }) {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
//       <h2 className="text-xl font-semibold mb-4">Parametric Pricing Adjustments</h2>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">Policy Type</th>
//             <th className="border p-2">Affected Customers</th>
//             <th className="border p-2">Trigger Event</th>
//             <th className="border p-2">Previous Premium</th>
//             <th className="border p-2">New Premium</th>
//             <th className="border p-2">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {alerts.length > 0 ? (
//             alerts.map((alert, index) => (
//               <tr key={index} className="border">
//                 <td className="border p-2">{alert.policyType}</td>
//                 <td className="border p-2">
//                   <a
//                     href={`/policyholders/${alert.policyType.toLowerCase()}`}
//                     className="text-blue-500 underline"
//                   >
//                     {alert.affectedCustomers}
//                   </a>
//                 </td>
//                 <td className="border p-2">{alert.event}</td>
//                 <td className="border p-2">{alert.previousPremium}</td>
//                 <td className="border p-2 font-bold">{alert.newPremium}</td>
//                 <td>
//                   <button className="bg-blue-500 text-white px-4 py-1 rounded">Adjust</button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="6" className="text-center p-4">No pricing adjustments required</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }
function PricingAdjustmentsTable({ alerts }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold mb-4">Parametric Pricing Adjustments</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Policy Type</th>
            <th className="border p-2">Affected Customers</th>
            <th className="border p-2">Trigger Event</th>
            <th className="border p-2">Previous Premium</th>
            <th className="border p-2">New Premium</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert, index) => (
            <tr key={index} className="border">
              <td className="border p-2">{alert.policyType}</td>
              <td className="border p-2">
                <Link to={`/affected-customers?event=${encodeURIComponent(alert.event)}`} className="text-blue-500 underline">
                  {alert.affectedCustomers}
                </Link>
              </td>
              <td className="border p-2">{alert.event}</td>
              <td className="border p-2">{alert.previousPremium}</td>
              <td className="border p-2 font-bold">{alert.newPremium}</td>
              <td><button className="bg-blue-500 text-white px-4 py-1 rounded">Adjust</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CoverageInsights() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-xl font-semibold mb-4">Dynamic Coverage Insights</h2>
      <div className="flex gap-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <p className="text-gray-600">Jan</p>
          <p className="text-lg font-bold">$100,000</p>
        </div>
      </div>
    </div>
  );
}

function StatisticsChart() {
  return (
    <div className="bg-white p-6 rounded-xl">
      <h2 className="text-xl font-semibold">Statistics</h2>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <span className="text-sm text-gray-600">Expenses</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
            <span className="text-sm text-gray-600">Payments</span>
          </div>
          <select className="bg-black text-white px-4 py-1 rounded-full text-sm">
            <option>Weekly</option>
            <option>Monthly</option>
            <option>Yearly</option>
          </select>
        </div>
      </div>
      <div className="h-64 flex items-end justify-between">
        <div className="w-full h-full bg-gradient-to-t from-gray-50 to-transparent relative">
          <div className="absolute bottom-0 left-0 w-full h-1/2 border-t border-l border-gray-200"></div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [alerts, setAlerts] = useState([
    { event: "Hurricane approaching Pune", policyType: "Auto", affectedCustomers: 2500, previousPremium: "$500", newPremium: "$550" },
    { event: "Health activity increase detected", policyType: "Health", affectedCustomers: 4689, previousPremium: "$400", newPremium: "$380" }
  ]);
  return (
    <div>
      <div className="bg-gradient-to-r from-[#F28D1B] to-orange-500 py-20 px-8 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">AI-Powered Insurance Assistant</h1>
              <p className="text-lg mb-8">Experience the future of insurance management with our advanced AI system.</p>
              <Link to="/chatbot" className="bg-white text-[#F28D1B] px-8 py-3 rounded-full font-semibold hover:bg-orange-50 flex items-center gap-2 w-fit">
                Try Now
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Available Insurances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InsuranceCard type="Auto Insurances" count="7 Properties" amount={45789} trend="down" trendAmount="45,789" isDark={true} />
            <InsuranceCard type="Health Insurances" count="46 People" amount={145789} trend="up" trendAmount="39,789" />
          </div>
        </div>
        <LiveRiskMonitoring alerts={alerts} />
        <PricingAdjustmentsTable alerts={alerts} />
        <CoverageInsights />
        <StatisticsChart />
      </div>
    </div>
  );
}

export default Home;
