import React from 'react';
import { FileText, Download, Share2 } from 'lucide-react';

function DocumentCard({ title, date, type, size }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-orange-100 rounded-lg">
            <FileText size={24} className="text-[#F28D1B]" />
          </div>
          <div>
            <h3 className="font-medium">{title}</h3>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <Download size={18} className="text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Share2 size={18} className="text-gray-600" />
          </button>
        </div>
      </div>
      <div className="flex justify-between text-sm text-gray-500">
        <span>{type}</span>
        <span>{size}</span>
      </div>
    </div>
  );
}

function DocumentsPage() {
  const documents = [
    { title: 'Auto Insurance Policy', date: 'Mar 15, 2024', type: 'PDF', size: '2.4 MB' },
    { title: 'Health Insurance Claims', date: 'Mar 12, 2024', type: 'PDF', size: '1.8 MB' },
    { title: 'Property Insurance Terms', date: 'Mar 10, 2024', type: 'DOC', size: '956 KB' },
    { title: 'Insurance Certificate', date: 'Mar 08, 2024', type: 'PDF', size: '1.2 MB' },
    { title: 'Policy Renewal Notice', date: 'Mar 05, 2024', type: 'PDF', size: '845 KB' },
    { title: 'Claims Documentation', date: 'Mar 03, 2024', type: 'ZIP', size: '4.7 MB' },
  ];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Documents</h1>
        <button className="bg-[#F28D1B] text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
          Upload New
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc, index) => (
          <DocumentCard key={index} {...doc} />
        ))}
      </div>
    </div>
  );
}

export default DocumentsPage;