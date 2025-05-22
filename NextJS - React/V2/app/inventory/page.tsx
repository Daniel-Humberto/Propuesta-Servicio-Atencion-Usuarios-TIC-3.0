import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  AlertCircle,
  CheckCircle2,
  Download,
  Laptop,
  Mic,
  Monitor,
  Plus,
  Printer,
  Projector,
  Search,
  SlidersHorizontal,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function InventoryPage() {
  return (
    <div className="flex flex-col">
      <header className="border-b">
        <div className="flex h-16 items-center px-4 gap-4">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold">Inventario</h1>
          <div className="ml-auto flex items-center space-x-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Equipo
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="flex flex-col space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total de Equipos</CardTitle>
                <Monitor className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">128</div>
                <p className="text-xs text-muted-foreground">+3 nuevos este mes</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Equipos Disponibles</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">96</div>
                <p className="text-xs text-muted-foreground">75% del inventario</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Equipos Prestados</CardTitle>
                <Laptop className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32</div>
                <p className="text-xs text-muted-foreground">25% del inventario</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mantenimiento</CardTitle>
                <AlertCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">Requieren atención</p>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex items-center gap-2">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar equipos..." className="w-full pl-8" />
              </div>
              <Button variant="outline" size="sm" className="h-9">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Filtros
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Download className="h-4 w-4" />
                <span className="sr-only">Exportar</span>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="projectors">Proyectores</TabsTrigger>
              <TabsTrigger value="laptops">Laptops</TabsTrigger>
              <TabsTrigger value="audio">Audio</TabsTrigger>
              <TabsTrigger value="other">Otros</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Proyector Epson PowerLite",
                    id: "PRY-001",
                    type: "Proyector",
                    status: "Disponible",
                    location: "Almacén Principal",
                    icon: Projector,
                  },
                  {
                    name: "Laptop Dell XPS 15",
                    id: "LPT-023",
                    type: "Laptop",
                    status: "Prestado",
                    location: "Departamento de Investigación",
                    icon: Laptop,
                  },
                  {
                    name: "Micrófono Inalámbrico Shure",
                    id: "MIC-007",
                    type: "Audio",
                    status: "Disponible",
                    location: "Almacén Principal",
                    icon: Mic,
                  },
                  {
                    name: "Monitor LG UltraWide",
                    id: "MON-012",
                    type: "Monitor",
                    status: "Mantenimiento",
                    location: "Servicio Técnico",
                    icon: Monitor,
                  },
                  {
                    name: "Impresora HP LaserJet",
                    id: "IMP-005",
                    type: "Impresora",
                    status: "Disponible",
                    location: "Oficina Central",
                    icon: Printer,
                  },
                  {
                    name: "Proyector BenQ",
                    id: "PRY-008",
                    type: "Proyector",
                    status: "Prestado",
                    location: "Auditorio Principal",
                    icon: Projector,
                  },
                ].map((item, i) => (
                  <Card key={i}>
                    <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                      <div>
                        <CardTitle className="text-base">{item.name}</CardTitle>
                        <CardDescription>
                          {item.id} • {item.type}
                        </CardDescription>
                      </div>
                      <item.icon className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Estado:</span>
                          <Badge
                            variant={
                              item.status === "Disponible"
                                ? "outline"
                                : item.status === "Prestado"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Ubicación:</span>
                          <span>{item.location}</span>
                        </div>
                        {item.status === "Prestado" && (
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Tiempo restante:</span>
                              <span>3 días</span>
                            </div>
                            <Progress value={30} className="h-2" />
                          </div>
                        )}
                        <div className="flex justify-end mt-2">
                          <Button variant="outline" size="sm">
                            Ver detalles
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="projectors">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: "Proyector Epson PowerLite",
                    id: "PRY-001",
                    type: "Proyector",
                    status: "Disponible",
                    location: "Almacén Principal",
                    icon: Projector,
                  },
                  {
                    name: "Proyector BenQ",
                    id: "PRY-008",
                    type: "Proyector",
                    status: "Prestado",
                    location: "Auditorio Principal",
                    icon: Projector,
                  },
                ].map((item, i) => (
                  <Card key={i}>
                    <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
                      <div>
                        <CardTitle className="text-base">{item.name}</CardTitle>
                        <CardDescription>
                          {item.id} • {item.type}
                        </CardDescription>
                      </div>
                      <item.icon className="h-5 w-5 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Estado:</span>
                          <Badge
                            variant={
                              item.status === "Disponible"
                                ? "outline"
                                : item.status === "Prestado"
                                  ? "secondary"
                                  : "destructive"
                            }
                          >
                            {item.status}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Ubicación:</span>
                          <span>{item.location}</span>
                        </div>
                        {item.status === "Prestado" && (
                          <div className="mt-2">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span className="text-muted-foreground">Tiempo restante:</span>
                              <span>3 días</span>
                            </div>
                            <Progress value={30} className="h-2" />
                          </div>
                        )}
                        <div className="flex justify-end mt-2">
                          <Button variant="outline" size="sm">
                            Ver detalles
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="laptops">
              <div className="p-8 text-center text-muted-foreground">Mostrando solo laptops del inventario</div>
            </TabsContent>
            <TabsContent value="audio">
              <div className="p-8 text-center text-muted-foreground">
                Mostrando solo equipos de audio del inventario
              </div>
            </TabsContent>
            <TabsContent value="other">
              <div className="p-8 text-center text-muted-foreground">Mostrando otros equipos del inventario</div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

