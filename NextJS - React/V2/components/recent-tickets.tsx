import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const recentTickets = [
  {
    id: "T-1234",
    title: "Solicitud de proyector para conferencia",
    status: "Pendiente",
    priority: "Alta",
    created: "Hace 2 horas",
    user: {
      name: "Carlos Méndez",
      avatar: "/placeholder.svg?height=32&width=32",
      department: "Investigación",
    },
  },
  {
    id: "T-1233",
    title: "Configuración DNS para nuevo sitio",
    status: "En Progreso",
    priority: "Media",
    created: "Hace 5 horas",
    user: {
      name: "Laura Sánchez",
      avatar: "/placeholder.svg?height=32&width=32",
      department: "Comunicación",
    },
  },
  {
    id: "T-1232",
    title: "Reserva de auditorio para evento",
    status: "Completado",
    priority: "Baja",
    created: "Hace 1 día",
    user: {
      name: "Miguel Torres",
      avatar: "/placeholder.svg?height=32&width=32",
      department: "Eventos",
    },
  },
  {
    id: "T-1231",
    title: "Préstamo de laptop para presentación",
    status: "Pendiente",
    priority: "Media",
    created: "Hace 1 día",
    user: {
      name: "Ana García",
      avatar: "/placeholder.svg?height=32&width=32",
      department: "Docencia",
    },
  },
]

export function RecentTickets() {
  return (
    <div className="space-y-4">
      {recentTickets.map((ticket) => (
        <div key={ticket.id} className="flex items-start space-x-4 rounded-md border p-3">
          <Avatar className="h-9 w-9">
            <AvatarImage src={ticket.user.avatar} alt={ticket.user.name} />
            <AvatarFallback>
              {ticket.user.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium leading-none">{ticket.title}</p>
              <Badge
                variant={
                  ticket.status === "Pendiente" ? "outline" : ticket.status === "En Progreso" ? "secondary" : "default"
                }
              >
                {ticket.status}
              </Badge>
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <span>{ticket.id}</span>
              <span className="mx-1">•</span>
              <span>{ticket.created}</span>
              <span className="mx-1">•</span>
              <span>{ticket.user.department}</span>
            </div>
            <div className="flex items-center pt-1">
              <Badge variant="outline" className="text-xs mr-2">
                {ticket.priority}
              </Badge>
              <Button variant="ghost" size="sm" className="h-7 px-2 text-xs">
                Ver detalles
              </Button>
            </div>
          </div>
        </div>
      ))}
      <Button variant="outline" className="w-full">
        Ver todos los tickets
      </Button>
    </div>
  )
}

