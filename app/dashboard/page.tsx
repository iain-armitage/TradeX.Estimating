import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">Open Quotes</h2>
            <p className="text-sm text-muted">You have 3 active quotes.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">Tasks Due Today</h2>
            <p className="text-sm text-muted">2 tasks are due by EOD.</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-lg font-semibold mb-2">New Leads</h2>
            <p className="text-sm text-muted">5 new leads added this week.</p>
          </CardContent>
        </Card>
      </div>
      <Button className="mt-4">View Full Report</Button>
    </div>
  );
}