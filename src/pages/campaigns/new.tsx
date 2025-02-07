import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Coffee, Users, Send, ArrowLeft, Eye } from "lucide-react"

export default function NewCampaignPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const templateId = searchParams.get('template')

  const [step, setStep] = useState(1)

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate("/dashboard/campaigns")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Nueva Receta</h1>
          <p className="text-muted-foreground">
            Prepara tu próxima campaña de email marketing
          </p>
        </div>
      </div>

      <div className="flex gap-6">
        <div className="w-2/3 space-y-6">
          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coffee className="h-5 w-5" />
                  Detalles de la Campaña
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Nombre de la Campaña</Label>
                  <Input placeholder="Ej: Newsletter Septiembre 2024" />
                </div>
                <div className="space-y-2">
                  <Label>Asunto del Email</Label>
                  <Input placeholder="Ej: ¡Descubre nuestras nuevas propiedades!" />
                </div>
                <div className="space-y-2">
                  <Label>Plantilla</Label>
                  <Select defaultValue={templateId || ""}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una plantilla" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Espresso Inmobiliario</SelectItem>
                      <SelectItem value="2">Cappuccino Mensual</SelectItem>
                      <SelectItem value="3">Latte de Lujo</SelectItem>
                      <SelectItem value="4">Mocha Open House</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Descripción (opcional)</Label>
                  <Textarea placeholder="Añade una descripción para tu referencia interna" />
                </div>
                <Button className="w-full" onClick={() => setStep(2)}>
                  Continuar
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Seleccionar Destinatarios
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Grupo de Destinatarios</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona un grupo" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los contactos</SelectItem>
                      <SelectItem value="buyers">Compradores</SelectItem>
                      <SelectItem value="sellers">Vendedores</SelectItem>
                      <SelectItem value="investors">Inversores</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="p-4 border rounded-lg">
                  <div className="text-sm text-muted-foreground text-center">
                    No hay contactos seleccionados aún
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Atrás
                  </Button>
                  <Button className="flex-1" onClick={() => setStep(3)}>
                    Continuar
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Revisar y Enviar
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4 p-4 border rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-muted-foreground">Nombre</Label>
                      <div className="font-medium">Newsletter Septiembre 2024</div>
                    </div>
                    <div>
                      <Label className="text-muted-foreground">Plantilla</Label>
                      <div className="font-medium">Espresso Inmobiliario</div>
                    </div>
                    <div>
                      <Label className="text-muted-foreground">Destinatarios</Label>
                      <div className="font-medium">0 contactos</div>
                    </div>
                    <div>
                      <Label className="text-muted-foreground">Coste Estimado</Label>
                      <div className="font-medium">0.00€</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Atrás
                  </Button>
                  <Button variant="outline" className="flex-1">
                    <Eye className="h-4 w-4 mr-2" />
                    Vista Previa
                  </Button>
                  <Button className="flex-1">
                    <Coffee className="h-4 w-4 mr-2" />
                    Servir Campaña
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="w-1/3">
          <Card>
            <CardHeader>
              <CardTitle>Progreso</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    1
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Detalles</div>
                    <div className="text-sm text-muted-foreground">
                      Configura tu campaña
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    2
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Destinatarios</div>
                    <div className="text-sm text-muted-foreground">
                      Selecciona tu audiencia
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted'
                  }`}>
                    3
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Revisar y Enviar</div>
                    <div className="text-sm text-muted-foreground">
                      Confirma y sirve tu campaña
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}