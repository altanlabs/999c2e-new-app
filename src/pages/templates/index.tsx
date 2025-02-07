import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"
import { Coffee } from "lucide-react"

export default function TemplatesPage() {
  const navigate = useNavigate()

  const templates = [
    {
      id: 1,
      title: "Espresso Inmobiliario",
      description: "Corto y directo: presenta una propiedad destacada",
      thumbnail: "/templates/espresso.jpg",
      price: "5€"
    },
    {
      id: 2,
      title: "Cappuccino Mensual",
      description: "Newsletter mensual con un toque cremoso de noticias del mercado",
      thumbnail: "/templates/cappuccino.jpg",
      price: "5€"
    },
    {
      id: 3,
      title: "Latte de Lujo",
      description: "Presenta propiedades de lujo con estilo y elegancia",
      thumbnail: "/templates/latte.jpg",
      price: "5€"
    },
    {
      id: 4,
      title: "Mocha Open House",
      description: "La mezcla perfecta para invitar a tus eventos de puertas abiertas",
      thumbnail: "/templates/mocha.jpg",
      price: "5€"
    },
    {
      id: 5,
      title: "Frappé de Ofertas",
      description: "Refrescante template para promocionar ofertas especiales",
      thumbnail: "/templates/frappe.jpg",
      price: "5€"
    },
    {
      id: 6,
      title: "Americano Informativo",
      description: "Mantén a tus clientes al día con las últimas tendencias del mercado",
      thumbnail: "/templates/americano.jpg",
      price: "5€"
    }
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Menú de Plantillas</h1>
          <p className="text-muted-foreground">
            Selecciona tu blend perfecto para tu próxima campaña
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card key={template.id} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Coffee className="h-5 w-5" />
                {template.title}
              </CardTitle>
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
                Servir Ahora
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}