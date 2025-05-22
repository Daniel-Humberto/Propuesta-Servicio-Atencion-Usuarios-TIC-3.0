import { InventoryDashboard } from "@/components/inventory-dashboard"
import { InventoryTable } from "@/components/inventory-table"
import { InventoryFilter } from "@/components/inventory-filter"

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Inventario</h1>

      <InventoryDashboard />
      <InventoryFilter />
      <InventoryTable />
    </div>
  )
}

