import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DashboardLayout from "./components/layout/DashboardLayout"
import Dashboard from "./components/dashboard/Dashboard"
import Analytics from "./components/pages/Analytics"
import Customers from "./components/pages/Customers"
import Settings from "./components/pages/Settings"
import { Toaster } from "@/components/ui/sonner"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </DashboardLayout>
        <Toaster />
      </Router>
    </QueryClientProvider>
  )
}

export default App