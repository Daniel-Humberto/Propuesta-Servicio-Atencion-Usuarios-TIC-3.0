import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, RotateCcw, UserCheck, Users, XCircle, Inbox } from "lucide-react"
import { DashboardChart } from "@/components/dashboard-chart"
import { TicketTrends } from "@/components/ticket-trends"
import { AdminPerformance } from "@/components/admin-performance"
import { UserSatisfaction } from "@/components/user-satisfaction";




export default function Dashboard() {
  return (

    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">


        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Tickets</CardTitle>
            <Inbox className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">+12% respecto al mes anterior</p>
          </CardContent>
        </Card>


        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tickets Pendientes</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">-5% respecto al mes anterior</p>
          </CardContent>
        </Card>


        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tickets Resueltos</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">189</div>
            <p className="text-xs text-muted-foreground">+18% respecto al mes anterior</p>
          </CardContent>
        </Card>


        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tiempo Promedio</CardTitle>
            <RotateCcw className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1.2 días</div>
            <p className="text-xs text-muted-foreground">-0.3 días respecto al mes anterior</p>
          </CardContent>
        </Card>


      </div>


      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">

        <Card className="lg:col-span-4 h-[300px]">

          <CardHeader>
            <CardTitle>Tendencia de Tickets</CardTitle>
          </CardHeader>

          <CardContent className="pl-2">
            <TicketTrends />
          </CardContent>

        </Card>

        <Card className="lg:col-span-3 h-[300px]">

          <CardHeader>
            <CardTitle>Tendencia de Procedimientos</CardTitle>
          </CardHeader>

          <CardContent>
            <DashboardChart />
          </CardContent>

        </Card>

      </div>


      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">

        <Card className="lg:col-span-4 h-[300px]">
          <CardHeader>
            <CardTitle>Rendimiento de Administradores</CardTitle>
          </CardHeader>

          <CardContent>
            <AdminPerformance />
          </CardContent>
        </Card>


        <Card className="lg:col-span-3 h-[300px]">
          <CardHeader>
            <CardTitle>Satisfacción de Usuarios</CardTitle>
          </CardHeader>

          <CardContent>
            <UserSatisfaction />
          </CardContent>
        </Card>


      </div>


    </div>
  )
}