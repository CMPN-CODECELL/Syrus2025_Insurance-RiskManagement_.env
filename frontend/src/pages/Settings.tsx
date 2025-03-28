import React from 'react';
import { Bell, Lock, User, Globe, Palette, HelpCircle } from 'lucide-react';

function SettingSection({ icon: Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-orange-100 rounded-lg">
          <Icon size={24} className="text-[#F28D1B]" />
        </div>
        <div>
          <h3 className="font-medium text-lg mb-1">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

function SettingsPage() {
  const settings = [
    {
      icon: Bell,
      title: 'Notifications',
      description: 'Configure how you receive alerts and notifications',
    },
    {
      icon: Lock,
      title: 'Security',
      description: 'Manage your password and security preferences',
    },
    {
      icon: User,
      title: 'Account',
      description: 'Update your personal information and preferences',
    },
    {
      icon: Globe,
      title: 'Language',
      description: 'Choose your preferred language and region',
    },
    {
      icon: Palette,
      title: 'Appearance',
      description: 'Customize the look and feel of your dashboard',
    },
    {
      icon: HelpCircle,
      title: 'Help & Support',
      description: 'Get help and find answers to common questions',
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {settings.map((setting, index) => (
          <SettingSection key={index} {...setting} />
        ))}
      </div>
    </div>
  );
}

export default SettingsPage;