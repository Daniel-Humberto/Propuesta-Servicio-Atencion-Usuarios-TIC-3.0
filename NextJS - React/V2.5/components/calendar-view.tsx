"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, MapPin, Plus } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { addDays, startOfWeek, format, isSameDay } from "date-fns"
import { es } from "date-fns/locale"

interface Event {
    id: number;
    title: string;
    date: Date;
    startTime: string;
    endTime: string;
    location: string;
    type: string;
}

// Mock data for events
const events: Event[] = [
    {
        id: 1,
        title: "Conferencia de Energías Renovables",
        date: new Date(2025, 3, 15),
        startTime: "10:00",
        endTime: "13:00",
        location: "Auditorio Principal",
        type: "Reserva de Auditorio",
    },
    {
        id: 2,
        title: "Clase de Biología",
        date: new Date(2025, 3, 10),
        startTime: "14:00",
        endTime: "16:00",
        location: "Salón B-12",
        type: "Reserva de Salón",
    },
    {
        id: 3,
        title: "Taller de Reciclaje",
        date: new Date(2025, 3, 20),
        startTime: "09:00",
        endTime: "12:00",
        location: "Salón Multiusos",
        type: "Reserva de Salón",
    },
    {
        id: 4,
        title: "Presentación de Proyectos",
        date: new Date(2025, 3, 25),
        startTime: "15:00",
        endTime: "18:00",
        location: "Auditorio Secundario",
        type: "Reserva de Auditorio",
    },
    {
        id: 5,
        title: "Mantenimiento de Equipos",
        date: new Date(2025, 3, 5),
        startTime: "08:00",
        endTime: "17:00",
        location: "Laboratorio de Cómputo",
        type: "Mantenimiento",
    },
]

// Function to get events for a specific date
const getEventsForDate = (date: Date) => {
    return events.filter(
        (event) =>
            event.date.getDate() === date.getDate() &&
            event.date.getMonth() === date.getMonth() &&
            event.date.getFullYear() === date.getFullYear(),
    )
}

