'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ThemeToggle from '@/components/ThemeTegle';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'academic' | 'security' | 'notifications'>('profile');

  // Dummy role checking - replace with your actual session / server role values
  const userRole = 'admin'; 

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 min-h-screen bg-gray-50">
      
      {/* Sidebar Navigation Links */}
      <div className="w-full md:w-64 bg-white p-4 rounded-lg shadow-sm h-fit space-y-1">
        <h2 className="text-xl font-bold p-2 text-gray-800 mb-4 border-b">Settings</h2>
        
        <button
          onClick={() => setActiveTab('profile')}
          className={`w-full text-left p-3 rounded-md text-sm font-medium transition-colors ${activeTab === 'profile' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          👤 Profile Settings
        </button>

        <button
          onClick={() => setActiveTab('security')}
          className={`w-full text-left p-3 rounded-md text-sm font-medium transition-colors ${activeTab === 'security' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          🔒 Security & Password
        </button>

        {/* Admin and Teacher Restricted Tabs */}
        {userRole === 'admin' && (
          <button
            onClick={() => setActiveTab('academic')}
            className={`w-full text-left p-3 rounded-md text-sm font-medium transition-colors ${activeTab === 'academic' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}`}
          >
            🏫 Academic & System Config
          </button>
        )}

        <button
          onClick={() => setActiveTab('notifications')}
          className={`w-full text-left p-3 rounded-md text-sm font-medium transition-colors ${activeTab === 'notifications' ? 'bg-orange-100 text-orange-600' : 'text-gray-600 hover:bg-gray-100'}`}
        >
          🔔 Notifications & UI
        </button>
      </div>

      {/* Main Dynamic View Panels */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        
        {/* TAB 1: PROFILE FORM */}
        {activeTab === 'profile' && (
          <form className="space-y-6">
            <h3 className="text-lg font-semibold border-b pb-2">Personal Information</h3>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-200 relative overflow-hidden">
                <Image src="/avatar-placeholder.png" alt="Avatar" fill className="object-cover" />
              </div>
              <button type="button" className="px-3 py-1.5 border text-xs font-medium rounded hover:bg-gray-50">Change Photo</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Contact Phone</label>
                <input type="text" className="w-full border p-2 rounded-md focus:outline-blue-500" placeholder="+237 ..." />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Preferred Timezone</label>
                <select className="w-full border p-2 rounded-md focus:outline-blue-500">
                  <option>Africa/Douala (GMT+1)</option>
                  <option>UTC</option>
                </select>
              </div>
            </div>
            <button className="bg-blue-600 text-white font-medium text-sm px-4 py-2 rounded-md hover:bg-blue-700">Save Profile</button>
          </form>
        )}

        {/* TAB 2: SECURITY / PASSWORD RESET */}
        {activeTab === 'security' && (
          <form className="space-y-6">
            <h3 className="text-lg font-semibold border-b pb-2">Security credentials</h3>
            <div className="max-w-md space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Current Password</label>
                <input type="password" className="w-full border p-2 rounded-md" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">New Password</label>
                <input type="password" className="w-full border p-2 rounded-md" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Confirm New Password</label>
                <input type="password" className="w-full border p-2 rounded-md" />
              </div>
            </div>
            <button className="bg-red-500 text-white font-medium text-sm px-4 py-2 rounded-md hover:bg-red-600">Update Password</button>
          </form>
        )}

        {/* TAB 3: ACADEMIC & GRADING CONTROLS */}
        {activeTab === 'academic' && (
          <form className="space-y-6">
            <h3 className="text-lg font-semibold border-b pb-2">Global System Configuration</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Active Academic Year</label>
                <select className="w-full border p-2 rounded-md">
                  <option>2025/2026</option>
                  <option>2026/2027</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Current Active Term</label>
                <select className="w-full border p-2 rounded-md">
                  <option>First Semester</option>
                  <option>Second Semester</option>
                  <option>Resit Exams</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">CA Weight (%)</label>
                <input type="number" defaultValue={40} className="w-full border p-2 rounded-md" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">Exam Weight (%)</label>
                <input type="number" defaultValue={60} className="w-full border p-2 rounded-md" />
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 p-3 rounded border">
              <input type="checkbox" id="allowEdit" defaultChecked className="w-4 h-4 text-orange-500" />
              <label htmlFor="allowEdit" className="text-sm text-gray-700 font-medium">Allow Teachers to modify results post-deadline</label>
            </div>
            <button className="bg-blue-600 text-white font-medium text-sm px-4 py-2 rounded-md hover:bg-blue-700">Apply System Rules</button>
          </form>
        )}

        {/* TAB 4: NOTIFICATIONS */}
        {activeTab === 'notifications' && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold border-b pb-2">Notification Preferences</h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-blue-600" />
                <span className="text-sm text-gray-700">Email me immediately when student marks are published</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4 rounded text-blue-600" />
                <span className="text-sm text-gray-700">Send system update push alerts to my device dashboard</span>
              </label>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}