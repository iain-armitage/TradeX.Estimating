"use client";

import { useState } from 'react';

interface Task {
  id: string;
  title: string;
  status: 'Pending' | 'In Progress' | 'Completed';
  dueDate: string;
}

export default function TasksPage() {
  const [tasks] = useState<Task[]>([{
    id: '1',
    title: 'Follow up on Quote Q-1023',
    status: 'Pending',
    dueDate: '2025-07-12',
  }, {
    id: '2',
    title: 'Call supplier for updated pricing',
    status: 'In Progress',
    dueDate: '2025-07-10',
  }]);

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Tasks</h1>
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Due Date</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(task => (
            <tr key={task.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{task.title}</td>
              <td className="px-4 py-2">{task.status}</td>
              <td className="px-4 py-2">{task.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}