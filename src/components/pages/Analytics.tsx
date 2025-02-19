import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, LineChart } from "@/components/ui/chart"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Analytics() {
  const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [4500, 3500, 6000, 5200, 5800, 7000],
        backgroundColor: '#6366f1',
      },
    ],
  }

  const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Active Users',
        data: [1200, 1900, 2300, 2800, 2400, 2900],
        borderColor: '#6366f1',
        backgroundColor: 'rgba(99, 102, 241, 0.1)',
        tension: 0.4,
      },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Analytics</h1>
        <Tabs defaultValue="30days" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="7days">7 days</TabsTrigger>
            <TabsTrigger value="30days">30 days</TabsTrigger>
            <TabsTrigger value="90days">90 days</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <BarChart data={barChartData} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>User Growth</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <LineChart data={lineChartData} />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Key Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Average Session Duration</p>
              <p className="text-2xl font-bold">12m 30s</p>
              <p className="text-sm text-green-500">+5.2% from last month</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Bounce Rate</p>
              <p className="text-2xl font-bold">32.1%</p>
              <p className="text-sm text-red-500">+2.3% from last month</p>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">Conversion Rate</p>
              <p className="text-2xl font-bold">3.8%</p>
              <p className="text-sm text-green-500">+1.2% from last month</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}