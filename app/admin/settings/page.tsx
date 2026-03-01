"use client";

import React, { useState } from 'react';
import { 
  Menu, 
  Bell, 
  User, 
  X, 
  LayoutDashboard, 
  ShoppingCart, 
  Settings as SettingsIcon, 
  LogOut, 
  ArrowLeft,
  Moon,
  Sun,
  Globe,
  Shield,
  CreditCard,
  Smartphone,
  Mail,
  Lock,
  User as UserIcon,
  Bell as BellIcon
} from 'lucide-react';

const AdminSettings = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('en');

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', href: '/admin' },
    { icon: ShoppingCart, label: 'Products', href: '/admin/products' },
    { icon: ShoppingCart, label: 'Orders', href: '/admin/orders' },
    { icon: SettingsIcon, label: 'Settings', href: '/admin/settings' },
    { icon: LogOut, label: 'Sign Out', href: '/signout', isSignOut: true },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-gray-800 border-b border-gray-700">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Menu size={20} className="text-gray-300" />
            </button>
            <a href="/admin" className="flex items-center space-x-2">
              <img src="/wig.png" alt="Logo" className="h-8 w-auto object-contain" />
              <span className="text-white font-semibold text-lg">Wigga</span>
            </a>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-lg hover:bg-gray-700 transition-colors relative">
              <Bell size={20} className="text-gray-300" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <User size={16} className="text-gray-300" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6 mt-16">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Settings</h1>
          <p className="text-gray-400">Manage your account settings and preferences</p>
        </div>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Settings */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-6">Profile Settings</h2>
              
              <div className="space-y-6">
                {/* Profile Picture */}
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center">
                    <UserIcon size={32} className="text-gray-300" />
                  </div>
                  <div>
                    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                      Change Photo
                    </button>
                    <p className="text-gray-400 text-sm mt-1">JPG, PNG or GIF. Max 2MB</p>
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    defaultValue="Admin User"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    defaultValue="admin@wigga.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    defaultValue="+234 800 000 0000"
                  />
                </div>
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mt-6">
              <h2 className="text-xl font-semibold text-white mb-6">Security</h2>
              
              <div className="space-y-6">
                {/* Change Password */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Current Password</label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="Enter current password"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">New Password</label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="Enter new password"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Confirm New Password</label>
                  <input 
                    type="password" 
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                    placeholder="Confirm new password"
                  />
                </div>

                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                  Update Password
                </button>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mt-6">
              <h2 className="text-xl font-semibold text-white mb-6">Notifications</h2>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Email Notifications</p>
                    <p className="text-gray-400 text-sm">Receive email updates about your account</p>
                  </div>
                  <button 
                    onClick={() => setNotifications(!notifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      notifications ? 'bg-blue-600' : 'bg-gray-600'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      notifications ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Push Notifications</p>
                    <p className="text-gray-400 text-sm">Receive push notifications in your browser</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">SMS Notifications</p>
                    <p className="text-gray-400 text-sm">Receive SMS updates about orders</p>
                  </div>
                  <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600">
                    <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Preferences */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h2 className="text-xl font-semibold text-white mb-6">Preferences</h2>
              
              <div className="space-y-6">
                {/* Language */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Language</label>
                  <select 
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="en">English</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                </div>

                {/* Timezone */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Timezone</label>
                  <select className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500">
                    <option>UTC+00:00 (GMT)</option>
                    <option>UTC+01:00 (WAT)</option>
                    <option>UTC+02:00 (CAT)</option>
                    <option>UTC+03:00 (EAT)</option>
                  </select>
                </div>

                {/* Dark Mode */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-medium">Dark Mode</p>
                    <p className="text-gray-400 text-sm">Use dark theme</p>
                  </div>
                  <button 
                    onClick={() => setDarkMode(!darkMode)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      darkMode ? 'bg-blue-600' : 'bg-gray-600'
                    }`}
                  >
                    <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      darkMode ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 mt-6">
              <h2 className="text-xl font-semibold text-white mb-6">Quick Actions</h2>
              
              <div className="space-y-3">
                <button className="w-full flex items-center p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-left">
                  <CreditCard size={20} className="text-gray-300 mr-3" />
                  <span className="text-gray-300">Payment Methods</span>
                </button>
                
                <button className="w-full flex items-center p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-left">
                  <Smartphone size={20} className="text-gray-300 mr-3" />
                  <span className="text-gray-300">Connected Devices</span>
                </button>
                
                <button className="w-full flex items-center p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-left">
                  <Shield size={20} className="text-gray-300 mr-3" />
                  <span className="text-gray-300">Privacy Settings</span>
                </button>
                
                <button className="w-full flex items-center p-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors text-left">
                  <Mail size={20} className="text-gray-300 mr-3" />
                  <span className="text-gray-300">Email Preferences</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
            Save All Changes
          </button>
        </div>
      </main>

      {/* Left Side Menu */}
      <div className={`fixed inset-0 z-50 transition-all duration-300 delay-300 ${
        menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/10 bg-opacity-50 backdrop-blur-lg"
          onClick={() => setMenuOpen(false)}
        ></div>
        
        {/* Menu Panel */}
        <div className={`absolute top-0 left-0 h-full w-64 bg-gray-800 shadow-xl transform transition-transform duration-700 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <a href="/admin" className="flex items-center space-x-2">
                <img src="/wig.png" alt="Logo" className="h-6 w-auto object-contain" />
                <span className="text-white font-semibold">Wigga</span>
              </a>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <X size={20} className="text-gray-300" />
              </button>
            </div>
          </div>
          
          <nav className="p-4">
            {/* Back to Store Button */}
            <a
              href="/"
              className="flex items-center p-3 mb-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors group"
              onClick={() => setMenuOpen(false)}
            >
              <ArrowLeft size={20} className="min-w-[20px]" />
              <span className="ml-3 font-medium">Back to Store</span>
            </a>
            
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`flex items-center p-3 mb-2 rounded-lg transition-colors group ${
                  item.isSignOut 
                    ? 'mt-20 text-red-500 hover:bg-red-900/20 hover:text-red-400' 
                    : item.label === 'Settings' 
                      ? 'bg-gray-700 text-white' 
                      : 'hover:bg-gray-700 text-gray-300 hover:text-white'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <item.icon size={20} className={`min-w-[20px] ${item.isSignOut ? 'text-red-500' : ''}`} />
                <span className="ml-3 font-medium">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
