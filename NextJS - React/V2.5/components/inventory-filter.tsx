"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export function InventoryFilter() {
  return (
    <Card>
      <CardContent className="p-4">
        <div className="grid gap-4 md:grid-cols-4">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Buscar en inventario..." className="pl-8" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Tipo de Equipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los tipos</SelectItem>
              <SelectItem value="computer">Computadora</SelectItem>
              <SelectItem value="projector">Proyector</SelectItem>
              <SelectItem value="audio">Equipo de Audio</SelectItem>
              <SelectItem value="furniture">Mobiliario</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los estados</SelectItem>
              <SelectItem value="available">Disponible</SelectItem>
              <SelectItem value="in-use">En Uso</SelectItem>
              <SelectItem value="repair">En Reparación</SelectItem>
            </SelectContent>
          </Select>
          <Button>Filtrar</Button>
        </div>
      </CardContent>
    </Card>
  )
}

