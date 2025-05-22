import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Send } from "lucide-react"

export default function ChatsPage() {
  return (
    <div className="flex flex-col h-screen">
      <header className="border-b">
        <div className="flex h-16 items-center px-4 gap-4">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold">Chats</h1>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <div className="w-80 border-r flex flex-col">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar conversaciones..." className="w-full pl-8" />
            </div>
          </div>
          <Tabs defaultValue="all" className="flex-1 flex flex-col">
            <div className="px-4 py-2 border-b">
              <TabsList className="w-full">
                <TabsTrigger value="all" className="flex-1">
                  Todos
                </TabsTrigger>
                <TabsTrigger value="unread" className="flex-1">
                  No leídos
                </TabsTrigger>
                <TabsTrigger value="archived" className="flex-1">
                  Archivados
                </TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="all" className="flex-1 p-0">
              <ScrollArea className="h-[calc(100vh-12.5rem)]">
                <div className="space-y-1 p-2">
                  {[
                    {
                      name: "Carlos Méndez",
                      avatar: "/placeholder.svg?height=40&width=40",
                      message: "Gracias por la información sobre el proyector.",
                      time: "10:42",
                      unread: true,
                      active: true,
                    },
                    {
                      name: "Laura Sánchez",
                      avatar: "/placeholder.svg?height=40&width=40",
                      message: "¿Cuándo estará lista la configuración DNS?",
                      time: "09:30",
                      unread: true,
                    },
                    {
                      name: "Miguel Torres",
                      avatar: "/placeholder.svg?height=40&width=40",
                      message: "Confirmo la reserva del auditorio para el viernes.",
                      time: "Ayer",
                    },
                    {
                      name: "Ana García",
                      avatar: "/placeholder.svg?height=40&width=40",
                      message: "¿Puedo recoger la laptop hoy mismo?",
                      time: "Ayer",
                    },
                    {
                      name: "Roberto Díaz",
                      avatar: "/placeholder.svg?height=40&width=40",
                      message: "Necesito ayuda con la videoconferencia.",
                      time: "Lun",
                    },
                    {
                      name: "Elena Martínez",
                      avatar: "/placeholder.svg?height=40&width=40",
                      message: "¿Hay disponibilidad para el salón 103?",
                      time: "Lun",
                    },
                    {
                      name: "Javier López",
                      avatar: "/placeholder.svg?height=40&width=40",
                      message: "Gracias por el soporte técnico.",
                      time: "Dom",
                    },
                    {
                      name: "Patricia Ramírez",
                      avatar: "/placeholder.svg?height=40&width=40",
                      message: "¿Cuándo estará lista la página web?",
                      time: "23 Mar",
                    },
                  ].map((chat, i) => (
                    <div
                      key={i}
                      className={`flex items-center space-x-4 rounded-md p-2 cursor-pointer transition-colors ${
                        chat.active ? "bg-secondary" : "hover:bg-muted"
                      }`}
                    >
                      <Avatar className="h-10 w-10 relative">
                        <AvatarImage src={chat.avatar} alt={chat.name} />
                        <AvatarFallback>
                          {chat.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                        {chat.unread && (
                          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-primary"></span>
                        )}
                      </Avatar>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p
                            className={`text-sm font-medium ${chat.unread ? "text-foreground" : "text-muted-foreground"}`}
                          >
                            {chat.name}
                          </p>
                          <span className="text-xs text-muted-foreground">{chat.time}</span>
                        </div>
                        <p className={`text-xs truncate ${chat.unread ? "text-foreground" : "text-muted-foreground"}`}>
                          {chat.message}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="unread" className="flex-1 p-0">
              <div className="p-8 text-center text-muted-foreground">Mostrando solo conversaciones no leídas</div>
            </TabsContent>
            <TabsContent value="archived" className="flex-1 p-0">
              <div className="p-8 text-center text-muted-foreground">Mostrando solo conversaciones archivadas</div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="flex-1 flex flex-col">
          <div className="border-b p-4 flex items-center space-x-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Carlos Méndez" />
              <AvatarFallback>CM</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="text-sm font-medium">Carlos Méndez</h3>
              <p className="text-xs text-muted-foreground">Ticket: T-1234 • Solicitud de proyector</p>
            </div>
            <Button variant="outline" size="sm">
              Ver ticket
            </Button>
          </div>
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              <div className="flex gap-4 items-start">
                <Avatar className="h-10 w-10 mt-1">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Carlos Méndez" />
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Carlos Méndez</span>
                    <span className="text-xs text-muted-foreground">10:30</span>
                  </div>
                  <div className="rounded-lg bg-muted p-3 text-sm">
                    Buenos días, necesito solicitar un proyector para una conferencia que tendremos el próximo viernes
                    en el auditorio principal. ¿Podría indicarme si hay disponibilidad?
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start justify-end">
                <div className="space-y-2">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-xs text-muted-foreground">10:35</span>
                    <span className="text-sm font-medium">Tú</span>
                  </div>
                  <div className="rounded-lg bg-primary p-3 text-sm text-primary-foreground">
                    Hola Carlos, buenos días. Sí, tenemos proyectores disponibles para el viernes. ¿A qué hora sería la
                    conferencia y cuánto tiempo durará?
                  </div>
                </div>
                <Avatar className="h-10 w-10 mt-1">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Admin" />
                  <AvatarFallback>AA</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex gap-4 items-start">
                <Avatar className="h-10 w-10 mt-1">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Carlos Méndez" />
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Carlos Méndez</span>
                    <span className="text-xs text-muted-foreground">10:38</span>
                  </div>
                  <div className="rounded-lg bg-muted p-3 text-sm">
                    La conferencia será de 10:00 a 12:00. También necesitaríamos un micrófono inalámbrico si es posible.
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start justify-end">
                <div className="space-y-2">
                  <div className="flex items-center justify-end gap-2">
                    <span className="text-xs text-muted-foreground">10:40</span>
                    <span className="text-sm font-medium">Tú</span>
                  </div>
                  <div className="rounded-lg bg-primary p-3 text-sm text-primary-foreground">
                    Perfecto, he reservado un proyector y un micrófono inalámbrico para el viernes de 10:00 a 12:00 en
                    el auditorio principal. ¿Necesitarás algún otro equipo o asistencia técnica durante el evento?
                  </div>
                </div>
                <Avatar className="h-10 w-10 mt-1">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Admin" />
                  <AvatarFallback>AA</AvatarFallback>
                </Avatar>
              </div>

              <div className="flex gap-4 items-start">
                <Avatar className="h-10 w-10 mt-1">
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Carlos Méndez" />
                  <AvatarFallback>CM</AvatarFallback>
                </Avatar>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Carlos Méndez</span>
                    <span className="text-xs text-muted-foreground">10:42</span>
                  </div>
                  <div className="rounded-lg bg-muted p-3 text-sm">
                    Gracias por la información sobre el proyector. No, con eso será suficiente. ¿Debo pasar a recoger el
                    equipo o estará ya instalado en el auditorio?
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
          <div className="border-t p-4">
            <div className="flex items-center space-x-2">
              <Input placeholder="Escribe un mensaje..." className="flex-1" />
              <Button size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Enviar mensaje</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

