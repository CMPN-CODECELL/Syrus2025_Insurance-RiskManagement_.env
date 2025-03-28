import React, { useEffect, useState } from "react";
import { ArrowRight, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#FF5733", "#33FF57", "#3357FF", "#F28D1B"];

function InsuranceCard({
  type,
  count,
  amount,
  trend,
  trendAmount,
  isDark = false,
}) {
  return (
    <div
      className={`p-6 rounded-xl ${
        isDark ? "bg-black text-white" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className={`text-lg ${isDark ? "text-white" : "text-gray-600"}`}>
            {type}
          </h3>
          <p className="text-sm text-gray-400">{count}</p>
        </div>
      </div>
      <div className="flex items-end gap-4">
        <div className="text-3xl font-bold">${amount.toLocaleString()}</div>
        <div
          className={`flex items-center ${
            trend === "up" ? "text-green-500" : "text-red-500"
          }`}
        >
          {trend === "up" ? (
            <TrendingUp size={16} />
          ) : (
            <TrendingDown size={16} />
          )}
          <span className="ml-1">{trendAmount} USD</span>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [insuranceData, setInsuranceData] = useState([]);

  useEffect(() => {
    fetch("/data/insurance-data.json") // Replace with actual data source
      .then((res) => res.json())
      .then((data) => setInsuranceData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const pieData = [
    { name: "18-25", value: 1200 },
    { name: "26-40", value: 3400 },
    { name: "41-60", value: 2800 },
    { name: "60+", value: 1600 },
  ];

  const barData = [
    { month: "Jan", claims: 50 },
    { month: "Feb", claims: 80 },
    { month: "Mar", claims: 60 },
    { month: "Apr", claims: 120 },
    { month: "May", claims: 90 },
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#F28D1B] to-orange-500 py-20 px-8 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI-Powered Insurance Assistant
              </h1>
              <p className="text-lg mb-8">
                Experience the future of insurance management with our advanced
                AI system. Get instant responses and intelligent solutions.
              </p>
              <Link
                to="/chatbot"
                className="bg-white text-[#F28D1B] px-8 py-3 rounded-full font-semibold hover:bg-orange-50 flex items-center gap-2 w-fit"
              >
                Try Now <ArrowRight size={20} />
              </Link>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="AI Insurance"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Section */}
      <div className="px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Available Insurances</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InsuranceCard
              type="Auto Insurances"
              count="2380 Cars"
              amount={45789}
              trend="down"
              trendAmount="45,789"
              isDark={true}
            />
            <InsuranceCard
              type="Health Insurances"
              count="4689 People"
              amount={145789}
              trend="up"
              trendAmount="39,789"
            />
          </div>
        </div>

        {/* Charts Section */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Pie Chart */}
          <div className="bg-white p-6 rounded-xl w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">
              Claims Distribution by Age Group
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Bar Chart */}
          <div className="bg-white p-6 rounded-xl w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">
              Claim Approvals Per Month
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="claims" fill="#F28D1B" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
