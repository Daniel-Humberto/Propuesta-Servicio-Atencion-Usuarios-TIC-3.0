"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ChevronLeft, ChevronRight, Plus, Search } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState<"month" | "day" | "week">("month")

  // Generate some example events
  const events = [
    {
      id: 1,
      title: "Conferencia de Sostenibilidad",
      date: new Date(2025, 2, 28),
      time: "10:00 - 12:00",
      location: "Auditorio Principal",
      type: "Reserva",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Taller de Reciclaje",
      date: new Date(2025, 2, 30),
      time: "15:00 - 17:00",
      location: "Salón 103",
      type: "Servicio",
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Presentación de Proyectos",
      date: new Date(2025, 3, 2),
      time: "09:00 - 13:00",
      location: "Auditorio Secundario",
      type: "Reserva",
      color: "bg-blue-500",
    },
    {
      id: 4,
      title: "Préstamo de Proyector",
      date: new Date(2025, 2, 25),
      time: "14:00 - 16:00",
      location: "Salón 205",
      type: "Préstamo",
      color: "bg-amber-500",
    },
    {
      id: 5,
      title: "Mantenimiento de Equipos",
      date: new Date(2025, 2, 26),
      time: "09:00 - 11:00",
      location: "Laboratorio Central",
      type: "Servicio",
      color: "bg-green-500",
    },
    {
      id: 6,
      title: "Videoconferencia Internacional",
      date: new Date(2025, 3, 5),
      time: "18:00 - 20:00",
      location: "Sala de Conferencias",
      type: "Reserva",
      color: "bg-blue-500",
    },
    {
      id: 7,
      title: "Préstamo de Laptops (10)",
      date: new Date(2025, 3, 8),
      time: "Todo el día",
      location: "Departamento de Investigación",
      type: "Préstamo",
      color: "bg-amber-500",
    },
  ]

  // Function to get events for a specific date
  const getEventsForDate = (date: Date | undefined) => {
    if (!date) return []
    return events.filter(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    )
  }

  // Function to check if a date has events
  const hasEvents = (date: Date) => {
    return events.some(
      (event) =>
        event.date.getDate() === date.getDate() &&
        event.date.getMonth() === date.getMonth() &&
        event.date.getFullYear() === date.getFullYear(),
    )
  }

  // Get current month name
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ]
  const currentMonth = date ? monthNames[date.getMonth()] : ""
  const currentYear = date ? date.getFullYear() : ""

  // Navigate to previous/next month
  const navigateToPreviousMonth = () => {
    if (date) {
      const newDate = new Date(date)
      newDate.setMonth(newDate.getMonth() - 1)
      setDate(newDate)
    }
  }

  const navigateToNextMonth = () => {
    if (date) {
      const newDate = new Date(date)
      newDate.setMonth(newDate.getMonth() + 1)
      setDate(newDate)
    }
  }

  return (
    <div className="flex flex-col">
      <header className="border-b">
        <div className="flex h-16 items-center px-4 gap-4">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold">Calendario</h1>
          <div className="ml-auto flex items-center space-x-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Evento
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={navigateToPreviousMonth}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="text-lg font-medium">
                {currentMonth} {currentYear}
              </div>
              <Button variant="outline" size="icon" onClick={navigateToNextMonth}>
                <ChevronRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => setDate(new Date())}>
                Hoy
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-full md:w-60">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar eventos..." className="w-full pl-8" />
              </div>
              <Select value={view} onValueChange={(value: "month" | "day" | "week") => setView(value)}>
                <SelectTrigger className="w-[120px]">
                  <SelectValue placeholder="Vista" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="month">Mes</SelectItem>
                  <SelectItem value="week">Semana</SelectItem>
                  <SelectItem value="day">Día</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Calendario</CardTitle>
                <CardDescription>Vista de eventos y servicios programados</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  modifiers={{
                    hasEvents: (date) => hasEvents(date),
                  }}
                  modifiersClassNames={{
                    hasEvents: "bg-primary/10 font-bold text-primary",
                  }}
                />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Eventos del día</CardTitle>
                <CardDescription>
                  {date
                    ? date.toLocaleDateString("es-ES", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Selecciona una fecha"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {getEventsForDate(date).length > 0 ? (
                  <div className="space-y-4">
                    {getEventsForDate(date).map((event) => (
                      <div key={event.id} className="flex flex-col space-y-2 rounded-md border p-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`h-3 w-3 rounded-full ${event.color}`}></div>
                            <span className="font-medium">{event.title}</span>
                          </div>
                          <Badge variant="outline">{event.type}</Badge>
                        </div>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <CalendarIcon className="mr-1 h-3 w-3" />
                          <span>{event.time}</span>
                          <span className="mx-1">•</span>
                          <span>{event.location}</span>
                        </div>
                        <Button variant="outline" size="sm">
                          Ver detalles
                        </Button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex h-[200px] items-center justify-center text-center text-muted-foreground">
                    No hay eventos programados para este día
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Próximos eventos</CardTitle>
              <CardDescription>Eventos programados para los próximos días</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {events
                  .filter((event) => event.date >= new Date())
                  .sort((a, b) => a.date.getTime() - b.date.getTime())
                  .slice(0, 6)
                  .map((event) => (
                    <div key={event.id} className="flex flex-col space-y-2 rounded-md border p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className={`h-3 w-3 rounded-full ${event.color}`}></div>
                          <span className="font-medium">{event.title}</span>
                        </div>
                        <Badge variant="outline">{event.type}</Badge>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <CalendarIcon className="mr-1 h-3 w-3" />
                        <span>{event.date.toLocaleDateString("es-ES", { day: "numeric", month: "short" })}</span>
                        <span className="mx-1">•</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">{event.location}</div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