// Function to get upcoming events
const getUpcomingEvents = () => {
    const today = new Date()
    return events
        .filter((event) => event.date >= today)
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .slice(0, 5)
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

const WeekView = ({ date, events }: { date: Date; events: Event[] }) => {
    const weekStart = startOfWeek(date, { weekStartsOn: 1 })
    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))

    return (
        <div className="grid grid-cols-7 gap-2 p-4">
            {weekDays.map((day) => (
                <div key={day.toString()} className="min-h-[150px] p-2 border rounded-lg">
                    <div className="text-sm font-medium mb-2">
                        {format(day, "EEE d", { locale: es })}
                    </div>
                    <div className="space-y-1">
                        {events
                            .filter((event) => isSameDay(event.date, day))
                            .map((event) => (
                                <div
                                    key={event.id}
                                    className="text-xs p-1 rounded bg-primary/10 truncate"
                                    title={event.title}
                                >
                                    {event.startTime} - {event.title}
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

const DayView = ({ date, events }: { date: Date; events: Event[] }) => {
    const dayEvents = events.filter((event) => isSameDay(event.date, date))
    const hours = Array.from({ length: 24 }, (_, i) => i)

    return (
        <div className="flex flex-col h-[600px] overflow-y-auto">
            {hours.map((hour) => (
                <div key={hour} className="flex min-h-[60px] border-b">
                    <div className="w-16 p-2 text-sm text-muted-foreground">
                        {hour.toString().padStart(2, "0")}:00
                    </div>
                    <div className="flex-1 p-2">
                        {dayEvents
                            .filter((event) => parseInt(event.startTime.split(":")[0]) === hour)
                            .map((event) => (
                                <div
                                    key={event.id}
                                    className="p-2 rounded bg-primary/10 text-sm"
                                >
                                    <div className="font-medium">{event.title}</div>
                                    <div className="text-xs text-muted-foreground">
                                        {event.startTime} - {event.endTime}
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

// Añade estos estilos globales al principio del archivo
const calendarStyles = {
    root: "w-full h-full flex flex-col",
    months: "flex-1 flex flex-col",
    month: "flex-1 flex flex-col",
    caption: "flex justify-between px-8 py-4 text-2xl font-semibold",
    caption_label: "text-xl font-semibold",
    nav: "flex items-center gap-1",
    nav_button: "h-10 w-10 bg-transparent p-0 opacity-50 hover:opacity-100 hover:bg-muted",
    nav_button_previous: "absolute left-1",
    nav_button_next: "absolute right-1",
    table: "w-full flex-1 border-collapse",
    head_row: "flex w-full",
    head_cell: "flex-1 text-xl font-semibold p-4 text-center",
    row: "flex w-full flex-1",
    cell: "flex-1 text-center relative p-0 focus-within:relative focus-within:z-20 [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent",
    day: "h-full w-full p-0 font-normal aria-selected:opacity-100 hover:bg-muted rounded-md",
    day_range_end: "day-range-end",
    day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
    day_today: "bg-accent text-accent-foreground",
    day_outside: "day-outside text-muted-foreground opacity-50",
    day_disabled: "text-muted-foreground opacity-50",
    day_hidden: "invisible",
    day_button: "h-full w-full flex items-center justify-center text-xl p-2",
};

export function CalendarView() {
    const [date, setDate] = useState<Date>(new Date())
    const [view, setView] = useState<"month" | "week" | "day">("month")

    const selectedDateEvents = getEventsForDate(date)
    const upcomingEvents = getUpcomingEvents()

    return (
        <div className="container mx-auto py-6">
            {/* Top Section with Events Cards */}
            <div className="grid gap-6 md:grid-cols-2 mb-6">
                {/* Selected Date Events Card */}
                <Card className="border-none shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                        <CardTitle className="text-xl font-semibold">
                            Eventos del{" "}
                            {date.toLocaleDateString("es-ES", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            })}
                        </CardTitle>
                        <Button size="sm" variant="outline">
                            <Plus className="h-4 w-4 mr-2" />
                            Agregar Evento
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-[200px]">
                            <div className="space-y-4 pr-4">
                                {selectedDateEvents.length > 0 ? (
                                    selectedDateEvents.map((event) => (
                                        <div
                                            key={event.id}
                                            className="flex items-start space-x-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                                                <CalendarDays className="h-6 w-6 text-primary" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="font-medium">{event.title}</p>
                                                <div className="flex items-center text-sm text-muted-foreground">
                                                    <Clock className="mr-1 h-4 w-4" />
                                                    <span>
                                                        {event.startTime} - {event.endTime}
                                                    </span>
                                                </div>
                                                <div className="flex items-center text-sm text-muted-foreground">
                                                    <MapPin className="mr-1 h-4 w-4" />
                                                    <span>{event.location}</span>
                                                </div>
                                                <Badge variant="outline">{event.type}</Badge>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-center text-muted-foreground py-8">
                                        No hay eventos programados para este día
                                    </p>
                                )}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>

                {/* Upcoming Events Card */}
                <Card className="border-none shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-xl font-semibold">Próximos Eventos</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ScrollArea className="h-[200px]">
                            <div className="space-y-4 pr-4">
                                {upcomingEvents.length > 0 ? (
                                    upcomingEvents.map((event) => (
                                        <div
                                            key={event.id}
                                            className="flex items-start space-x-4 rounded-lg border p-4 transition-colors hover:bg-muted/50"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                                                <CalendarDays className="h-6 w-6 text-primary" />
                                            </div>
                                            <div className="space-y-1">
                                                <p className="font-medium">{event.title}</p>
                                                <div className="flex items-center text-sm text-muted-foreground">
                                                    <CalendarDays className="mr-1 h-4 w-4" />
                                                    <span>
                                                        {event.date.toLocaleDateString()} ({event.startTime} - {event.endTime})
                                                    </span>
                                                </div>
                                                <div className="flex items-center text-sm text-muted-foreground">
                                                    <MapPin className="mr-1 h-4 w-4" />
                                                    <span>{event.location}</span>
                                                </div>
                                                <Badge variant="outline">{event.type}</Badge>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-center text-muted-foreground py-8">
                                        No hay eventos próximos
                                    </p>
                                )}
                            </div>
                        </ScrollArea>
                    </CardContent>
                </Card>
            </div>

            {/* Calendar Section */}
            <div className="w-full">
                <Card className="border-none shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                        <CardTitle className="text-xl font-semibold">Calendario</CardTitle>
                        <Tabs value={view} defaultValue="month" className="w-[300px]">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="month" onClick={() => setView("month")}>
                                    Mes
                                </TabsTrigger>
                                <TabsTrigger value="week" onClick={() => setView("week")}>
                                    Semana
                                </TabsTrigger>
                                <TabsTrigger value="day" onClick={() => setView("day")}>
                                    Día
                                </TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="h-[350px] w-full overflow-hidden">
                            {view === "month" && (
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={(date) => date && setDate(date)}
                                    className="w-full h-full"
                                    modifiers={{ hasEvents: (date) => hasEvents(date) }}
                                    modifiersStyles={{
                                        hasEvents: {
                                            backgroundColor: "hsl(var(--primary) / 0.1)",
                                            fontWeight: "bold",
                                            borderRadius: "0.25rem",
                                        },
                                    }}
                                    showOutsideDays={true}
                                />
                            )}
                            {view === "week" && <WeekView date={date} events={events} />}
                            {view === "day" && <DayView date={date} events={events} />}
                        </div>
                        <style jsx global>{`
                            .rdp {
                                margin: 0;
                                width: 100%;
                                height: 100%;
                            }
                            .rdp-months {
                                height: 100%;
                                padding: 16px;
                            }
                            .rdp-month {
                                height: 100%;
                            }
                            .rdp-table {
                                height: calc(100% - 40px);
                                margin: 0;
                            }
                            .rdp-cell {
                                height: 40px;
                                padding: 2px;
                            }
                            .rdp-head_cell {
                                height: 32px;
                                font-size: 0.875rem;
                                font-weight: 500;
                                color: hsl(var(--muted-foreground));
                            }
                            .rdp-button {
                                width: 100%;
                                height: 100%;
                                font-size: 0.875rem;
                            }
                        `}</style>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}