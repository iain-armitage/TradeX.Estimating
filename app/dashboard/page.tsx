// app/dashboard/page.tsx
'use client'

import { Card, CardContent, CardTitle } from '@/components/ui/card'

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardTitle>Total Quotes</CardTitle>
          <CardContent>42</CardContent>
        </Card>
        <Card>
          <CardTitle>Pending Tasks</CardTitle>
          <CardContent>7</CardContent>
        </Card>
        <Card>
          <CardTitle>Active Projects</CardTitle>
          <CardContent>5</CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardTitle>Recent Activity</CardTitle>
          <CardContent>
            <ul className="mt-2 space-y-1 text-sm text-gray-700">
              <li>📝 Sent quote to Smith Builders</li>
              <li>✅ Marked task "Verify Plan B" complete</li>
              <li>📥 Uploaded revised plans for Job #420</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardTitle>Quick Actions</CardTitle>
          <CardContent>
            <div className="space-y-2">
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg">+ New Quote</button>
              <button className="w-full bg-gray-100 text-gray-800 py-2 rounded-lg">View Tasks</button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
