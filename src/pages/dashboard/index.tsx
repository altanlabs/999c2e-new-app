import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Users, Send, Template } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function DashboardPage() {
  const navigate = useNavigate()

  const stats = [
    {
      title: "Contactos",
      value: "0",
      icon: <Users className="h-4 w-4" />,
      link: "/dashboard/contacts"
    },
    {
      title: "Campañas Enviadas",
      value: "0",
      icon: <Send className="h-4 w-4" />,
      link: "/dashboard/campaigns"
    },
    {
      title: "Plantillas",
      value: "10+",
      icon: <Template className="h-4 w-4" />,
      link: "/dashboard/templates"
    },
    {
      title: "Emails Disponibles",
      value: "1000",
      icon: <Mail className="h-4 w-4" />,
      link: "/dashboard/billing"
    }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button onClick={() => navigate("/dashboard/campaigns/new")}>
          Nueva Campaña
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="cursor-pointer hover:bg-accent/5" onClick={() => navigate(stat.link)}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Últimas Campañas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              No hay campañas enviadas aún
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Plantillas Populares</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/dashboard/templates")}>
                <Template className="mr-2 h-4 w-4" />
                Propiedades Destacadas
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/dashboard/templates")}>
                <Template className="mr-2 h-4 w-4" />
                Newsletter Mensual
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => navigate("/dashboard/templates")}>
                <Template className="mr-2 h-4 w-4" />
                Nuevo Listado
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}