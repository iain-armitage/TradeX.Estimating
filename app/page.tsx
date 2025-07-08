import { Card, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold">Total Quotes</h2>
            <p className="text-2xl mt-2">24</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold">Pending Tasks</h2>
            <p className="text-2xl mt-2">8</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold">Contacts</h2>
            <p className="text-2xl mt-2">12</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
