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
import { PlusCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function CampaignsPage() {
  const navigate = useNavigate()

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Campañas</h1>
          <p className="text-muted-foreground">
            Gestiona tus campañas de email marketing
          </p>
        </div>
        <Button onClick={() => navigate("/dashboard/campaigns/new")}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Nueva Campaña
        </Button>
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
              No hay campañas creadas aún. Comienza creando tu primera campaña.
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}