"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Edit, Trash } from "lucide-react"

const inventory = [
  {
    id: "INV-001",
    name: "Laptop Dell XPS 13",
    type: "Computadora",
    location: "Sala de Juntas A",
    status: "Disponible",
    lastMaintenance: "2025-01-15",
  },
  {
    id: "INV-002",
    name: "Proyector Epson PowerLite",
    type: "Proyector",
    location: "Auditorio Principal",
    status: "En Uso",
    lastMaintenance: "2025-02-10",
  },
  {
    id: "INV-003",
    name: 'MacBook Pro 16"',
    type: "Computadora",
    location: "Oficina Dirección",
    status: "En Uso",
    lastMaintenance: "2025-01-20",
  },
  {
    id: "INV-004",
    name: "Micrófono Inalámbrico Shure",
    type: "Equipo de Audio",
    location: "Almacén",
    status: "Disponible",
    lastMaintenance: "2024-12-05",
  },
  {
    id: "INV-005",
    name: "Proyector BenQ",
    type: "Proyector",
    location: "Salón 201",
    status: "En Reparación",
    lastMaintenance: "2025-03-01",
  },
  {
    id: "INV-006",
    name: "Mesa de Conferencia",
    type: "Mobiliario",
    location: "Sala de Juntas B",
    status: "En Uso",
    lastMaintenance: "2024-11-15",
  },
  {
    id: "INV-007",
    name: "Laptop HP Spectre",
    type: "Computadora",
    location: "Laboratorio",
    status: "Disponible",
    lastMaintenance: "2025-02-15",
  },


]

export function InventoryTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Nombre</TableHead>
            <TableHead className="hidden md:table-cell">Tipo</TableHead>
            <TableHead className="hidden md:table-cell">Ubicación</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="hidden md:table-cell">Último Mantenimiento</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inventory.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell className="hidden md:table-cell">{item.type}</TableCell>
              <TableCell className="hidden md:table-cell">{item.location}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    item.status === "Disponible" ? "default" : item.status === "En Uso" ? "secondary" : "destructive"
                  }
                >
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">
                {new Date(item.lastMaintenance).toLocaleDateString()}
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
                      <Edit className="mr-2 h-4 w-4" />
                      <span>Editar</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Trash className="mr-2 h-4 w-4" />
                      <span>Eliminar</span>
                    </DropdownMenuItem>
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

