"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Mock data for active chats
const activeChats = [
  {
    id: "T-1001",
    user: {
      name: "María González",
      department: "Facultad de Ciencias",
    },
    service: "Auditorio",
    subject: "Reserva para conferencia",
    lastMessage: "Sí, necesitaríamos proyector, micrófono y conexión a internet para los ponentes.",
    timestamp: "2025-03-30T10:35:00",
    status: "Pendiente",
    unread: 2,
  },
  {
    id: "T-1002",
    user: {
      name: "Juan Pérez",
      department: "Facultad de Biología",
    },
    service: "Salón",
    subject: "Clase de Biología",
    lastMessage: "Serán 30 estudiantes. También necesitaríamos acceso a lavabos para la práctica.",
    timestamp: "2025-03-29T09:15:00",
    status: "En Proceso",
    unread: 0,
  },
  {
    id: "T-1005",
    user: {
      name: "Carlos Rodríguez",
      department: "Departamento de TI",
    },
    service: "Configuración DNS",
    subject: "Nuevo subdominio",
    lastMessage: "Necesitamos crear un subdominio para el nuevo proyecto de investigación.",
    timestamp: "2025-03-28T14:20:00",
    status: "Pendiente",
    unread: 1,
  },
  {
    id: "T-1006",
    user: {
      name: "Laura Sánchez",
      department: "Comunicación Social",
    },
    service: "Desarrollo Web",
    subject: "Página para evento",
    lastMessage: "¿Cuándo podríamos tener una primera versión de la página para revisión?",
    timestamp: "2025-03-27T16:45:00",
    status: "En Proceso",
    unread: 0,
  },

]

export function ChatList() {
  return (
    <div className="space-y-4">
      {activeChats.map((chat) => (
        <Link key={chat.id} href={`/chat/${chat.id}`} className="block">
          <div className="flex items-start space-x-4 rounded-md border p-4 transition-colors hover:bg-accent">
            <Avatar>
              <AvatarImage src={`/placeholder.svg?height=40&width=40`} />
              <AvatarFallback>
                {chat.user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <h4 className="font-medium">{chat.user.name}</h4>
                <span className="text-xs text-muted-foreground">
                  {new Date(chat.timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="font-medium">{chat.id}:</span> {chat.subject}
              </p>
              <p className="text-sm line-clamp-1">{chat.lastMessage}</p>
              <div className="flex items-center justify-between">
                <Badge
                  variant={
                    chat.status === "Pendiente" ? "outline" : chat.status === "En Proceso" ? "secondary" : "default"
                  }
                >
                  {chat.status}
                </Badge>
                {chat.unread > 0 && (
                  <Badge className="ml-auto" variant="default">
                    {chat.unread} nuevo{chat.unread > 1 ? "s" : ""}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

