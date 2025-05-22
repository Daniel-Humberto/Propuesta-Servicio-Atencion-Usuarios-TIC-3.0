"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, MessageSquare } from "lucide-react"
import Link from "next/link"

const tickets = [
  {
    id: "T-1001",
    service: "Auditorio",
    subject: "Reserva para conferencia",
    date: "2025-04-01",
    status: "Pendiente",
  },
  {
    id: "T-1002",
    service: "Salón",
    subject: "Clase de Biología",
    date: "2025-04-01",
    status: "En Proceso",
  },
  {
    id: "T-1003",
    service: "Computadora",
    subject: "Préstamo para taller",
    date: "2025-03-30",
    status: "Concluido",
  },
  {
    id: "T-1004",
    service: "Proyector",
    subject: "Presentación de proyecto",
    date: "2025-03-29",
    status: "Cancelado",
  },
  {
    id: "T-1005",
    service: "Configuración DNS",
    subject: "Nuevo subdominio",
    date: "2025-03-28",
    status: "Pendiente",
  },
  {
    id: "T-1006",
    service: "Desarrollo Web",
    subject: "Página para evento",
    date: "2025-03-27",
    status: "En Proceso",
  },
  {
    id: "T-1007",
    service: "Auditorio",
    subject: "Evento de graduación",
    date: "2025-03-26",
    status: "Concluido",
  },
  {
    id: "T-1008",
    service: "Salón",
    subject: "Taller de reciclaje",
    date: "2025-03-25",
    status: "Pendiente",
  },
  {
    id: "T-1009",
    service: "Computadora",
    subject: "Laboratorio virtual",
    date: "2025-03-24",
    status: "En Proceso",
  },

]

export function TicketsTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Servicio</TableHead>
            <TableHead className="hidden md:table-cell">Asunto</TableHead>
            <TableHead className="hidden md:table-cell">Fecha</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets.map((ticket) => (
            <TableRow key={ticket.id}>
              <TableCell className="font-medium">{ticket.id}</TableCell>
              <TableCell>{ticket.service}</TableCell>
              <TableCell className="hidden md:table-cell">{ticket.subject}</TableCell>
              <TableCell className="hidden md:table-cell">{new Date(ticket.date).toLocaleDateString()}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    ticket.status === "Pendiente"
                      ? "outline"
                      : ticket.status === "En Proceso"
                        ? "secondary"
                        : ticket.status === "Concluido"
                          ? "default"
                          : "destructive"
                  }
                >
                  {ticket.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Abrir menú</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Link href={`/chat/${ticket.id}`} className="flex items-center w-full">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>Ver chat</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>Editar</DropdownMenuItem>
                    <DropdownMenuItem>Cancelar</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}