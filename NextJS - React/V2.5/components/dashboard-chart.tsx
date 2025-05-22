"use client"

import { useTheme } from "next-themes"
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
    { name: "Auditorios", value: 35, color: "rgba(255, 255, 255, 0.99)" },
    { name: "Salones", value: 25, color: "rgba(255, 255, 255, 0.66)" },
    { name: "Computadoras", value: 20, color: "rgba(255, 255, 255, 0.33)" },
    { name: "Proyectores", value: 15, color: "rgba(170, 170, 170, 0.33)" },
    { name: "Configuración DNS", value: 10, color: "rgba(85, 85, 85, 0.33)" },
    { name: "Desarrollo Web", value: 5, color: "rgba(0, 0, 0, 1)" },
]

export function DashboardChart() {
  const { theme } = useTheme()
  const textColor = theme === "dark" ? "#fff" : "#000"

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip
          contentStyle={{
            backgroundColor: theme === "dark" ? "#ffffff" : "#fff",
            borderColor: theme === "dark" ? "#000000" : "#e5e7eb",
            color: textColor,
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  )
}