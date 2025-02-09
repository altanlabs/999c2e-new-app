import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Image, Type, Layout, Coffee, Eye, Undo, Redo } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const blockTypes = [
  {
    id: "header",
    name: "Encabezado",
    icon: <Layout className="h-4 w-4" />,
    variants: ["Simple", "Con imagen", "Centrado"]
  },
  {
    id: "property",
    name: "Propiedad",
    icon: <Coffee className="h-4 w-4" />,
    variants: ["Card", "Lista", "Destacado"]
  },
  {
    id: "text",
    name: "Texto",
    icon: <Type className="h-4 w-4" />,
    variants: ["Párrafo", "Lista", "Cita"]
  },
  {
    id: "image",
    name: "Imagen",
    icon: <Image className="h-4 w-4" />,
    variants: ["Simple", "Galería", "Carrusel"]
  }
];

const TemplateEditor = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("blocks");

  return (
    <div className="h-screen flex flex-col">
      {/* Barra superior */}
      <div className="border-b p-4 flex items-center justify-between bg-background">
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate("/dashboard/templates")}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver
          </Button>
          <div>
            <Input
              className="text-lg font-semibold bg-transparent border-none w-[300px]"
              defaultValue="Nueva Plantilla"
            />
            <span className="text-sm text-muted-foreground">Editando plantilla</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Undo className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Deshacer</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Redo className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Rehacer</TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <Button variant="outline">
            <Eye className="h-4 w-4 mr-2" />
            Vista Previa
          </Button>
          <Button>
            <Save className="h-4 w-4 mr-2" />
            Guardar
          </Button>
        </div>
      </div>

      <div className="flex-1 flex">
        {/* Panel lateral */}
        <div className="w-[300px] border-r bg-background">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="w-full">
              <TabsTrigger value="blocks" className="flex-1">Bloques</TabsTrigger>
              <TabsTrigger value="styles" className="flex-1">Estilos</TabsTrigger>
              <TabsTrigger value="settings" className="flex-1">Ajustes</TabsTrigger>
            </TabsList>
            <div className="p-4">
              <TabsContent value="blocks">
                <div className="space-y-4">
                  {blockTypes.map((blockType) => (
                    <Card key={blockType.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          {blockType.icon}
                          <span className="font-medium">{blockType.name}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {blockType.variants.map((variant, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              className="h-20 flex flex-col gap-2"
                              draggable
                              onDragStart={(e) => {
                                e.dataTransfer.setData("text/plain", `${blockType.id}-${variant}`);
                              }}
                            >
                              {blockType.icon}
                              <span className="text-xs">{variant}</span>
                            </Button>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="styles">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Color Principal</Label>
                    <div className="grid grid-cols-6 gap-2">
                      {["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEEAD", "#D4A5A5"].map((color) => (
                        <button
                          key={color}
                          className="w-8 h-8 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Tipografía</Label>
                    <Select defaultValue="inter">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una fuente" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inter">Inter</SelectItem>
                        <SelectItem value="roboto">Roboto</SelectItem>
                        <SelectItem value="poppins">Poppins</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Estilo</Label>
                    <Select defaultValue="modern">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un estilo" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="modern">Moderno</SelectItem>
                        <SelectItem value="classic">Clásico</SelectItem>
                        <SelectItem value="minimal">Minimalista</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="settings">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label>Nombre de la Plantilla</Label>
                    <Input placeholder="Ej: Newsletter Mensual" />
                  </div>
                  <div className="space-y-2">
                    <Label>Categoría</Label>
                    <Select defaultValue="newsletter">
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona una categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newsletter">Newsletter</SelectItem>
                        <SelectItem value="property">Propiedad</SelectItem>
                        <SelectItem value="event">Evento</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Descripción</Label>
                    <Input placeholder="Describe tu plantilla" />
                  </div>
                  <div className="space-y-2">
                    <Label>Precio</Label>
                    <Input type="number" placeholder="5" />
                  </div>
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>

        {/* Área de edición */}
        <div className="flex-1 bg-gray-50 dark:bg-gray-900 p-8 overflow-auto">
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg min-h-[800px] p-8">
            <div
              className="min-h-full"
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const data = e.dataTransfer.getData("text/plain");
                console.log("Dropped block:", data);
              }}
            >
              <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg p-8 text-center text-muted-foreground">
                Arrastra y suelta bloques aquí para comenzar
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateEditor;