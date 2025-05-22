"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function TicketsFilter() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar tickets..." className="pl-8" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los estados</SelectItem>
              <SelectItem value="pending">Pendiente</SelectItem>
              <SelectItem value="in-progress">En Proceso</SelectItem>
              <SelectItem value="completed">Concluido</SelectItem>
              <SelectItem value="cancelled">Cancelado</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Tipo de Servicio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los servicios</SelectItem>
              <SelectItem value="auditorium">Auditorio</SelectItem>
              <SelectItem value="classroom">Salón</SelectItem>
              <SelectItem value="computer">Computadora</SelectItem>
              <SelectItem value="projector">Proyector</SelectItem>
              <SelectItem value="dns">Configuración DNS</SelectItem>
              <SelectItem value="web">Desarrollo Web</SelectItem>
            </SelectContent>
          </Select>
          <Button>Filtrar</Button>
        </div>
      </CardContent>
    </Card>
  )
}

