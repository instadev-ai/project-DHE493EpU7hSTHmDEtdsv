import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import DashboardLayout from "./components/layout/DashboardLayout"
import Dashboard from "./components/dashboard/Dashboard"
import { Toaster } from "@/components/ui/sonner"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DashboardLayout>
        <Dashboard />
      </DashboardLayout>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App