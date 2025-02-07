import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Plus } from "lucide-react"
import { useNavigate } from "react-router-dom"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function NewContactPage() {
  const navigate = useNavigate()

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={() => navigate("/dashboard/contacts")}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Nuevo Cliente</h1>
          <p className="text-muted-foreground">
            Añade un nuevo contacto a tu base de datos
          </p>
        </div>
      </div>

      <div className="max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle>Información del Cliente</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Nombre</Label>
                <Input placeholder="Ej: Juan" />
              </div>
              <div className="space-y-2">
                <Label>Apellidos</Label>
                <Input placeholder="Ej: Pérez García" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Email</Label>
              <Input type="email" placeholder="Ej: juan.perez@email.com" />
            </div>

            <div className="space-y-2">
              <Label>Teléfono</Label>
              <Input type="tel" placeholder="Ej: +34 600 000 000" />
            </div>

            <div className="space-y-2">
              <Label>Tipo de Cliente</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el tipo de cliente" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="buyer">Comprador</SelectItem>
                  <SelectItem value="seller">Vendedor</SelectItem>
                  <SelectItem value="investor">Inversor</SelectItem>
                  <SelectItem value="tenant">Inquilino</SelectItem>
                  <SelectItem value="landlord">Propietario</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Presupuesto</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el rango de presupuesto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-100k">Hasta 100.000€</SelectItem>
                  <SelectItem value="100k-200k">100.000€ - 200.000€</SelectItem>
                  <SelectItem value="200k-300k">200.000€ - 300.000€</SelectItem>
                  <SelectItem value="300k-500k">300.000€ - 500.000€</SelectItem>
                  <SelectItem value="500k+">Más de 500.000€</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Zona de Interés</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona la zona" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="centro">Centro Ciudad</SelectItem>
                  <SelectItem value="norte">Zona Norte</SelectItem>
                  <SelectItem value="sur">Zona Sur</SelectItem>
                  <SelectItem value="este">Zona Este</SelectItem>
                  <SelectItem value="oeste">Zona Oeste</SelectItem>
                  <SelectItem value="periferia">Periferia</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Notas Adicionales</Label>
              <Input placeholder="Añade cualquier información relevante sobre el cliente" />
            </div>

            <div className="flex gap-2 pt-4">
              <Button variant="outline" onClick={() => navigate("/dashboard/contacts")}>
                Cancelar
              </Button>
              <Button className="flex-1">
                <Plus className="h-4 w-4 mr-2" />
                Añadir Cliente
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}