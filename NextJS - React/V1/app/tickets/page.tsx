import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ChevronDown, Download, Filter, MoreHorizontal, Plus, Search, SlidersHorizontal } from "lucide-react"

export default function TicketsPage() {
  return (
    <div className="flex flex-col">
      <header className="border-b">
        <div className="flex h-16 items-center px-4 gap-4">
          <SidebarTrigger />
          <h1 className="text-xl font-semibold">Tickets</h1>
          <div className="ml-auto flex items-center space-x-2">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Nuevo Ticket
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 p-4 md:p-6">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
            <div className="flex items-center gap-2">
              <div className="relative w-full md:w-80">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar tickets..." className="w-full pl-8" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="h-9">
                    <Filter className="mr-2 h-4 w-4" />
                    Filtrar
                    <ChevronDown className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                  <DropdownMenuLabel>Filtrar por estado</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Todos</DropdownMenuItem>
                  <DropdownMenuItem>Pendientes</DropdownMenuItem>
                  <DropdownMenuItem>En Progreso</DropdownMenuItem>
                  <DropdownMenuItem>Completados</DropdownMenuItem>
                  <DropdownMenuItem>Cancelados</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="outline" size="sm" className="h-9">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Opciones avanzadas
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="30">
                <SelectTrigger className="w-[110px]">
                  <SelectValue placeholder="Mostrar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 por pág.</SelectItem>
                  <SelectItem value="20">20 por pág.</SelectItem>
                  <SelectItem value="30">30 por pág.</SelectItem>
                  <SelectItem value="40">40 por pág.</SelectItem>
                  <SelectItem value="50">50 por pág.</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Download className="h-4 w-4" />
                <span className="sr-only">Descargar</span>
              </Button>
            </div>
          </div>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID</TableHead>
                  <TableHead>Título</TableHead>
                  <TableHead>Solicitante</TableHead>
                  <TableHead>Departamento</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Prioridad</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">T-{1234 + i}</TableCell>
                    <TableCell>
                      {
                        [
                          "Solicitud de proyector para conferencia",
                          "Configuración DNS para nuevo sitio",
                          "Reserva de auditorio para evento",
                          "Préstamo de laptop para presentación",
                          "Soporte técnico para videoconferencia",
                        ][i % 5]
                      }
                    </TableCell>
                    <TableCell>
                      {["Carlos Méndez", "Laura Sánchez", "Miguel Torres", "Ana García", "Roberto Díaz"][i % 5]}
                    </TableCell>
                    <TableCell>
                      {["Investigación", "Comunicación", "Eventos", "Docencia", "Administración"][i % 5]}
                    </TableCell>
                    <TableCell>
                      {["24 Mar, 2025", "23 Mar, 2025", "22 Mar, 2025", "21 Mar, 2025", "20 Mar, 2025"][i % 5]}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          i % 4 === 0 ? "outline" : i % 4 === 1 ? "secondary" : i % 4 === 2 ? "default" : "destructive"
                        }
                      >
                        {["Pendiente", "En Progreso", "Completado", "Cancelado"][i % 4]}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          i % 3 === 0
                            ? "border-red-500 text-red-500"
                            : i % 3 === 1
                              ? "border-yellow-500 text-yellow-500"
                              : "border-green-500 text-green-500"
                        }
                      >
                        {["Alta", "Media", "Baja"][i % 3]}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Abrir menú</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                          <DropdownMenuItem>Editar</DropdownMenuItem>
                          <DropdownMenuItem>Asignar</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-destructive">Cancelar ticket</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              Mostrando <strong>1</strong> a <strong>10</strong> de <strong>42</strong> resultados
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled>
                Anterior
              </Button>
              <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                4
              </Button>
              <Button variant="outline" size="sm">
                5
              </Button>
              <Button variant="outline" size="sm">
                Siguiente
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

