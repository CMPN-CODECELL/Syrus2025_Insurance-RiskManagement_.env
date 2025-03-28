import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
} from "recharts";
import * as XLSX from "xlsx";

const COLORS = ["#FFBB28", "#FF8042", "#0088FE", "#00C49F", "#FF0000"];

const Statistics: React.FC = () => {
  const [planData, setPlanData] = useState<any[]>([]);
  const [scatterData, setScatterData] = useState<any[]>([]);
  const [ageData, setAgeData] = useState<any[]>([]);
  const [claimsData, setClaimsData] = useState<any[]>([]);

  useEffect(() => {
    fetch("data/health_insurance_data_india.xlsx") 
      .then((res) => res.arrayBuffer())
      .then((buffer) => {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheet = workbook.Sheets["Customer Details"];
        const data = XLSX.utils.sheet_to_json(sheet);

        // Process Plan Distribution
        const planCounts: Record<string, number> = {};
        data.forEach((row: any) => {
          planCounts[row.plan_type] = (planCounts[row.plan_type] || 0) + 1;
        });
        setPlanData(
          Object.entries(planCounts).map(([name, value]) => ({ name, value }))
        );

        // Process Premium vs. Deductible Scatter Data
        setScatterData(
          data.map((row: any) => ({ x: row.deductible, y: row.premium }))
        );

        // Process Age Distribution
        const ageCounts: Record<number, number> = {};
        data.forEach((row: any) => {
          ageCounts[row.age] = (ageCounts[row.age] || 0) + 1;
        });
        setAgeData(
          Object.entries(ageCounts).map(([age, count]) => ({
            age: Number(age),
            count,
          }))
        );

        // Process Claims Status
        const claimsCounts: Record<string, number> = {};
        data.forEach((row: any) => {
          claimsCounts[row.claims_history] =
            (claimsCounts[row.claims_history] || 0) + 1;
        });
        setClaimsData(
          Object.entries(claimsCounts).map(([status, count]) => ({
            status,
            count,
          }))
        );
      });
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Plan Distribution Pie Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Plan Distribution</h2>
        <PieChart width={400} height={300}>
          <Pie
            data={planData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
          >
            {planData.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>

      {/* Premium vs. Deductible Scatter Plot */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Premium vs. Deductible</h2>
        <ScatterChart width={400} height={300}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="x" name="Deductible" />
          <YAxis type="number" dataKey="y" name="Premium" />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />
          <Scatter name="Plans" data={scatterData} fill="#8884d8" />
        </ScatterChart>
      </div>

      {/* Age Distribution Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Age Distribution</h2>
        <BarChart width={400} height={300} data={ageData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="age" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#00C49F" />
        </BarChart>
      </div>

      {/* Claims Status Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-xl font-semibold mb-4">Claims Status Overview</h2>
        <BarChart width={400} height={300} data={claimsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="status" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#FF8042" />
        </BarChart>
      </div>
    </div>
  );
};

export default Statistics;
