"use client"

import { useTheme } from "next-themes"
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "1 Mar",
    "Tickets Creados": 12,
    "Tickets Resueltos": 10,
    "Servicios Programados": 5,
  },
  {
    name: "5 Mar",
    "Tickets Creados": 18,
    "Tickets Resueltos": 15,
    "Servicios Programados": 8,
  },
  {
    name: "10 Mar",
    "Tickets Creados": 14,
    "Tickets Resueltos": 12,
    "Servicios Programados": 6,
  },
  {
    name: "15 Mar",
    "Tickets Creados": 22,
    "Tickets Resueltos": 19,
    "Servicios Programados": 10,
  },
  {
    name: "20 Mar",
    "Tickets Creados": 16,
    "Tickets Resueltos": 14,
    "Servicios Programados": 7,
  },
  {
    name: "25 Mar",
    "Tickets Creados": 20,
    "Tickets Resueltos": 18,
    "Servicios Programados": 9,
  },
]

export function DashboardChart() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke={isDark ? "#888888" : "#888888"} fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke={isDark ? "#888888" : "#888888"}
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}`}
        />
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "#333333" : "#eeeeee"} />
        <Tooltip
          contentStyle={{
            backgroundColor: isDark ? "#1f2937" : "#ffffff",
            borderColor: isDark ? "#374151" : "#e5e7eb",
            borderRadius: "0.375rem",
            color: isDark ? "#f9fafb" : "#111827",
          }}
        />
        <Legend />
        <Bar dataKey="Tickets Creados" fill="#10b981" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Tickets Resueltos" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        <Bar dataKey="Servicios Programados" fill="#f59e0b" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

