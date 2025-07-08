
import { Card, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold">Total Quotes</h2>
            <p className="text-2xl mt-2">24</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold">Tasks Due Today</h2>
            <p className="text-2xl mt-2">5</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold">Active Contacts</h2>
            <p className="text-2xl mt-2">18</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
