
'use client';

import React from 'react';

export default function QuoteOverviewPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-semibold">Quote #1045 – Commercial Fit-Out</h1>
          <p className="text-green-600 font-medium">Draft</p>
          <div className="mt-2 flex space-x-2">
            <button className="bg-gray-200 text-sm px-4 py-1 rounded-full">Overview</button>
            <button className="text-sm px-4 py-1 rounded-full hover:bg-gray-100">Plans</button>
            <button className="text-sm px-4 py-1 rounded-full hover:bg-gray-100">Worksheet</button>
          </div>
        </div>
        <div className="text-right">
          <div className="mb-2">
            <button className="border border-gray-400 px-4 py-1 text-sm rounded mr-2">Export (PDF/XLS)</button>
            <button className="border border-gray-400 px-4 py-1 text-sm rounded">Convert to Project</button>
          </div>
          <p className="text-sm">Date Created: 12/09/2023</p>
          <p className="text-sm text-red-500">Due Date: 15/09/2023</p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="bg-white p-4 rounded shadow-sm space-y-4">
          <div>
            <h2 className="font-semibold mb-1">Client Information</h2>
            <p>Client Name: John Smith</p>
            <p>Company: ABC Plumbing Co.</p>
            <p>Contact: Jane Doe</p>
            <p>Email: <a href="mailto:jane.doe@example.com" className="text-blue-600 underline">jane.doe@example.com</a></p>
            <p>Phone: +123456789</p>
            <p className="text-green-600 underline cursor-pointer">Linked Project: Project X</p>
          </div>
          <div>
            <h2 className="font-semibold mb-1">Project Details</h2>
            <p>Address: 123 Main St, City</p>
            <p>Start Date: 01/10/2023</p>
            <p>Project Manager: Mike Johnson</p>
          </div>
          <div>
            <h2 className="font-semibold mb-1">Financial Overview</h2>
            <p>Budget: $50,000</p>
            <p>Sell Price: $60,000</p>
            <p>Margin: 20%</p>
            <p>Actual Cost: $48,000</p>
          </div>
          <div>
            <h2 className="font-semibold mb-1">Linked Documents</h2>
            <ul className="list-disc list-inside text-green-600 space-y-1">
              <li><a href="#" className="underline">Plans</a></li>
              <li><a href="#" className="underline">Site Photos</a></li>
              <li><a href="#" className="underline">Specifications</a></li>
            </ul>
          </div>
        </div>

        {/* Middle Column */}
        <div className="bg-white p-4 rounded shadow-sm">
          <div className="flex space-x-4 mb-4">
            <button className="bg-green-600 text-white px-3 py-1 rounded">Activity Log</button>
            <button className="text-gray-600 hover:text-black">Checklist</button>
            <button className="text-gray-600 hover:text-black">Documents</button>
          </div>
          <h3 className="font-semibold mb-2">Log a New Activity</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium">Activity Type</label>
              <select className="w-full border border-gray-300 rounded px-2 py-1">
                <option>Call</option>
                <option>Email</option>
                <option>Meeting</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium">Associated Contact</label>
              <input type="text" className="w-full border border-gray-300 rounded px-2 py-1" placeholder="Type contact name" />
            </div>
            <div>
              <label className="block text-sm font-medium">Notes</label>
              <textarea className="w-full border border-gray-300 rounded px-2 py-1" placeholder="Add any additional notes here"></textarea>
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-1 rounded">Log Activity</button>
          </form>
        </div>

        {/* Right Column */}
        <div className="bg-white p-4 rounded shadow-sm space-y-4">
          <div>
            <h2 className="font-semibold mb-1">Activity Feed & Status</h2>
            <ul className="text-sm list-disc list-inside">
              <li>Email sent to John Smith on 10/09/2023</li>
              <li>Call with Jane Doe on 11/09/2023</li>
              <li>Quote edited on 12/09/2023</li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-1">Follow-ups & Reminders</h2>
            <p>Follow-up call scheduled for 14/09/2023</p>
            <p>Email reminder set for overdue quote</p>
          </div>
          <div>
            <h2 className="font-semibold mb-1">Internal Notes</h2>
            <p>Note: Confirm site visit schedule.</p>
          </div>
          <div className="space-y-2">
            <button className="border border-gray-400 px-3 py-1 rounded w-full">Set Status to Approved</button>
            <button className="border border-gray-400 px-3 py-1 rounded w-full">Schedule Site Visit</button>
            <button className="border border-gray-400 px-3 py-1 rounded w-full">Assign to Team Member</button>
          </div>
        </div>
      </div>
    </div>
  );
}
