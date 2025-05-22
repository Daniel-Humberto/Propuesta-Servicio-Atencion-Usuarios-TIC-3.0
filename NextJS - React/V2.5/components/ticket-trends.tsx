"use client"


import { useTheme } from "next-themes";
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";




const data = [
    { name: "Ene", total: 18, pendientes: 5, resueltos: 10, cancelados: 3 },
    { name: "Feb", total: 22, pendientes: 7, resueltos: 12, cancelados: 3 },
    { name: "Mar", total: 25, pendientes: 8, resueltos: 14, cancelados: 3 },
    { name: "Abr", total: 30, pendientes: 10, resueltos: 17, cancelados: 3 },
    { name: "May", total: 28, pendientes: 9, resueltos: 16, cancelados: 3 },
    { name: "Jun", total: 32, pendientes: 11, resueltos: 18, cancelados: 3 },
    { name: "Jul", total: 35, pendientes: 12, resueltos: 20, cancelados: 3 },
    { name: "Ago", total: 40, pendientes: 15, resueltos: 22, cancelados: 3 },
    { name: "Sep", total: 42, pendientes: 14, resueltos: 25, cancelados: 3 },
    { name: "Oct", total: 45, pendientes: 16, resueltos: 26, cancelados: 3 },
    { name: "Nov", total: 48, pendientes: 18, resueltos: 27, cancelados: 3 },
    { name: "Dic", total: 52, pendientes: 20, resueltos: 29, cancelados: 3 },
];




export function TicketTrends() {

    const { theme } = useTheme();
    const textColor = theme === "dark" ? "#fff" : "#000";
    const gridColor = theme === "dark" ? "#374151" : "#e5e7eb";

    return (
        <ResponsiveContainer width="100%" height={200}>
            <BarChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
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
                <Bar dataKey="cancelados" fill="rgb(255, 0, 0, 0.50)" />
                <Bar dataKey="pendientes" fill="rgb(255, 255, 255, 0.75)" />
                <Bar dataKey="resueltos" fill="rgb(0, 0, 255, 0.25)" />
            </BarChart>
        </ResponsiveContainer>
    );
}