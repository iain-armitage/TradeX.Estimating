
import { Card, CardContent, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardTitle>Quotes</CardTitle>
          <CardContent>42 active quotes</CardContent>
        </Card>
        <Card>
          <CardTitle>Tasks</CardTitle>
          <CardContent>17 tasks due</CardContent>
        </Card>
        <Card>
          <CardTitle>Contacts</CardTitle>
          <CardContent>120 contacts saved</CardContent>
        </Card>
      </div>
    </div>
  );
}
