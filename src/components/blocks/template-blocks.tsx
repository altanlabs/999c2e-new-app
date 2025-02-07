import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Image as ImageIcon, Trash2 } from "lucide-react"

interface BlockProps {
  onDelete?: () => void
  isEditing?: boolean
}

export const HeaderBlock = ({ onDelete, isEditing = false }: BlockProps) => {
  if (isEditing) {
    return (
      <div className="space-y-4 relative group">
        <div className="space-y-2">
          <Label>Título</Label>
          <Input defaultValue="Bienvenido a nuestra Newsletter" />
        </div>
        <div className="space-y-2">
          <Label>Subtítulo</Label>
          <Input defaultValue="Las mejores propiedades seleccionadas para ti" />
        </div>
        {onDelete && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-12 top-0 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={onDelete}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className="text-center space-y-4">
      <h1 className="text-4xl font-bold">Bienvenido a nuestra Newsletter</h1>
      <p className="text-xl text-muted-foreground">
        Las mejores propiedades seleccionadas para ti
      </p>
    </div>
  )
}

export const PropertyBlock = ({ onDelete, isEditing = false }: BlockProps) => {
  if (isEditing) {
    return (
      <div className="space-y-4 relative group">
        <div className="space-y-2">
          <Label>Título de la Propiedad</Label>
          <Input defaultValue="Villa Moderna en el Centro" />
        </div>
        <div className="space-y-2">
          <Label>Descripción</Label>
          <Input defaultValue="Espectacular villa con 4 habitaciones y piscina" />
        </div>
        <div className="space-y-2">
          <Label>Precio</Label>
          <Input defaultValue="450.000€" />
        </div>
        <div className="space-y-2">
          <Label>Imagen</Label>
          <div className="border-2 border-dashed rounded-lg p-4 text-center">
            <ImageIcon className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
            <Button variant="outline" size="sm">Subir Imagen</Button>
          </div>
        </div>
        {onDelete && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-12 top-0 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={onDelete}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>
    )
  }

  return (
    <Card className="overflow-hidden">
      <div className="aspect-video bg-muted" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">Villa Moderna en el Centro</h3>
        <p className="text-muted-foreground">
          Espectacular villa con 4 habitaciones y piscina
        </p>
        <div className="mt-2 font-bold">450.000€</div>
      </div>
    </Card>
  )
}

export const TextBlock = ({ onDelete, isEditing = false }: BlockProps) => {
  if (isEditing) {
    return (
      <div className="space-y-4 relative group">
        <div className="space-y-2">
          <Label>Contenido</Label>
          <Input
            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        {onDelete && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-12 top-0 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={onDelete}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>
    )
  }

  return (
    <p className="text-muted-foreground">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua.
    </p>
  )
}

export const ImageBlock = ({ onDelete, isEditing = false }: BlockProps) => {
  if (isEditing) {
    return (
      <div className="space-y-4 relative group">
        <div className="space-y-2">
          <Label>Imagen</Label>
          <div className="border-2 border-dashed rounded-lg p-8 text-center">
            <ImageIcon className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
            <Button variant="outline">Subir Imagen</Button>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Descripción de la imagen</Label>
          <Input placeholder="Describe la imagen" />
        </div>
        {onDelete && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-12 top-0 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={onDelete}
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        )}
      </div>
    )
  }

  return (
    <div className="space-y-2">
      <div className="aspect-video bg-muted rounded-lg" />
      <p className="text-sm text-muted-foreground text-center">
        Descripción de la imagen
      </p>
    </div>
  )
}