"use client"

import { useTheme } from "next-themes"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "Ana G.",
    resueltos: 45,
    pendientes: 5,
    tiempoPromedio: 1.0,
  },
  {
    name: "Carlos M.",
    resueltos: 38,
    pendientes: 7,
    tiempoPromedio: 1.2,
  },
  {
    name: "Laura S.",
    resueltos: 42,
    pendientes: 4,
    tiempoPromedio: 0.9,
  },
  {
    name: "Miguel R.",
    resueltos: 35,
    pendientes: 8,
    tiempoPromedio: 1.5,
  },
  {
    name: "Sofia P.",
    resueltos: 40,
    pendientes: 6,
    tiempoPromedio: 1.1,
  },
]

export function AdminPerformance() {
  const { theme } = useTheme()
  const textColor = theme === "dark" ? "#fff" : "#000"
  const gridColor = theme === "dark" ? "#374151" : "#e5e7eb"

  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
        <XAxis dataKey="name" stroke={textColor} />
        <YAxis stroke={textColor} />
        <Tooltip
          contentStyle={{
            backgroundColor: theme === "dark" ? "#1f2937" : "#fff",
            borderColor: theme === "dark" ? "#374151" : "#e5e7eb",
            color: textColor,
          }}
        />
        <Legend />
        <Bar dataKey="resueltos" fill="rgba(0, 0, 255, 0.25)" name="Tickets Resueltos" />
        <Bar dataKey="pendientes" fill="rgba(255, 0, 0, 0.50)" name="Tickets Pendientes" />
      </BarChart>
    </ResponsiveContainer>
  )
}

