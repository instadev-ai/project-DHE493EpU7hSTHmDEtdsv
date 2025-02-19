import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Plus, MoreHorizontal } from "lucide-react"

const customers = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    status: "Active",
    lastActive: "2 hours ago",
    subscription: "Pro Plan",
    image: "https://ui-avatars.com/api/?name=Olivia+Martin"
  },
  {
    name: "Jackson Lee",
    email: "jackson.lee@email.com",
    status: "Active",
    lastActive: "5 hours ago",
    subscription: "Basic Plan",
    image: "https://ui-avatars.com/api/?name=Jackson+Lee"
  },
  {
    name: "Isabella Nguyen",
    email: "isabella.n@email.com",
    status: "Inactive",
    lastActive: "2 days ago",
    subscription: "Enterprise",
    image: "https://ui-avatars.com/api/?name=Isabella+Nguyen"
  },
]

export default function Customers() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Customers</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Customer
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Customer List</CardTitle>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                placeholder="Search customers..."
                className="w-[300px]"
              />
              <Button variant="ghost" size="icon">
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {customers.map((customer) => (
              <div
                key={customer.email}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={customer.image} />
                    <AvatarFallback>{customer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{customer.name}</p>
                    <p className="text-sm text-gray-500">{customer.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <p className="text-sm font-medium">{customer.subscription}</p>
                    <p className="text-sm text-gray-500">Last active {customer.lastActive}</p>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      customer.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {customer.status}
                  </span>
                  <Button variant="ghost" size="icon">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}