import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FormInput, Copy, Pencil, Trash2, Eye, Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const demoForms = [
  {
    id: 1,
    name: "Formulario de Contacto",
    type: "contact",
    submissions: 145,
    conversionRate: "35%",
    lastSubmission: "hace 2 horas"
  },
  {
    id: 2,
    name: "Solicitud de Tasación",
    type: "valuation",
    submissions: 89,
    conversionRate: "42%",
    lastSubmission: "hace 5 horas"
  },
  {
    id: 3,
    name: "Solicitud de Visita",
    type: "visit",
    submissions: 67,
    conversionRate: "28%",
    lastSubmission: "hace 1 día"
  }
]

export default function FormsPage() {
  const navigate = useNavigate()

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Formularios</h1>
          <p className="text-muted-foreground">
            Gestiona tus formularios de captación
          </p>
        </div>
        <Button onClick={() => navigate("/dashboard/forms/new")}>
          <Plus className="mr-2 h-4 w-4" />
          Nuevo Formulario
        </Button>
      </div>

      <Tabs defaultValue="active" className="space-y-4">
        <div className="flex justify-between items-center">
          <TabsList>
            <TabsTrigger value="active">Activos</TabsTrigger>
            <TabsTrigger value="drafts">Borradores</TabsTrigger>
            <TabsTrigger value="archived">Archivados</TabsTrigger>
          </TabsList>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los tipos</SelectItem>
                <SelectItem value="contact">Contacto</SelectItem>
                <SelectItem value="valuation">Tasación</SelectItem>
                <SelectItem value="visit">Visita</SelectItem>
              </SelectContent>
            </Select>
            <Input
              placeholder="Buscar formularios..."
              className="w-[250px]"
            />
          </div>
        </div>

        <TabsContent value="active">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoForms.map((form) => (
              <Card key={form.id}>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <FormInput className="h-5 w-5" />
                    {form.name}
                  </CardTitle>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Copy className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label className="text-muted-foreground">Envíos</Label>
                        <div className="font-medium">{form.submissions}</div>
                      </div>
                      <div>
                        <Label className="text-muted-foreground">Conversión</Label>
                        <div className="font-medium">{form.conversionRate}</div>
                      </div>
                    </div>
                    <div>
                      <Label className="text-muted-foreground">Último envío</Label>
                      <div className="font-medium">{form.lastSubmission}</div>
                    </div>
                    <div className="pt-4">
                      <Button variant="outline" className="w-full">
                        <Copy className="mr-2 h-4 w-4" />
                        Copiar Código
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Tarjeta para crear nuevo formulario */}
            <Card className="border-dashed">
              <CardContent className="flex flex-col items-center justify-center h-full min-h-[250px]">
                <Button
                  variant="ghost"
                  className="h-20 w-20 rounded-full"
                  onClick={() => navigate("/dashboard/forms/new")}
                >
                  <Plus className="h-10 w-10" />
                </Button>
                <div className="text-center mt-4">
                  <h3 className="font-medium">Crear Nuevo Formulario</h3>
                  <p className="text-sm text-muted-foreground">
                    Añade un nuevo formulario de captación
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="drafts">
          <div className="text-center py-12">
            <FormInput className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-medium">No hay borradores</h3>
            <p className="text-muted-foreground">
              Los formularios en borrador aparecerán aquí
            </p>
          </div>
        </TabsContent>

        <TabsContent value="archived">
          <div className="text-center py-12">
            <FormInput className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-lg font-medium">No hay formularios archivados</h3>
            <p className="text-muted-foreground">
              Los formularios archivados aparecerán aquí
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}