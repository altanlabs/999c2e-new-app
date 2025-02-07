import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function TemplatesPage() {
  const navigate = useNavigate()

  const templates = [
    {
      id: 1,
      title: "Propiedades Destacadas",
      description: "Plantilla para mostrar las propiedades más destacadas de tu cartera",
      thumbnail: "/templates/featured-properties.jpg",
      price: "5€"
    },
    {
      id: 2,
      title: "Newsletter Mensual",
      description: "Mantén informados a tus clientes sobre las últimas novedades del mercado",
      thumbnail: "/templates/newsletter.jpg",
      price: "5€"
    },
    {
      id: 3,
      title: "Nuevo Listado",
      description: "Anuncia nuevas propiedades a tu base de datos",
      thumbnail: "/templates/new-listing.jpg",
      price: "5€"
    },
    {
      id: 4,
      title: "Evento Open House",
      description: "Invita a tus clientes a un evento de puertas abiertas",
      thumbnail: "/templates/open-house.jpg",
      price: "5€"
    }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Plantillas de Email</h1>
          <p className="text-muted-foreground">
            Selecciona una plantilla para comenzar tu campaña
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle>{template.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-md mb-4" />
              <p className="text-sm text-muted-foreground">
                {template.description}
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="font-bold">{template.price}</span>
              <Button onClick={() => navigate(\`/dashboard/campaigns/new?template=\${template.id}\`)}>
                Usar Plantilla
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}