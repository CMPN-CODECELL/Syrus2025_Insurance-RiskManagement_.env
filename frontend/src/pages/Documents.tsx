import React from "react";
import { Download, Share2 } from "lucide-react";

function DocumentsPage() {
  const documents = [
    {
      title: "Auto Insurance Policy",
      date: "Mar 28, 2025",
      type: "PDF",
      size: "2.4 MB",
      status: "Approved",
    },
    {
      title: "Health Insurance Claims",
      date: "Mar 27, 2025",
      type: "PDF",
      size: "1.8 MB",
      status: "Pending",
    },
    {
      title: "Property Insurance Terms",
      date: "Mar 26, 2025",
      type: "DOC",
      size: "956 KB",
      status: "Approved",
    },
    {
      title: "Insurance Certificate",
      date: "Mar 25, 2025",
      type: "PDF",
      size: "1.2 MB",
      status: "Pending",
    },
    {
      title: "Policy Renewal Notice",
      date: "Mar 24, 2025",
      type: "PDF",
      size: "845 KB",
      status: "Approved",
    },
    {
      title: "Claims Documentation",
      date: "Mar 23, 2025",
      type: "ZIP",
      size: "4.7 MB",
      status: "Pending",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Documents</h1>
        <button className="bg-[#F28D1B] text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors shadow-md">
          Upload New
        </button>
      </div>

      <table className="w-full border-collapse shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#F28D1B] text-white text-left">
            <th className="px-6 py-3">File Name</th>
            <th className="px-6 py-3">Document Type</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Size</th>
            <th className="px-6 py-3">Status</th>
            <th className="px-6 py-3 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {documents.map((doc, index) => (
            <tr key={index} className="hover:bg-gray-100 transition-colors">
              <td className="px-6 py-4 font-medium text-gray-700">
                {doc.title}
              </td>
              <td className="px-6 py-4 text-gray-600">{doc.type}</td>
              <td className="px-6 py-4 text-gray-600">{doc.date}</td>
              <td className="px-6 py-4 text-gray-600">{doc.size}</td>
              <td
                className={`px-6 py-4 font-medium ${
                  doc.status === "Approved" ? "text-green-600" : "text-red-600"
                }`}
              >
                {doc.status}
              </td>
              <td className="px-6 py-4 flex justify-center gap-4">
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                  <Download size={18} className="text-gray-600" />
                </button>
                <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition">
                  <Share2 size={18} className="text-gray-600" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DocumentsPage;
