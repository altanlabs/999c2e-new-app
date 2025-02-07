import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Layout from "./layout"
import IndexPage from "./pages/index"
import DashboardPage from "./pages/dashboard"
import TemplatesPage from "./pages/templates"
import ContactsPage from "./pages/contacts"
import CampaignsPage from "./pages/campaigns"
import { Mail, Users, Template, LayoutDashboard, CreditCard, Coffee } from "lucide-react"
import { ThemeProvider } from "./theme/theme-provider"

const sidebarConfig = {
  items: [
    {
      label: "Mi Cafetería",
      href: "/dashboard",
      icon: <LayoutDashboard className="h-4 w-4" />
    },
    {
      label: "Campañas",
      href: "/dashboard/campaigns",
      icon: <Coffee className="h-4 w-4" />
    },
    {
      label: "Menú de Plantillas",
      href: "/dashboard/templates",
      icon: <Template className="h-4 w-4" />
    },
    {
      label: "Clientes",
      href: "/dashboard/contacts",
      icon: <Users className="h-4 w-4" />
    },
    {
      label: "Facturación",
      href: "/dashboard/billing",
      icon: <CreditCard className="h-4 w-4" />
    }
  ],
  companyName: "Cafetería Inmobiliaria"
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <Router>
        <Routes>
          {/* Public routes */}
          <Route
            path="/"
            element={
              <Layout
                showSidebar={false}
                header={{
                  title: "Cafetería Inmobiliaria",
                  navigation: [
                    { label: "Nuestro Menú", href: "#features" },
                    { label: "Precios", href: "#pricing" },
                    { label: "Contacto", href: "/contact" }
                  ],
                  showThemeToggle: true,
                  showUserMenu: false
                }}
              />
            }
          >
            <Route index element={<IndexPage />} />
          </Route>

          {/* Dashboard routes */}
          <Route
            path="/dashboard"
            element={
              <Layout
                sidebarConfig={sidebarConfig}
                header={{
                  showThemeToggle: true,
                  showUserMenu: true,
                  showNotifications: true
                }}
              />
            }
          >
            <Route index element={<DashboardPage />} />
            <Route path="templates" element={<TemplatesPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="campaigns" element={<CampaignsPage />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App