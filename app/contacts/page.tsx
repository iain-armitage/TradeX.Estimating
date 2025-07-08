
'use client';

import React, { useState } from 'react';

const mockContacts = [
  {
    id: 1,
    name: 'Jane Doe',
    company: 'ABC Plumbing Co.',
    role: 'Estimator',
    email: 'jane.doe@example.com',
    phone: '+61 412 345 678',
    type: 'Client',
  },
  {
    id: 2,
    name: 'John Smith',
    company: 'TopFlow Supplies',
    role: 'Sales Rep',
    email: 'john.smith@topflow.com',
    phone: '+61 423 876 543',
    type: 'Supplier',
  },
  {
    id: 3,
    name: 'Emily Chen',
    company: 'City Consultants',
    role: 'Engineer',
    email: 'emily.chen@cityconsult.com.au',
    phone: '+61 455 223 344',
    type: 'Consultant',
  },
];

export default function ContactsPage() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filteredContacts = mockContacts.filter(contact => {
    const matchType = filter === 'All' || contact.type === filter;
    const matchSearch =
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.company.toLowerCase().includes(search.toLowerCase()) ||
      contact.email.toLowerCase().includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Contacts</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded text-sm">+ Add Contact</button>
      </div>

      {/* Search & Filter */}
      <div className="flex items-center space-x-4 mb-6">
        <input
          type="text"
          placeholder="Search contacts..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/2 border px-3 py-2 rounded text-sm"
        />
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border px-3 py-2 rounded text-sm"
        >
          <option value="All">All Types</option>
          <option value="Client">Client</option>
          <option value="Supplier">Supplier</option>
          <option value="Consultant">Consultant</option>
        </select>
      </div>

      {/* Contact Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredContacts.map((contact) => (
          <div key={contact.id} className="bg-white p-4 rounded shadow-sm border">
            <h2 className="text-lg font-semibold">{contact.name}</h2>
            <p className="text-sm text-gray-600">{contact.role} @ {contact.company}</p>
            <div className="mt-2 text-sm text-gray-700 space-y-1">
              <p><strong>Email:</strong> <a href={`mailto:${contact.email}`} className="text-blue-600 underline">{contact.email}</a></p>
              <p><strong>Phone:</strong> {contact.phone}</p>
              <p><strong>Type:</strong> {contact.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
