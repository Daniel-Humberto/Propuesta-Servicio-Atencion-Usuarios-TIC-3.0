import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { AlertCircle, ArrowUpRight, Calendar, CheckCircle2, Clock, HelpCircle, Package, Ticket } from "lucide-react"
import { DashboardChart } from "@/components/dashboard-chart"
import { RecentTickets } from "@/components/recent-tickets"

export default function Home() {
  return (
    <div className="flex flex-col">
      <header className="border-b">
        <div className="flex h-16 items-center px-4 gap-4">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="ml-auto flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Clock className="mr-2 h-4 w-4" />
              Últimos 30 días
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tickets Totales</CardTitle>
              <Ticket className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
              <p className="text-xs text-muted-foreground">+12% respecto al mes anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tickets Pendientes</CardTitle>
              <HelpCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">-2% respecto al mes anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Tickets Resueltos</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">227</div>
              <p className="text-xs text-muted-foreground">+18% respecto al mes anterior</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Equipos Prestados</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-muted-foreground">+4% respecto al mes anterior</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>Resumen de Actividad</CardTitle>
              <CardDescription>Visualización de tickets y servicios en los últimos 30 días</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              <DashboardChart />
            </CardContent>
          </Card>
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Tickets Recientes</CardTitle>
              <CardDescription>Últimos tickets creados en el sistema</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentTickets />
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Próximos Eventos</CardTitle>
              <CardDescription>Eventos programados para los próximos días</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Conferencia de Sostenibilidad",
                    date: "28 Mar, 2025",
                    time: "10:00 - 12:00",
                    location: "Auditorio Principal",
                    type: "Reserva",
                  },
                  {
                    title: "Taller de Reciclaje",
                    date: "30 Mar, 2025",
                    time: "15:00 - 17:00",
                    location: "Salón 103",
                    type: "Servicio",
                  },
                  {
                    title: "Presentación de Proyectos",
                    date: "2 Abr, 2025",
                    time: "09:00 - 13:00",
                    location: "Auditorio Secundario",
                    type: "Reserva",
                  },
                ].map((event, i) => (
                  <div key={i} className="flex items-start space-x-4 rounded-md border p-3">
                    <Calendar className="mt-px h-5 w-5 text-primary" />
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{event.title}</p>
                        <Badge variant={event.type === "Reserva" ? "outline" : "secondary"}>{event.type}</Badge>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <span>{event.date}</span>
                        <span className="mx-1">•</span>
                        <span>{event.time}</span>
                        <span className="mx-1">•</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Estadísticas de Servicios</CardTitle>
              <CardDescription>Distribución de servicios por categoría</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <span className="mr-1 h-3 w-3 rounded-full bg-primary"></span>
                      <span>Préstamo de Equipos</span>
                    </div>
                    <span className="font-medium">42%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-full w-[42%] rounded-full bg-primary"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <span className="mr-1 h-3 w-3 rounded-full bg-blue-500"></span>
                      <span>Reserva de Espacios</span>
                    </div>
                    <span className="font-medium">28%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-full w-[28%] rounded-full bg-blue-500"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <span className="mr-1 h-3 w-3 rounded-full bg-amber-500"></span>
                      <span>Soporte Técnico</span>
                    </div>
                    <span className="font-medium">18%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-full w-[18%] rounded-full bg-amber-500"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <span className="mr-1 h-3 w-3 rounded-full bg-rose-500"></span>
                      <span>Desarrollo Web</span>
                    </div>
                    <span className="font-medium">12%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-secondary">
                    <div className="h-full w-[12%] rounded-full bg-rose-500"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Recordatorio</AlertTitle>
          <AlertDescription>
            Hay 5 tickets pendientes de asignación que requieren atención inmediata.
            <Button variant="link" size="sm" className="h-auto p-0 pl-1">
              Ver tickets <ArrowUpRight className="ml-1 h-3 w-3" />
            </Button>
          </AlertDescription>
        </Alert>
      </main>
    </div>
  )
}

