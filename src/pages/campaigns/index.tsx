import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Coffee, Search } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function CampaignsPage() {
  const navigate = useNavigate()

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Cafés Servidos</h1>
          <p className="text-muted-foreground">
            Gestiona tus campañas de email marketing
          </p>
        </div>
        <Button onClick={() => navigate("/dashboard/campaigns/new")}>
          <Coffee className="mr-2 h-4 w-4" />
          Preparar Nuevo Café
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar campañas..." className="pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Estado" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos los estados</SelectItem>
            <SelectItem value="draft">Borrador</SelectItem>
            <SelectItem value="scheduled">Programado</SelectItem>
            <SelectItem value="sent">Enviado</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="newest">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Ordenar por" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Más recientes</SelectItem>
            <SelectItem value="oldest">Más antiguos</SelectItem>
            <SelectItem value="name">Nombre</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Destinatarios</TableHead>
            <TableHead>Tasa de Apertura</TableHead>
            <TableHead>Fecha de Envío</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
              No has servido ningún café aún. ¡Es hora de preparar tu primera campaña!
              <div className="mt-4">
                <Button variant="outline" onClick={() => navigate("/dashboard/campaigns/new")}>
                  <Coffee className="mr-2 h-4 w-4" />
                  Preparar Mi Primer Café
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}