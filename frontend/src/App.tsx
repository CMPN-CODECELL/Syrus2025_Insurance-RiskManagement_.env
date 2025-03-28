import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { MessageSquare, LayoutGrid, Calendar, BarChart2, FileText, User, Settings, Menu } from 'lucide-react';
import Home from './pages/Home';
import Chatbot from './pages/Chatbot';
import StatisticsPage from './pages/Statistics';
import DocumentsPage from './pages/Documents';
import SettingsPage from './pages/Settings';
import AffectedCustomers from './pages/AffectedCustomers';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`bg-white border-r h-screen fixed left-0 top-0 pt-16 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'}`}>
      <div className="p-4">
        <nav className="space-y-2">
          <Link to="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
            <LayoutGrid size={20} className="text-gray-500" />
            <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>Overview</span>
          </Link>
          <Link to="/chatbot" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
            <MessageSquare size={20} className="text-gray-500" />
            <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>Chatbot</span>
            <span className={`ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full ${isOpen ? '' : 'hidden'}`}>2</span>
          </Link>
          <Link to="/calendar" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
            <Calendar size={20} className="text-gray-500" />
            <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>Calendar</span>
          </Link>
          <Link to="/statistics" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
            <BarChart2 size={20} className="text-gray-500" />
            <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>Statistics</span>
          </Link>
          <Link to="/documents" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
            <FileText size={20} className="text-gray-500" />
            <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>Documents</span>
          </Link>
          <Link to="/profile" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
            <User size={20} className="text-gray-500" />
            <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>Profile</span>
          </Link>
          <Link to="/settings" className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100">
            <Settings size={20} className="text-gray-500" />
            <span className={`transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>Settings</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-[#F28D1B] p-4 fixed w-full z-10">
          <div className="container mx-auto flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="text-white hover:bg-orange-600 p-2 rounded-lg transition-colors"
            >
              <Menu size={20} />
            </button>
            <div className="text-white text-2xl font-bold">InsurAI</div>
          </div>
        </nav>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <div className={`transition-all duration-300 ${isSidebarOpen ? 'pl-64' : 'pl-16'} pt-16`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/statistics" element={<StatisticsPage />} />
            <Route path="/documents" element={<DocumentsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/affected-customers" element={<AffectedCustomers />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;