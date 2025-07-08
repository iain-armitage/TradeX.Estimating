// app/dashboard/page.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, ClipboardList, FileText, Users, Clock, CheckCircle } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h1>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex items-center gap-4">
            <ClipboardList className="text-blue-600" />
            <CardTitle>Quotes This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">18</p>
            <p className="text-muted-foreground">Compared to 14 last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center gap-4">
            <FileText className="text-yellow-600" />
            <CardTitle>Awaiting Client Reply</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">6</p>
            <p className="text-muted-foreground">Quotes still pending</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center gap-4">
            <Clock className="text-orange-600" />
            <CardTitle>Tasks Due Today</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">3</p>
            <p className="text-muted-foreground">Don’t miss today’s tasks</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center gap-4">
            <CheckCircle className="text-green-600" />
            <CardTitle>Completed Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">12</p>
            <p className="text-muted-foreground">Tasks closed this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center gap-4">
            <Users className="text-indigo-600" />
            <CardTitle>Active Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">45</p>
            <p className="text-muted-foreground">Engaged with current quotes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center gap-4">
            <Bell className="text-red-600" />
            <CardTitle>Overdue Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">2</p>
            <p className="text-muted-foreground">Requires urgent attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Placeholder for future charts */}
      {/* <div className="mt-10"> 
        <Card>
          <CardHeader>
            <CardTitle>Quote Volume (Monthly)</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartComponent />
          </CardContent>
        </Card>
      </div> */}
    </div>
  );
}
