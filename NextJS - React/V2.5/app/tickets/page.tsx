import { TicketsTable } from "@/components/tickets-table"
import { TicketsFilter } from "@/components/tickets-filter"

export default function TicketsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
        <h1 className="text-3xl font-bold tracking-tight">Tickets</h1>
      </div>

      <TicketsFilter />
      <TicketsTable />
    </div>
  )
}

